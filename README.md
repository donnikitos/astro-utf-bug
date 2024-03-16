# astro-utf-bug

It looks like the bug disappears, when you remove the conditional title from the `/src/layouts/Layout.astro` file:
```jsx
{meta?.title && <title>{meta.title}</title>}
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
