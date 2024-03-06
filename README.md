# eslint-plugin-vue-i18n-test

`@intlify/vue-i18n/key-format-style` and `@intlify/vue-i18n/no-unused-keys` too since `en.json` file violates the rules:

```json
{
  "unused": "it is unused",
  "kebab-case": "it is kebab case",
  "snake_case": "it is snake case"
}
```

But

```sh
$ yarn
$ yarn lint
arn run v1.22.21
$ eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore

/.../src/App.vue
  11:10  warning  raw text 'RAW TEXT' is used  @intlify/vue-i18n/no-raw-text

✖ 1 problem (0 errors, 1 warning)

✨  Done in 0.79s.

```
