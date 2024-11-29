# Scripts Documentation

This README provides an overview of the available scripts in the project. These scripts facilitate various development and build tasks, ensuring efficient workflow management. Below is a description of each script, including its purpose and usage.

## Table of Contents
1. [Development Scripts](#development-scripts)
2. [Build Scripts](#build-scripts)
3. [Testing and Linting Scripts](#testing-and-linting-scripts)
4. [Formatting Script](#formatting-script)
5. [Protocol Buffer Scripts](#protocol-buffer-scripts)

## Development Scripts

### `nghm`
```sh
npm run nghm
```
- **Purpose**: Serves the Angular application with a large memory allocation and using the OpenSSL legacy provider.
- **Usage**: Use this command when you need to run the application locally and you face memory issues or need to use legacy OpenSSL.

### `nghmS`
```sh
npm run nghmS
```
- **Purpose**: Serves the Angular application with a large memory allocation without using the OpenSSL legacy provider.
- **Usage**: Use this command when you need to run the application locally and face memory issues.

### `nghmp`
```sh
npm run nghmp --configuration <config>
```
- **Purpose**: Serves the Angular application with a large memory allocation and allows specifying a configuration.
- **Usage**: Use this command to run the application with a specific configuration, e.g., development or production.

### `ng`
```sh
npm run ng <command>
```
- **Purpose**: Runs the Angular CLI commands.
- **Usage**: Use this command to run any Angular CLI command, e.g., `ng generate component`.

### `start`
```sh
npm start
```
- **Purpose**: Serves the Angular application.
- **Usage**: Use this command to run the application locally.

## Build Scripts

### `zxProd`
```sh
npm run zxProd
```
- **Purpose**: Builds the Angular application for production with Ahead-Of-Time (AOT) compilation and build optimization.
- **Usage**: Use this command to create an optimized production build of the application.

### `build`
```sh
npm run build
```
- **Purpose**: Builds the Angular application for production.
- **Usage**: Use this command to create a production build of the application.

## Testing and Linting Scripts

### `test`
```sh
npm test
```
- **Purpose**: Runs the application's unit tests.
- **Usage**: Use this command to execute the test suite and ensure code quality.

### `lint`
```sh
npm run lint
```
- **Purpose**: Lints the application code.
- **Usage**: Use this command to check the code for linting errors and enforce coding standards.

### `e2e`
```sh
npm run e2e
```
- **Purpose**: Runs end-to-end tests.
- **Usage**: Use this command to execute end-to-end tests for the application.

## Formatting Script

### `format`
```sh
npm run format
```
- **Purpose**: Formats the TypeScript code using Prettier.
- **Usage**: Use this command to format the codebase for consistent styling.

## Protocol Buffer Scripts

### `customer`
```sh
npm run customer
```
- **Purpose**: Compiles `customer.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for customer-related data.

### `routeTrace`
```sh
npm run routeTrace
```
- **Purpose**: Compiles `routeTrace.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for route tracing.

### `routeTrace_new`
```sh
npm run routeTrace_new
```
- **Purpose**: Compiles `routeTrace_new.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for new route tracing logic.

### `crowFlyDispatch`
```sh
npm run crowFlyDispatch
```
- **Purpose**: Compiles `crowFly_dispatch.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for crow fly dispatch operations.

### `usrOps`
```sh
npm run usrOps
```
- **Purpose**: Compiles `usrOps.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for user operations.

### `algoOperation`
```sh
npm run algoOperation
```
- **Purpose**: Compiles `algoOperation.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for algorithm operations.

### `dbAlgoOp`
```sh
npm run dbAlgoOp
```
- **Purpose**: Compiles `dbOperation.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for database operations.

### `boundary`
```sh
npm run boundary
```
- **Purpose**: Compiles `boundary.proto` to JavaScript and TypeScript definitions.
- **Usage**: Use this command when you need to update the protocol buffer definitions for boundary-related operations.

