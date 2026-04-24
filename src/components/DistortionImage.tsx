"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec2 uImageRes;
uniform float uStrength;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 canvasUv = vUv;
  float aspect = uResolution.x / uResolution.y;

  vec2 md = canvasUv - uMouse;
  vec2 mdAspect = vec2(md.x * aspect, md.y);
  float dist = length(mdAspect);
  float falloff = smoothstep(0.26, 0.0, dist);
  float effect = falloff * uStrength;

  float blockSize = 0.022;
  vec2 blockId = floor(canvasUv / blockSize);
  float h1 = hash(blockId);
  float h2 = hash(blockId + vec2(89.0, 0.0));
  float h3 = hash(blockId + vec2(0.0, 57.0));
  float blockActive = step(0.18, h3);
  vec2 blockOffset = vec2(h1 - 0.5, h2 - 0.5) * 2.0 * blockActive;
  vec2 distortedUv = canvasUv + blockOffset * effect * 0.028;

  float Rc = aspect;
  float Ri = uImageRes.x / uImageRes.y;
  vec2 k = vec2(min(1.0, Rc / Ri), min(1.0, Ri / Rc));
  vec2 imageUv = (1.0 - k) * 0.5 + distortedUv * k;

  gl_FragColor = texture2D(uTexture, imageUv);
}
`;

interface DistortionImageProps {
  srcs: string[];
  alt?: string;
}

const STRIP_W = 800;
const STRIP_H = 1200;

export default function DistortionImage({ srcs, alt = "" }: DistortionImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const srcsKey = srcs.join("|");

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
    }) as WebGLRenderingContext | null;
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTexture = gl.getUniformLocation(program, "uTexture");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uImageRes = gl.getUniformLocation(program, "uImageRes");
    const uStrength = gl.getUniformLocation(program, "uStrength");

    gl.uniform1i(uTexture, 0);
    gl.uniform2f(uImageRes, 1.0, 1.0);
    gl.uniform1f(uStrength, 0.0);
    gl.uniform2f(uMouse, 0.5, 0.5);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255])
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const urls = srcsKey.split("|");
    const n = Math.max(1, urls.length);
    const imgs: HTMLImageElement[] = urls.map(() => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      return img;
    });

    let textureReady = false;
    let loaded = 0;

    const buildTexture = () => {
      const comp = document.createElement("canvas");
      comp.width = STRIP_W * n;
      comp.height = STRIP_H;
      const ctx = comp.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#0A0A0A";
      ctx.fillRect(0, 0, comp.width, comp.height);

      for (let i = 0; i < n; i++) {
        const img = imgs[i];
        if (!img.complete || !img.naturalWidth) continue;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const srcAspect = iw / ih;
        const dstAspect = STRIP_W / STRIP_H;
        let sx = 0,
          sy = 0,
          sw = iw,
          sh = ih;
        if (srcAspect > dstAspect) {
          const newSw = ih * dstAspect;
          sx = (iw - newSw) / 2;
          sw = newSw;
        } else {
          const newSh = iw / dstAspect;
          sy = (ih - newSh) / 2;
          sh = newSh;
        }
        try {
          ctx.drawImage(img, sx, sy, sw, sh, i * STRIP_W, 0, STRIP_W, STRIP_H);
        } catch (err) {
          console.warn("DistortionImage draw failed:", err);
        }
      }

      try {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          comp
        );
        gl.uniform2f(uImageRes, comp.width, comp.height);
        textureReady = true;
      } catch (err) {
        console.warn("DistortionImage texture upload failed:", err);
      }
    };

    imgs.forEach((img, i) => {
      const onDone = () => {
        loaded++;
        if (loaded === n) buildTexture();
      };
      img.onload = onDone;
      img.onerror = () => {
        console.warn("DistortionImage failed to load:", urls[i]);
        onDone();
      };
      img.src = urls[i];
    });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const bw = Math.max(1, Math.floor(w * dpr));
      const bh = Math.max(1, Math.floor(h * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const target: [number, number] = [0.5, 0.5];
    const current: [number, number] = [0.5, 0.5];
    let velocity = 0;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      const dx = x - target[0];
      const dy = y - target[1];
      const moved = Math.sqrt(dx * dx + dy * dy);
      velocity = Math.min(velocity + moved * 22, 1.0);
      target[0] = x;
      target[1] = y;
    };
    container.addEventListener("mousemove", onMove);

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    let rafId = 0;
    const tick = () => {
      if (visible) {
        velocity *= 0.82;
        if (velocity < 0.002) velocity = 0;

        current[0] += (target[0] - current[0]) * 0.3;
        current[1] += (target[1] - current[1]) * 0.3;

        gl.uniform2f(uMouse, current[0], current[1]);
        gl.uniform1f(uStrength, velocity);
        if (textureReady) {
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener("mousemove", onMove);
      gl.deleteProgram(program);
      gl.deleteBuffer(posBuf);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteTexture(texture);
    };
  }, [srcsKey]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      aria-label={alt || undefined}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
