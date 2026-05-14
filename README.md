# Playwright TypeScript Automation

This repository contains an end-to-end automation test suite built with Playwright and TypeScript.

## Tech Stack

- **Playwright** (`@playwright/test`) for browser automation and test execution
- **TypeScript** for strong typing and modern JavaScript features
- **dotenv** for environment variable management
- **ESLint** + **Prettier** for code quality and formatting
- **HTML reporter** for test reporting

## Project Structure

- `playwright.config.ts` - Playwright test configuration
- `tests/` - Test suites and specs
- `src/` - Page objects and reusable automation helper classes
- `.env` - Environment variables for local test execution
- `package.json` - Dependencies and npm scripts

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the project root with the values your tests need.

Example:

```env
TRELLO_URL=https://trello.com
```

### 3. Run tests

Execute Playwright tests with:

```bash
npx playwright test
```

To run a specific browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

### 4. View HTML report

After tests complete, open the generated report:

```bash
npx playwright show-report
```

## Recommended Scripts

You can add the following scripts to `package.json` for convenience:

```json
"scripts": {
  "test": "playwright test",
  "test:chromium": "playwright test --project=chromium",
  "test:firefox": "playwright test --project=firefox",
  "report": "playwright show-report"
}
```

## Notes

- Playwright configuration loads `.env` automatically via `dotenv`.
- The default base URL is set from `TRELLO_URL`.
- Tests are configured to run fully parallel by default.

## License

This project is available under the terms of your chosen license.
