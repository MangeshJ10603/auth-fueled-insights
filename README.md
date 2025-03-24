# Auth-Fueled Insights

This project is a modern web application that leverages React (with TypeScript) and Vite. It is structured to help you build scalable and maintainable applications with a focus on authentication, protected routes, and modular code organization.

## Project Structure

- **src/**
  - **components/**  
    Contains reusable UI components and layout components.  
    - `protected-route.tsx`: Provides route protection based on authentication status.  
    - `providers.tsx`: Contains context providers for global state management.  
    - Other subdirectories like `auth/`, `layout/`, `posts/`, and `ui/` contain components related to authentication, layouts, posts management, and UI-specific components.
    
- **context/**  
  Holds React context objects that manage global state and shared logic across the application.
  
- **hooks/**  
  Custom React hooks that encapsulate reusable stateful logic.

- **lib/**  
  Utility libraries and helper functions that can be used across the project.

- **pages/**  
  Contains route-based components that represent full pages in your application.  
  These components make use of the various contexts, hooks, and components to render complete views.

- **types/**  
  Contains TypeScript definitions and interfaces that ensure type safety throughout the codebase.

## Getting Started

1. **Install Dependencies**  
   Run `npm install` or `bun install` if using Bun to install all project dependencies.

2. **Development Server**  
   Run `npm run dev` (or corresponding Bun command) to start the development server.

3. **Building the Project**  
   Run the build script as outlined in the [package.json](package.json) to create a production build.

