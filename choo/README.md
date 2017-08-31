# Choo
## Feature requirements

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
