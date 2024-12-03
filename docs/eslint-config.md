# ESLint Configuration for Angular Project

This README provides an overview of the ESLint configuration used in our Angular project. It explains each rule, why it is enforced, and provides links to the official documentation for further reference.

## Configuration Overview

### Root Configuration

```json
"root": true,

"ignorePatterns": [

"projects/**/*",

"**/*.d.ts",

"**/*.spec.ts"

],
```

- **root**: This is set to `true` to indicate that this is the root ESLint configuration.

- **ignorePatterns**: This specifies patterns for files that ESLint should ignore.

---

### TypeScript (\*.ts) Configuration

#### Parser and Parser Options

```json
"parser": "@typescript-eslint/parser",

"parserOptions": {

"project": "./tsconfig.json",

"sourceType": "module",

"ecmaVersion": "latest"

},
```

- **parser**: Uses the TypeScript ESLint parser.

- **parserOptions**: Configures the parser to use the project's tsconfig.json and sets the source type and ECMAScript version.

---

### Extends

```json
"extends": [

"eslint:recommended",

"plugin:@typescript-eslint/recommended",

"plugin:@angular-eslint/recommended",

"plugin:@angular-eslint/template/process-inline-templates",

"prettier",

"plugin:prettier/recommended"

],

```

- These extend various recommended configurations for ESLint, TypeScript, Angular, and Prettier.

---

### Plugins

```json
"plugins": ["simple-import-sort"],
```

- Adds additional plugins for import sorting.

---

## Rules

```json
"rules": {

"prettier/prettier": "error",

"@angular-eslint/component-selector": [

	"error",

	{

	"prefix": "app",

	"style": "kebab-case",

	"type": "element"

	}
],

"@angular-eslint/directive-selector": [

"error",

	{

	"prefix": "app",

	"style": "camelCase",

	"type": "attribute"

	}

],

"@typescript-eslint/naming-convention": [

	"warn",

	{

	"selector": "default",

	"format": ["camelCase"]

	},

	{

	"selector": "variable",

	"format": ["camelCase", "UPPER_CASE"]

	},

	{

	"selector": "parameter",

	"format": ["camelCase"],

	"leadingUnderscore": "allow"

	},

	{

	"selector": "memberLike",

	"modifiers": ["private"],

	"format": ["camelCase"],

	"leadingUnderscore": "require"

	},

	{

	"selector": "typeLike",

	"format": ["PascalCase"]

	},

	{

	"selector": "interface",

	"format": ["PascalCase"],

	"custom": {

		"regex": "^IZ[A-Z]",

		"match": true

		}

	},

	{

	"selector": "property",

	"format": ["camelCase", "PascalCase"],

	"filter": {

	"regex": "^[A-Z]",

	"match": true

	}

	}
],

"@angular-eslint/no-conflicting-lifecycle": "error",

"@angular-eslint/use-lifecycle-interface": "error",

// Requires type annotations in certain places

"@typescript-eslint/typedef": ["warn", {

	"arrayDestructuring": true,

	"arrowParameter": true,

	"memberVariableDeclaration": true,

	"objectDestructuring": true,

	"parameter": false,

	"propertyDeclaration": true,

	"variableDeclaration": true,

	"variableDeclarationIgnoreFunction": false

}],

"@angular-eslint/no-empty-lifecycle-method": "warn",

"@typescript-eslint/no-unused-vars": "error",

"@typescript-eslint/no-explicit-any": "error",

"@typescript-eslint/prefer-as-const": "error",

"@typescript-eslint/no-var-requires": "error",

"@typescript-eslint/no-inferrable-types": "off",

"@typescript-eslint/no-floating-promises": "error",

"@typescript-eslint/no-misused-promises": "error",

"@typescript-eslint/no-unsafe-assignment": "warn",

"@typescript-eslint/explicit-module-boundary-types": "warn",

"no-duplicate-imports": "error",

"@typescript-eslint/no-unsafe-return": "warn",

"@typescript-eslint/consistent-generic-constructors": ["error", "type-annotation"],

"@typescript-eslint/consistent-indexed-object-style": "error",

"simple-import-sort/imports": "error",

"simple-import-sort/exports": "error",

"no-param-reassign": "error",

"no-console": ["error", { "allow": ["error", "warn", "info"] }],

// This rule enforces that array methods like .map(), .filter(), .find(), .some(), .every(), and .reduce() have a return statement.

"array-callback-return": "off", // future

"@typescript-eslint/ban-types": "error",

"object-shorthand": "warn"

}

```

---

### Key Rules Explained

1.  **prettier/prettier**:

- Enforces Prettier formatting rules.

- Prettier ESLint Plugin

2. **@angular-eslint/component-selector**:

- Enforces consistent component selector naming conventions.

- **Configuration**: Prefix `app`, style `kebab-case`, type `element`.

- **Documentation**: [Component Selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts)

3. **@angular-eslint/directive-selector**:

- Enforces consistent directive selector naming conventions.

- **Configuration**: Prefix `app`, style `camelCase`, type `attribute`.

- **Documentation**: [Directive Selector](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts)

4. **@typescript-eslint/naming-convention**:

- Enforces consistent naming conventions for variables, functions, classes, etc.

- **Documentation**: [Naming Convention](https://typescript-eslint.io/rules/naming-convention/)

5. **@angular-eslint/no-conflicting-lifecycle**:

- Ensures no conflicting lifecycle methods are used in Angular components.

- **Documentation**: [No Conflicting Lifecycle](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-conflicting-lifecycle.ts)

6. **@angular-eslint/use-lifecycle-interface**:

- Ensures that lifecycle hooks are properly implemented.

- **Documentation**: [Use Lifecycle Interface](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md)

7. **@typescript-eslint/typedef**:

- Requires type annotations in specific places.

- **Configuration**: Enforces type annotations for array and object destructuring, arrow parameters, member variables, property declarations, and variable declarations.

- **Documentation**: [Typedef](https://typescript-eslint.io/rules/typedef/)

8. **@angular-eslint/no-empty-lifecycle-method**

- Warns about empty lifecycle methods.

- **Documentation**: [No Empty Lifecycle Method](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md)

9. **@typescript-eslint/no-unused-vars**:

- Warns on unused variables to avoid potential bugs and maintain clean code.

- **Documentation**: [No Unused Vars](https://typescript-eslint.io/rules/no-unused-vars/)

10. **@typescript-eslint/no-explicit-any**

- Disallows the use of the any type.

- **Documentation**: [No Explicit Any](https://typescript-eslint.io/rules/no-explicit-any/)

11. **@typescript-eslint/prefer-as-const**:

- Suggests using `as const` for literal type inference where applicable.

- **Documentation**: [Prefer As Const](https://typescript-eslint.io/rules/prefer-as-const/)

12. **@typescript-eslint/no-var-requires**:

- Disallows `require` statements except in import statements.

- **Documentation**: [No Var Requires](https://typescript-eslint.io/rules/no-var-requires/)

13. **@typescript-eslint/no-inferrable-types**:

- **Reason**: Avoid unnecessary type annotations.

- **Documentation**: [No Inferrable Types](https://typescript-eslint.io/rules/no-inferrable-types/)

14. **@typescript-eslint/no-floating-promises**:

- Warns on unhandled promises to prevent forgotten promise handling.

- **Documentation**: [No Floating Promises](https://typescript-eslint.io/rules/no-floating-promises/)

15. **@typescript-eslint/no-misused-promises**

- Prevents Promises from being misused.

- **Documentation**: [No Misused Promises](https://typescript-eslint.io/rules/no-misused-promises)

16. **@typescript-eslint/no-unsafe-assignment**

- Warns about unsafe assignments.

- **Documentation**: [No Unsafe Assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)

17. **@typescript-eslint/explicit-module-boundary-types**

- Requires explicit return and argument types on exported functions and classes.

- **Documentation**: [Explicit Module Boundary Types](https://typescript-eslint.io/rules/explicit-module-boundary-types)

18. **@typescript-eslint/no-duplicate-imports**:

- Warns on duplicate import statements to keep imports organized.

- **Documentation**: [No Duplicate Imports](https://typescript-eslint.io/rules/no-duplicate-imports/)

19. **@typescript-eslint/no-unsafe-return**:

- Warns on potentially unsafe return values to prevent runtime errors.

- **Documentation**: [No Unsafe Return](https://typescript-eslint.io/rules/no-unsafe-return/)

20. **@typescript-eslint/consistent-generic-constructors**

- Enforces consistent usage of type annotations for generic constructors.

- **Documentation**: [Consistent Generic Constructors](https://typescript-eslint.io/rules/consistent-generic-constructors/)

21. **@typescript-eslint/consistent-indexed-object-style**

- Enforces a consistent style for index signatures.

- **Documentation**: [Consistent Indexed Object Style](https://typescript-eslint.io/rules/consistent-indexed-object-style/)

22. **simple-import-sort/imports and simple-import-sort/exports**:

- **Reason**: To enforce sorted exports.

- **Documentation**: [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

23. **simple-import-sort/exports**:

- **Reason**: To enforce sorted exports.

- **Documentation**: [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

24. **no-param-reassign**

- Disallows reassignment of function parameters.

- **Documentation**: [No Param Reassign](https://eslint.org/docs/rules/no-param-reassign)

25. **no-console**

- Disallows the use of console, except for error, warn, and info.

- **Documentation**: [No Console](https://eslint.org/docs/rules/no-console)

26. **array-callback-return**:

- Enforces that array methods like `.map()`, `.filter()`, and others have a return statement.

- **Documentation**: [Array Callback Return](https://eslint.org/docs/rules/array-callback-return)

27. **@typescript-eslint/ban-types**:

- Bans specific types from being used.

- **Documentation**: [Ban Types](https://typescript-eslint.io/rules/ban-types)

28. **object-shorthand**

- Encourages the use of ES6 object shorthand syntax.

- **Documentation**: [Object Shorthand](https://eslint.org/docs/rules/object-shorthand)

  ***

## HTML (`*.html`) Configuration

### Extends

```json

"extends": [

"plugin:@angular-eslint/template/recommended",

"plugin:prettier/recommended"

],

```

---

### Overrides

```json

"rules": {

"@angular-eslint/template/no-negated-async": "error",

"@angular-eslint/template/no-duplicate-attributes": "warn",

"@angular-eslint/component-class-suffix": "error"

}

```

---

### Key Rules Explained

1. **@angular-eslint/template/no-negated-async**:

- Disallows negation of async pipes to avoid potential issues with null or undefined values.

- **Documentation**: [No Negated Async](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/src/rules/no-negated-async.ts)

2. **@angular-eslint/template/no-duplicate-attributes**:

- Warns on duplicate attributes in templates to prevent unexpected behavior.

- **Documentation**: [No Duplicate Attributes](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/src/rules/no-duplicate-attributes.ts)

3. **@angular-eslint/component-class-suffix**:

- Enforces consistent suffixes for component class names (`Component` suffix).

- **Documentation**: [Component Class Suffix](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts)

4. **@angular-eslint/template/use-track-by-function**:

- Enforces the use of trackBy function in \*ngFor directives.

- **Documentation**: [Use Track By Function](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/docs/rules/use-track-by-function.md)

---

For more detailed information about each rule, you can visit the [ESLint rules documentation](https://eslint.org/docs/rules/), the [@typescript-eslint rules documentation](https://typescript-eslint.io/rules/), and the [@angular-eslint rules documentation](https://github.com/angular-eslint/angular-eslint#supported-rules).

---
