# Vite React TypeScript Starter with Jest and Vitest

This project is a comprehensive starter template for building modern web applications using React, TypeScript, and Vite. It includes a robust testing setup with both Jest and Vitest, as well as a custom server for development and production environments.

## Requirements and Setup

### Requirements

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)

### Setup

1. Clone the repository:

   ```
   git clone https://github.com/anderson.carli/vite-start.git
   cd vite-start
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Run tests:

   - Using Vitest (default):
     ```
     npm run test:vitest
     ```
   - Using Jest:
     ```
     npm run test:jest
     ```

5. Build for production:

   ```
   npm run build
   ```

6. Start the production server:
   ```
   npm start
   ```

## Project Structure

```
.
├── .babelrc
├── .env
├── jest.config.js
├── package.json
├── server.js
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Hello.test.tsx
│   │   └── Hello.tsx
│   ├── lib
│   │   ├── utils.test.ts
│   │   └── utils.ts
│   ├── main.tsx
│   └── setupTests.ts
├── tsconfig.json
└── vite.config.ts
```

## File Explanations

### `.babelrc`

This file configures Babel, which is used to transpile modern JavaScript and TypeScript code to be compatible with older environments. The presets included are:

- `@babel/preset-env`: For transpiling ES6+ syntax
- `@babel/preset-react`: For transpiling JSX
- `@babel/preset-typescript`: For transpiling TypeScript

These presets ensure that our code can run in various browser environments and that TypeScript and React syntax is properly handled.

### `.env`

This file contains environment variables for the project:

```
TEST=1
TEST_RUNNER=vitest
PORT=5173
```

- `TEST=1`: Enables running tests before starting the server
- `TEST_RUNNER=vitest`: Sets Vitest as the default test runner
- `PORT=5173`: Specifies the port for the development server

These variables allow for easy configuration of the development environment and testing setup.

### `jest.config.js`

This file configures Jest, a popular testing framework. Key configurations include:

- `preset: 'ts-jest'`: For TypeScript support in tests
- `testEnvironment: 'jsdom'`: Simulates a DOM environment for testing
- `transform`: Specifies how different file types should be transformed before testing
- `setupFilesAfterEnv`: Points to a setup file for additional test configurations
- `moduleNameMapper`: Handles module imports, including CSS modules

This configuration ensures that Jest can properly handle TypeScript, React components, and CSS modules in our tests.

### `package.json`

This file defines the project dependencies and scripts. Notable scripts include:

- `dev`: Runs the development server using the custom `server.js`
- `test:vitest` and `test:jest`: Run tests using Vitest and Jest respectively
- `start`: Starts the production server

The dependencies list includes React, TypeScript, Vite, testing libraries, and other necessary tools for development.

### `server.js`

This is a custom server implementation that:

1. Runs tests before starting the server (if `TEST=1`)
2. Uses the specified test runner (Vitest or Jest)
3. Starts a Vite server for development or production

This custom server allows for more control over the startup process, including running tests and handling different environments.

### `src/App.tsx`

The main React component that renders the application. It imports and uses the `Hello` component.

### `src/components/Hello.tsx` and `Hello.test.tsx`

`Hello.tsx` is a simple React component that takes a `who` prop and renders a greeting. `Hello.test.tsx` contains tests for this component using React Testing Library.

### `src/lib/utils.ts` and `utils.test.ts`

`utils.ts` contains utility functions (in this case, a `capitalize` function). `utils.test.ts` contains unit tests for these utility functions.

### `src/setupTests.ts`

This file imports `@testing-library/jest-dom` to extend Jest with custom matchers for asserting on DOM elements.

### `tsconfig.json`

This file configures TypeScript compiler options. Notable options include:

- `target: "ES2020"`: Specifies the ECMAScript target version
- `jsx: "react-jsx"`: Enables JSX support for React
- `esModuleInterop: true`: Enables interoperability between CommonJS and ES Modules

These options ensure that TypeScript is correctly configured for a modern React application.

### `vite.config.ts`

This file configures Vite, the build tool and development server. It includes settings for the test environment:

- `globals: true`: Allows for global test functions without imports
- `environment: 'jsdom'`: Sets up a DOM-like environment for testing
- `setupFiles: ['./src/setupTests.ts']`: Specifies setup files for tests
- `css: true`: Enables CSS support in tests

This configuration ensures that Vite is properly set up for both development and testing purposes.

## Conclusion

This project template provides a solid foundation for building modern React applications with TypeScript. It includes a comprehensive testing setup with both Jest and Vitest, allowing developers to choose their preferred testing framework. The custom server implementation adds flexibility for running tests and handling different environments, making it suitable for both development and production use.
