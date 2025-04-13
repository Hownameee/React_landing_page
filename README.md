# React Monorepo Project
This project is structured as a **monorepo** using [Turborepo](https://turbo.build/). It includes separate `backend` and `frontend` applications, each managed independently within the same repository.
## 🛠️ Installation
Make sure you have **Node.js** and **npm** installed.
Then, clone the repo and run:
```bash
npm install
```
This will install all dependencies across the entire monorepo.
## 🚀 Running the Project
To start the development servers (both frontend and backend if configured with Turbo):
```bash
npm run dev
```
This will run the turbo pipeline and start the necessary services.
## 📁 Project Structure
```
React_landing_page/
├── backend/     # tRPC backend implementation
├── frontend/    # Frontend application (likely Next.js, React, etc.)
├── turbo.json   # Turborepo configuration
├── package.json # Root scripts and dependencies
```
## 📦 Monorepo Tooling
This project uses Turborepo for coordinated task and dependency management across multiple workspaces. Key advantages include:
- **Caching**: Speeds up builds and testing through incremental caching.
- **Parallel Execution**: Efficiently manages tasks across different sub-projects.
- **Coordinated Workflows**: Keeps dependencies and scripts unified throughout the repository.
## 💡 Additional Notes
- Each sub-application (e.g., backend, frontend) has its own `package.json` with potentially unique commands (e.g., `dev`).
- You can expand the `turbo.json` pipelines as your project grows more complex.
- Refer to the [official Turborepo documentation](https://turbo.build/) for more configuration details.
