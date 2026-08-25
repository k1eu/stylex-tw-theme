# stylex-tw-theme

Tailwind's default scales, as StyleX tokens.

`spacing[4]` is `1rem`. `zinc[500]` is the same oklch value Tailwind ships. Screens are the same rem breakpoints. You write StyleX, you get the numbers people already know from Tailwind.

The package publishes `.stylex.ts` source. Your StyleX compiler hashes the variables and emits CSS. Do not expect a prebuilt stylesheet of utilities.

```bash
npm install stylex-tw-theme @stylexjs/stylex
```

You also need a StyleX bundler plugin. `@stylexjs/unplugin` for Vite is enough. `unstable_moduleResolution` has to be on. The Vite plugin turns it on by default.

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

Import one color file at a time. `zinc` and `violet` in the same app is two imports. Pulling every palette from one module would dump unused CSS variables into the bundle.

If styles from this package never show up, the bundler is probably prebundling it. Force StyleX to compile the package:

```ts
stylex.vite({
  externalPackages: ['stylex-tw-theme'],
})
```

## Tokens

Values match Tailwind's current default theme.

| Import | What you get |
| --- | --- |
| `stylex-tw-theme/colors/<name>.stylex` | Palettes, shades 50 to 950. Also `color` for `black`, `white`, `transparent`, `inherit`, `current`. |
| `stylex-tw-theme/spacing.stylex` | `0`, `px`, `0.5`, `1` … `96` |
| `stylex-tw-theme/radius.stylex` | `none`, `sm`, `default`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full` |
| `stylex-tw-theme/shadow.stylex` | `sm`, `default`, `md`, `lg`, `xl`, `2xl`, `inner`, `none` |
| `stylex-tw-theme/font.stylex` | `fontFamily`, `fontSize`, `fontWeight`, `leading`, `tracking` |
| `stylex-tw-theme/screens.stylex` | `screens` (`min-width`), `maxScreens` (`width <`), `colorScheme` |
| `stylex-tw-theme/motion.stylex` | `duration`, `ease`, `transition` |
| `stylex-tw-theme/scale.stylex` | `zIndex`, `opacity`, `borderWidth` |

Color names are the usual set: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

Screens in rem, same as Tailwind v4:

| Key | Width |
| --- | --- |
| `sm` | 40rem |
| `md` | 48rem |
| `lg` | 64rem |
| `xl` | 80rem |
| `2xl` | 96rem |

`defineVars` tokens (`spacing`, colors, `radius`, and so on) can be themed with `stylex.createTheme`. `defineConsts` tokens (`screens`, `duration`, `zIndex`) are inlined at compile time and cannot.

## Reset

StyleX does not ship a CSS reset. This package has a small one, close to Tailwind Preflight. Optional.

```ts
import 'stylex-tw-theme/reset.css'
```

## This repo

pnpm + Turborepo. `packages/stylex-tw-theme` is the library.

- `apps/web` uses the workspace package.
- `apps/web-npm` installs `stylex-tw-theme` from npm, so we can catch publish mistakes.

```bash
pnpm install
pnpm dev
pnpm --filter web-npm dev
```

Node 24 and pnpm 10. License is MIT.
