# stylex-tw-theme

Tailwind's default scales as StyleX tokens. The package ships `.stylex.ts` source so the consumer's StyleX compiler can hash and emit the CSS variables.

## Install

```bash
npm install stylex-tw-theme @stylexjs/stylex
```

You need a StyleX bundler plugin (`@stylexjs/unplugin` or `@stylexjs/babel-plugin`) with `unstable_moduleResolution` enabled. The Vite unplugin turns that on by default.

If styles from this package do not appear, tell the plugin not to prebundle it:

```ts
stylex.vite({
  externalPackages: ['stylex-tw-theme'],
})
```

## Use

```ts
import * as stylex from '@stylexjs/stylex'
import { zinc } from 'stylex-tw-theme/colors/zinc.stylex'
import { spacing } from 'stylex-tw-theme/spacing.stylex'
import { fontSize } from 'stylex-tw-theme/font.stylex'
import { screens } from 'stylex-tw-theme/screens.stylex'

const styles = stylex.create({
  card: {
    padding: spacing[4],
    backgroundColor: zinc[50],
    fontSize: {
      default: fontSize.base,
      [screens.md]: fontSize.lg,
    },
  },
})
```

Optional reset, modeled on Tailwind Preflight:

```ts
import 'stylex-tw-theme/reset.css'
```

Import only the color files you use. Each palette is its own module so unused colors stay out of the CSS.
