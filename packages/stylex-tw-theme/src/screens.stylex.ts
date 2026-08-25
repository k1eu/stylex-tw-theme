import * as stylex from '@stylexjs/stylex'

export const screens = stylex.defineConsts({
  sm: '@media (min-width: 40rem)',
  md: '@media (min-width: 48rem)',
  lg: '@media (min-width: 64rem)',
  xl: '@media (min-width: 80rem)',
  '2xl': '@media (min-width: 96rem)',
})

export const maxScreens = stylex.defineConsts({
  sm: '@media (width < 40rem)',
  md: '@media (width < 48rem)',
  lg: '@media (width < 64rem)',
  xl: '@media (width < 80rem)',
  '2xl': '@media (width < 96rem)',
})

export const colorScheme = stylex.defineConsts({
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
})
