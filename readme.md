# Bulma component library for Vue

![](\src\assets\made-with-bulma--black.png "made with Bulma")

My attempt at creating a Vue component library using Bulma that's compatible with Vue 3, _and_ it's composition api.
I really love Bulma, and it's modern styling using CSS without JavaScript. It's definitely my bias over Bootstrap now.

## Installation

`npm install bulma-vue3`

`yarn add bulma-vue3`

`pnpm add bulma-vue3`

## Usage

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { BulmaVue3 } from 'bulma-vue3'

const app = createApp(App)
app.use(BulmaVue3)
app.mount('#app')
```

## Documentation

**Need scoped (or global) import of Bulma's CSS/SASS/... when using components.** I kept the import of the actual css
separate for fear of increased bundle size.

I don't know yet still testing, so this is really not for public use yet (if at all 🤷🏿‍♂).

## My todo list

- [ ] make a way to pass sass vars as props to style tags

- [ ] In vite components do not load if they use vue (vue/runtime) `Component` type
	- Not sure if it's necessary as component props that'll accept HTML/Vue elements