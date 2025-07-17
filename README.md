# nextjs-tlp

A modern and developer-friendly Next.js template project with built-in support for form validation, data fetching, UI components, and code quality tools.

## 🚀 Tech Stack Overview

This project is built on top of [Next.js](https://nextjs.org/) and includes a curated set of tools and libraries to help you build scalable, maintainable web applications faster.

---

## 📦 Dependencies

### 🧠 Core Framework

- **[Next.js](https://nextjs.org/)** – React framework for building full-stack web applications with SSR, API routes, and more.

---

### 📄 Form Handling & Validation

- **[react-hook-form](https://react-hook-form.com/)** – Performant, flexible form management.
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** – Resolver support for external validation libraries.
- **[zod](https://zod.dev/)** – TypeScript-first schema validation library.

---

### 🔄 Data Integration

- **[axios](https://axios-http.com/)** – Promise-based HTTP client for API calls.
- **[@tanstack/react-query](https://tanstack.com/query/v4)** – Powerful data synchronization and caching for React.
- **[@tanstack/react-query-devtools](https://tanstack.com/query/v4/docs/devtools)** – Devtools for debugging React Query.
- **fetch** – Native JavaScript fetch API is also available and supported where preferred.

---

### 🎨 UI Library

- **[shadcn/ui](https://ui.shadcn.com/)** – A beautiful, customizable UI component library built with Tailwind CSS and Radix UI. Offers prebuilt components for modern apps.

---

### 💅 Styling

- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development.
- **[PostCSS](https://postcss.org/)** – CSS transformation tool, used under the hood by Tailwind.

---

### 🧪 Testing

- **[Jest](https://jestjs.io/)** – JavaScript testing framework for writing unit and integration tests.

---

### 🧹 Code Quality

- **[ESLint](https://eslint.org/)** – Pluggable linter to enforce consistent code style.
- **[Prettier](https://prettier.io/)** – Code formatter for consistent styling across your codebase.

---

### 🗃️ State Management

- **[Zustand](https://github.com/pmndrs/zustand)** – A small, fast, and scalable state management solution for React.

---

### 🧪 Testing

- **[Jest](https://jestjs.io/)** – JavaScript testing framework for writing unit and integration tests.

---

### 🧱 Project structure

```
src/
│
├── app/ # Next.js pages/routes (App Router)
│ └── dashboard/
│ └── page.tsx # Presentation/UI Layer (no business logic)
│
├── components/ # Reusable UI components (dumb/pure)
│
├── features/ # Feature modules (smart containers)
│ └── user/
│ ├── components/ # UI for user feature
│ ├── hooks.ts # React hooks to interact with services
│ ├── service.ts # Business logic (services)
│ ├── types.ts # Type definitions (DTOs, etc)
│ └── schema.ts # Zod validation schema
│
├── lib/ # Shared libraries (fetchers, utils)
│ ├── axios.ts # Axios setup (interceptors, baseURL)
│ └── fetcher.ts # Generic API fetcher (for React Query)
│
├── services/ # Cross-feature domain logic (optional)
│
├── store/ # Zustand or other client-side state
│
├── constants/ # Shared constants
│
├── hooks/ # App-wide reusable hooks
│
├── styles/ # Tailwind or global CSS
│
├── tests/ # Jest test cases
│
└── types/ # App-wide shared types/interfaces
```

## 🛠️ Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/nextjs-tlp.git
   cd nextjs-tlp
   ```

2. **Supported commands**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

5. This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🐶 Husky Setup

Husky is used in this project to manage Git hooks, ensuring code quality and consistency before commits.

### Setting Up Husky

1. **Install Husky**:
   Make sure Husky is installed as a dev dependency in your project. You can check this in your `package.json` under `devDependencies`.

2. **Configure Husky Hooks**:
   Husky hooks are configured in the `.husky` directory. For example, the `pre-commit` hook is set up to run linting and tests before allowing a commit.

3. **Make Hooks Executable**:
   Ensure that the hook scripts are executable by running:

   ```bash
   chmod +x .husky/*
   ```

4. **Running Hooks Manually**:
   You can manually run a hook using:
   ```bash
   npx husky run pre-commit
   ```

This setup helps maintain code quality by automatically running linting and tests before each commit.
