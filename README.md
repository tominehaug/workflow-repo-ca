# Workflow repo for the CA

This project is a school project for my third semester Workflow course. The purpose of the project is to enhance the student's productivity in a working environment.

## Features

- Unit testing with Vitest
- E2E testing with Playwright
- Code linting with ESLint
- Code formatting with Prettier
- Husky pre-commit hooks
- Environment variables

## Prerequisites

- Node.js (v20+)
- npm

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/tominehaug/workflow-repo-ca.git
```

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Running tests

```bash
npm run unit
```

```bash
npm run e2e
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run prepare` - Sets up Husky pre commit hooks automatically
- `npm run start` - Starts project locally
- `npm run unit` - Runs unit tests with Vitest
- `npm run e2e` - Runs end-to-end testing with Playwright
- `npm run e2e:headed` - Runs end-to-end testing in headed mode

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Husky
- Vitest
- Playwright
- JSDOM
- Tailwind CSS
- live-server

## Author

Tomine Rønningen Haug
@tominehaug
