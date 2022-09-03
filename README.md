# vue-router memory leak report

## How to repetition

```shell
pnpm i

pnpm dev
```

- Switch between the Empoty page and other pages with lots of nodes and end up on the Empty page

- Open the Memory panel, you can see a large number of unreclaimed nodes
