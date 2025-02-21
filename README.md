# Angular Essentials

## Overview
Angular is a TypeScript-based open-source framework developed by Google for building dynamic, scalable, and maintainable single-page applications (SPAs). It follows a component-based architecture and provides powerful tools for front-end development.

## Key Features
- **Component-Based Architecture** – Modular and reusable UI components.
- **Two-Way Data Binding** – Synchronizes data between model and view.
- **Dependency Injection** – Manages dependencies efficiently.
- **Directives & Templates** – Extends HTML functionality.
- **Routing** – Enables navigation between different views.
- **State Management** – Supports services and RxJS for handling application state.
- **Forms Handling** – Template-driven and reactive forms support.

## Installation
1. Install **Node.js** (Ensure you have Node.js >= 14 installed).
2. Install Angular CLI globally:
   ```sh
   npm install -g @angular/cli
   ```
3. Create a new Angular project:
   ```sh
   ng new my-angular-app
   cd my-angular-app
   ```
4. Run the development server:
   ```sh
   ng serve
   ```
   Navigate to `http://localhost:4200/` to see your app running.

## Folder Structure
```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── components/    # UI Components
│   │   ├── services/      # Services for business logic
│   │   ├── app.module.ts  # Root Module
│   │   ├── app.component.ts  # Root Component
│   ├── assets/            # Static assets
│   ├── environments/      # Environment configurations
├── angular.json           # Angular configuration file
├── package.json           # Dependencies and scripts
```

## Basic Commands
- **Serve Application:** `ng serve`
- **Build Application:** `ng build`
- **Generate Component:** `ng generate component my-component`
- **Generate Service:** `ng generate service my-service`
- **Run Tests:** `ng test`

## Useful Resources
- [Official Angular Docs](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [RxJS Library](https://rxjs.dev/)

## License
This project is licensed under the MIT License.

