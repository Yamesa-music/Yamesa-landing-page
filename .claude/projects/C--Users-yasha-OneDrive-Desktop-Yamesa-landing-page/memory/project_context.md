---
name: project_context
description: Landing page is the main project, yamesa-react-native/yamesa-backend is only for schema reference not to be modified
type: feedback
---

Only work within the landing-page directory. The yamesa-react-native (yamesa-backend) folder is reference-only for database schema details. Never modify files there.

**Why:** User manages the backend separately. Landing page is the deployable project.

**How to apply:** When needing DB schema info, read from yamesa-react-native but never write to it. All code changes go in landing-page only.
