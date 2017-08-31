# frmwrks
### a testing ground for frontend frameworks and libraries

## Why?
There's a plethora of frontend frameworks and libraries to choose from. It's difficult to discern the differences, advantages, and disadvantages of each. This project aims to put a select number of frameworks through a series of feature requirements in hopes to learn more about each framework's strengths and potential weaknesses.


## The frameworks
- [ ] [Hyperapp](https://github.com/hyperapp/hyperapp)
- [ ] [Choo](https://github.com/choojs/choo)
- [ ] [Preact](https://github.com/developit/preact)
- [ ] [Svelte](https://github.com/sveltejs/svelte)
- [ ] [Vue](https://github.com/vuejs/vue)
- [ ] [Elm](http://elm-lang.org/)
- [ ] [React](https://github.com/facebook/react)
- [ ] [Web Components](https://www.webcomponents.org/) a.k.a The Platform :tm:

## Feature requirements
Each framework will attempt to achieve as many of the following requirements as possible:

- [ ] SSR
- [ ] PWA
  - [ ] Offline-first
- [ ] Routing
- [ ] Integration with tooling (Webpack / Rollup / etc)
  - [ ] Code splitting
  - [ ] Tree shaking
  - [ ] Lazy loading
- [ ] State management (Redux, Mobx, etc.)

## Additional considerations during build

- [ ] Functional paradigm
  - [ ] Immutable state
  - [ ] Pure functions
  - [ ] Managed side effects
- [ ] Offload computation to web worker
- [ ] Testing


## What we are building
We are building a single page app with 3 routes:
  - /home => /api/v2/variations/homepage-fluid
  - /sunglasses => /api/v2/frames/sunglasses/men
  - /frame/:name => /api/v2/products/sunglasses/men/:name/:colorway

Each route will load **as little javascript as is needed** for the page to render completely. This is where code-splitting and lazy loading will come in handy. Each page has an associated api endpoint (detailed above) where it will fetch the necessary data for the page.

## What to measure

- Code size
- TTI
- First meaningful paint
- Code friendliness; ease of development
- Dependency bloat
- Extensibility
- Modularity
