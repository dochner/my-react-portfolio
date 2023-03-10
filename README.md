<p align='center'>
<a href="https://douglasochner.netlify.app//">Live Demo</a>
</p>

`MyReactPortfolio` is being created with the following purposes:

- To learn and practice React and its ecosystem
- To create a portfolio that is easy to maintain and update
- To learn and practice the use of GitHub Actions
- To learn and practive clean code and clean architecture
- To implement a i18n solution

<br>

## Features

- β‘οΈ [React](https://reactjs.org), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- π [File based routing](./src/pages)

- π¦ [Components auto importing](./src/components)

- π [Layout system](./src/layouts)

- π² [PWA](https://github.com/antfu/vite-plugin-pwa)

- π¨ [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- π [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- π₯ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- π¦Ύ TypeScript, of course

- βοΈ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [πIcΓ΄nes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [React Router](https://github.com/remix-run/react-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-react-components`](https://github.com/snowingfox/unplugin-react-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Hooks, Context and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA

### Coding Style

- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now

> requires Node >=14.18

## Usage

### Development

Just run and visit <http://localhost:3333>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
