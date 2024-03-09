# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup 1.

```bash
1. Crear proyecto laravel:

composer create-project laravel/laravel laravelnuxtapi "10.*"

2. Instalar laravel breeze (autenticación)

composer require laravel/breeze
php artisan breeze:install api

3. Crear proyecto nuxt:

npx nuxi@latest init <project-name>
npm install
npm run dev

4. Instalar pinia:

npm i @pinia/nuxt
npm install pinia --legacy-peer-deps //usar este comando si da problemas el de arriba al hacer npm run dev.

// Nuxt 3
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
})

```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
