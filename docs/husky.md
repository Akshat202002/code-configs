# Husky and CommitLint Integration in Angular Project

## A. Introduction

### What is Husky?

**Husky** is a tool designed to improve your code quality by managing **Git hooks**. Git hooks are custom scripts that execute automatically at certain points in the Git workflow (e.g., before making a commit or pushing code). With Husky, you can ensure that specific checks or tasks (like running linters, tests, or formatters) are executed before the commit or push, preventing bad code from being committed or pushed to the repository.

### What is CommitLint?

**CommitLint** is a tool that helps enforce a specific commit message format. By defining rules for how commit messages should be structured, CommitLint ensures consistent and meaningful commit history. It helps teams standardize their commit messages for better tracking and understanding of changes.

### How will we utilize Husky and CommitLint in our Angular project?

In an Angular project, Husky and CommitLint will:

1. Automatically format, lint, and check the codebase before committing changes using Git hooks.
2. Validate the commit messages to ensure they follow a consistent pattern (e.g., include JIRA IDs).
3. Run linting, formatting, and production build checks before pushing code.

This ensures that code quality is maintained throughout the development process, and the commit history is meaningful.

### What are the benefits of using Husky and CommitLint?

- **Consistent Code Quality**: Husky ensures that code is properly formatted and linted before being committed.
- **Enforces Best Practices**: CommitLint forces developers to write well-structured commit messages.
- **Prevents Common Errors**: With checks in place during commits and pushes, issues like code style violations and broken builds are avoided.
- **Streamlined Workflow**: Automates repetitive tasks like linting and formatting.

---

## B. Setup

### 1. Install Required Packages

For both new and existing projects, the following dependencies are necessary:

```bash
npm install --save-dev husky lint-staged @commitlint/cli @commitlint/config-conventional
```

### 2. Initialize Husky in Your Project

After installing the dependencies, run:

```bash
npx husky install
```

This will initialize the `.husky/` directory, where Husky stores the Git hooks.

### 3. Configure Git Hooks

#### a. `pre-commit` Hook

Update the `.husky/pre-commit` file:

```bash
#!/bin/sh
. "$(dirname "$0")"

npx lint-staged
```

This hook runs `lint-staged` before every commit to automatically format and lint the staged files.

#### b. `commit-msg` Hook

Update the `.husky/commit-msg` file:

```bash
#!/bin/sh
. "$(dirname "$0")"

npx --no-install commitlint --edit "$1"
```

This ensures that the commit messages follow the specified rules by running `commitlint` on each commit.

#### c. `pre-push` Hook

Update the `.husky/pre-push` file:

```bash
#!/bin/sh
. "$(dirname "$0")"

npm run zxProd
```

This hook will execute a production build (`npm run zxProd`) before pushing the code to the remote repository to ensure the build passes.

### 4. Update `lint-staged` Configuration in `package.json`

Add the following configuration to your `package.json`:

```json
"lint-staged": {
  "src/**/*.ts": [
    "npm run format",
    "npm run lintFix",
    "eslint src --fix --max-warnings 0"
  ],
  "src/**/*.html": [
    "npm run formatHtml",
    "npm run lintFix"
  ],
  "src/**/*.scss": [
    "npm run formatScss"
  ]
}
```

This configuration tells `lint-staged` to format and lint TypeScript, HTML, and SCSS files before committing them.

### 5. Configure CommitLint

Create a `commitlint.config.js` file in your project root:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [
      2,
      'always',
      ['minorFeat', 'majorFeat', 'bug', 'lint', 'docs', 'style', 'refactor', 'test']
    ],
    'type-case': [2, 'always', ['lower-case', 'camel-case']],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'jira-match': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-match': ({ subject }) => {
          const jiraPattern = /^[A-Z]{2,5}-\d{1,5} - .+/;
          return [
            jiraPattern.test(subject),
            `The commit subject must start with a Jira ID (e.g., ZRP-2262 - Add login page)`
          ];
        },
      },
    },
  ],
};
```

---

## C. Understanding Husky Configuration

### Pre-commit Hook

The `pre-commit` hook is triggered before a commit is finalized. It runs `lint-staged`, which ensures that only staged files (i.e., the files being committed) are formatted and linted. This prevents unformatted or buggy code from being committed.

### Commit-msg Hook

The `commit-msg` hook checks the commit message format using CommitLint. It ensures that the commit message:

1. Follows a consistent structure.
2. Includes a JIRA ID in the subject line.

### Pre-push Hook

The `pre-push` hook ensures that the project builds successfully before the code is pushed to the remote repository. It runs the `zxProd` script, which performs a production build using Angular’s CLI.

```json
"zxProd": "node --max_old_space_size=16000 ./node_modules/@angular/cli/bin/ng build -c=production --aot --build-optimizer",
```

### Lint-Staged

Lint-staged is configured to:

- **TypeScript (`src/**/*.ts`)**: Run formatting and linting with the `format` and `lintFix` scripts and enforce no warnings with `eslint`.
- **HTML (`src/**/*.html`)**: Run formatting and linting.
- **SCSS (`src/**/*.scss`)**: Apply Prettier formatting for SCSS files.

```json
"lintFix": "npx eslint src --fix",
"formatTs": "prettier --config .prettierrc --write 'src/**/*.ts'",
"formatHtml": "prettier --config .prettierrc --write 'src/**/*.html'",
"formatScss": "prettier --config .prettierrc --write 'src/**/*.scss'",
```

---

## D. Understanding CommitLint Configuration

```
Type(Scope): Jira Id - commit description
```

Here’s a breakdown of the `commitlint.config.js` configuration:

### Header Max Length

- **Rule**: `'header-max-length': [2, 'always', 120]`
- **Explanation**: The commit message should not exceed 120 characters in the header.
- **Example**:
  - ✅ `minorFeat(login): ZD-167 - Add login page`
  - ❌ `minorFeat(login): ZD-167 - Add login page with multiple features for user access management`

### Type Enum

- **Rule**: `'type-enum': [2, 'always', ['minorFeat', 'majorFeat', 'bug', 'lint', 'docs', 'style', 'refactor', 'test']]`
- **Explanation**: The commit message type must be one of the allowed types.
- **Examples**:

  - `minorFeat`: Small improvements
  - `majorFeat`: Big features
  - `bug`: Bugs or errors
  - `lint`: Lint-related fixes
  - `docs`: Documentation changes
  - `style`: Code style updates (formatting)
  - `refactor`: Refactoring code without adding features or fixing bugs
  - `test`: Adding or updating tests
  - 

  The commit type can include the following:

  * feat – a new feature is introduced with the changes
  * fix – a bug fix has occurred
  * chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
  * refactor – refactored code that neither fixes a bug nor adds a feature
  * docs – updates to documentation such as a the README or other markdown files
  * style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
  * test – including new or correcting previous tests
  * perf – performance improvements
  * ci – continuous integration related
  * build – changes that affect the build system or external dependencies
  * revert – reverts a previous commit

### Scope Empty

- **Rule**: `'scope-empty': [2, 'never']`
- **Explanation**: The commit scope must be provided.
- **Example**:
  - ✅ `minorFeat(login): ZD-167 - Add login page`
  - ❌ `minorFeat: ZD-167 - Add login page`

### Subject Empty

- **Rule**: `'subject-empty': [2, 'never']`
- **Explanation**: The subject of the commit message cannot be empty.
- **Example**:
  - ✅ `minorFeat(login): ZD-167 - Add login page`
  - ❌ `minorFeat(login): ZD-167 - `

### JIRA Match

- **Rule**: `'jira-match': [2, 'always']`
- **Explanation**: The commit message must include a JIRA ID at the beginning.
- **Example**:
  - ✅ `minorFeat(login): ZD-167 - Add login page`
  - ❌ `minorFeat(login): Add login page`
  - ❌ `minorFeat(login): zd-167 - Add login page`
  - ❌ `minorFeat(login): ZD167 -Add login page`

This ensures that each commit is linked to a JIRA ticket, providing traceability.

---
