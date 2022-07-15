
# Kordis Webapp PoC

tbd

## Roadmap

tbd

## Architecture

tbd

## Run Locally

Clone the project

```bash
  git clone https://github.com/kordis-leitstelle/webapp.git
```
Install dependencies

```bash
  npm i
```

Start the dev server

```bash
  npm run dev
```

## Testing

We use **Vitest** with jsdom for unit testing. It has similar APIs to Jest and integrates
perfectly around Svelte with Component testing and is amazingly fast. Check out more about the decision to use Vitest over Jest [here](https://vitest.dev/guide/comparisons.html#jest) and the
[API Reference ](https://vitest.dev/api/) to learn more about the functionalities.

```bash
  npm run test # run the tests in console
  npm run test:ui # opens the Vitest UI in the browser to visualize the tests
```

For E2E tests we use **Playwright**. It has some benefits over Cypress.
- It supports multiple browser engines and native mobile testing,
- can be used with SaaS tools such as Browserstack,
- can test apps with multiple open tabs,
- can run tests in parallel out of the box,
- can test and handle IFrames properly.

```bash
  npm run e2e
```

To test and play with isolated components you can use **Storybook**.

The latest Storybook of the `main` branch is available [here](https://62d08ae5c36c853a5a9b0808-wviakkiqvm.chromatic.com/).
We use Chromatic as a Storybook hoster and to visualize UI changes.

You can also run Storybook locally:
```bash
  npm run storybook
```

## Contribute

