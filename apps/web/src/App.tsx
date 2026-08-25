import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { colors, fonts } from './tokens.stylex'

const MOBILE = '@media (max-width: 1024px)'
const DARK = '@media (prefers-color-scheme: dark)'

const styles = stylex.create({
  root: {
    boxSizing: 'border-box',
    width: 1126,
    maxWidth: '100%',
    minHeight: '100svh',
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderInlineWidth: 1,
    borderInlineStyle: 'solid',
    borderInlineColor: colors.border,
    fontFamily: fonts.sans,
    fontSize: { default: 18, [MOBILE]: 16 },
    lineHeight: 1.45,
    letterSpacing: 0.18,
    color: colors.text,
    backgroundColor: colors.background,
    colorScheme: 'light dark',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: { default: 25, [MOBILE]: 18 },
    placeContent: 'center',
    placeItems: 'center',
    padding: { default: null, [MOBILE]: '32px 20px 24px' },
  },
  hero: {
    position: 'relative',
  },
  heroBase: {
    width: 170,
    position: 'relative',
    zIndex: 0,
    insetInline: 0,
    marginInline: 'auto',
  },
  heroMark: {
    position: 'absolute',
    insetInline: 0,
    marginInline: 'auto',
  },
  reactMark: {
    zIndex: 1,
    top: 34,
    height: 28,
    transform:
      'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)',
  },
  viteMark: {
    zIndex: 0,
    top: 107,
    height: 26,
    width: 'auto',
    transform:
      'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)',
  },
  heading: {
    fontFamily: fonts.sans,
    fontWeight: 500,
    color: colors.textHeading,
    fontSize: { default: 56, [MOBILE]: 36 },
    letterSpacing: -1.68,
    marginBlock: { default: 32, [MOBILE]: 20 },
  },
  copy: {
    margin: 0,
  },
  code: {
    fontFamily: fonts.mono,
    display: 'inline-flex',
    borderRadius: 4,
    color: colors.textHeading,
    fontSize: 15,
    lineHeight: 1.35,
    paddingInline: 8,
    paddingBlock: 4,
    backgroundColor: colors.codeBg,
  },
  counter: {
    fontFamily: fonts.mono,
    display: 'inline-flex',
    fontSize: 16,
    paddingInline: 10,
    paddingBlock: 5,
    borderRadius: 5,
    color: colors.accent,
    backgroundColor: colors.accentBg,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: {
      default: 'transparent',
      ':hover': colors.accentBorder,
    },
    transitionProperty: 'border-color',
    transitionDuration: '300ms',
    marginBottom: 24,
    outlineWidth: {
      default: null,
      ':focus-visible': 2,
    },
    outlineStyle: {
      default: null,
      ':focus-visible': 'solid',
    },
    outlineColor: {
      default: null,
      ':focus-visible': colors.accent,
    },
    outlineOffset: {
      default: null,
      ':focus-visible': 2,
    },
  },
  ticks: {
    position: 'relative',
    width: '100%',
    '::before': {
      content: '""',
      position: 'absolute',
      top: -4.5,
      left: 0,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderLeftColor: colors.border,
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: -4.5,
      right: 0,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: colors.border,
    },
  },
  nextSteps: {
    display: 'flex',
    flexDirection: { default: 'row', [MOBILE]: 'column' },
    textAlign: { default: 'left', [MOBILE]: 'center' },
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: colors.border,
  },
  panel: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: { default: 32, [MOBILE]: '24px 20px' },
  },
  docs: {
    borderRightWidth: { default: 1, [MOBILE]: 0 },
    borderRightStyle: 'solid',
    borderRightColor: colors.border,
    borderBottomWidth: { default: 0, [MOBILE]: 1 },
    borderBottomStyle: 'solid',
    borderBottomColor: colors.border,
  },
  icon: {
    marginBottom: 16,
    width: 22,
    height: 22,
  },
  subheading: {
    fontFamily: fonts.sans,
    fontWeight: 500,
    color: colors.textHeading,
    fontSize: { default: 24, [MOBILE]: 20 },
    lineHeight: 1.18,
    letterSpacing: -0.24,
    marginTop: 0,
    marginBottom: 8,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: { default: null, [MOBILE]: 'wrap' },
    justifyContent: { default: null, [MOBILE]: 'center' },
    gap: 8,
    marginTop: { default: 32, [MOBILE]: 20 },
    marginBottom: 0,
    marginInline: 0,
  },
  listItem: {
    flexGrow: { default: null, [MOBILE]: 1 },
    flexShrink: { default: null, [MOBILE]: 1 },
    flexBasis: { default: null, [MOBILE]: 'calc(50% - 8px)' },
  },
  link: {
    color: colors.textHeading,
    fontSize: 16,
    borderRadius: 6,
    backgroundColor: colors.socialBg,
    display: 'flex',
    paddingInline: 12,
    paddingBlock: 6,
    alignItems: 'center',
    justifyContent: { default: null, [MOBILE]: 'center' },
    gap: 8,
    textDecoration: 'none',
    width: { default: null, [MOBILE]: '100%' },
    boxSizing: 'border-box',
    transitionProperty: 'box-shadow',
    transitionDuration: '300ms',
    boxShadow: {
      default: 'none',
      ':hover': colors.shadow,
    },
  },
  logo: {
    height: 18,
  },
  buttonIcon: {
    height: 18,
    width: 18,
  },
  socialIcon: {
    filter: {
      default: 'none',
      [DARK]: 'invert(1) brightness(2)',
    },
  },
  spacer: {
    height: { default: 88, [MOBILE]: 48 },
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: colors.border,
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div {...stylex.props(styles.root)}>
      <section {...stylex.props(styles.center)}>
        <div {...stylex.props(styles.hero)}>
          <img
            src={heroImg}
            {...stylex.props(styles.heroBase)}
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            {...stylex.props(styles.heroMark, styles.reactMark)}
            alt="React logo"
          />
          <img
            src={viteLogo}
            {...stylex.props(styles.heroMark, styles.viteMark)}
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 {...stylex.props(styles.heading)}>Get started</h1>
          <p {...stylex.props(styles.copy)}>
            Edit <code {...stylex.props(styles.code)}>src/App.tsx</code> and save
            to test <code {...stylex.props(styles.code)}>HMR</code>
          </p>
        </div>
        <button
          type="button"
          {...stylex.props(styles.counter)}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div {...stylex.props(styles.ticks)} />

      <section {...stylex.props(styles.nextSteps)}>
        <div {...stylex.props(styles.panel, styles.docs)}>
          <svg
            {...stylex.props(styles.icon)}
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 {...stylex.props(styles.subheading)}>Documentation</h2>
          <p {...stylex.props(styles.copy)}>Your questions, answered</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.listItem)}>
              <a href="https://vite.dev/" target="_blank" {...stylex.props(styles.link)}>
                <img {...stylex.props(styles.logo)} src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li {...stylex.props(styles.listItem)}>
              <a href="https://react.dev/" target="_blank" {...stylex.props(styles.link)}>
                <img
                  {...stylex.props(styles.buttonIcon)}
                  src={reactLogo}
                  alt=""
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div {...stylex.props(styles.panel)}>
          <svg
            {...stylex.props(styles.icon)}
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 {...stylex.props(styles.subheading)}>Connect with us</h2>
          <p {...stylex.props(styles.copy)}>Join the Vite community</p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.listItem)}>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                {...stylex.props(styles.link)}
              >
                <svg
                  {...stylex.props(styles.buttonIcon, styles.socialIcon)}
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li {...stylex.props(styles.listItem)}>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                {...stylex.props(styles.link)}
              >
                <svg
                  {...stylex.props(styles.buttonIcon, styles.socialIcon)}
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li {...stylex.props(styles.listItem)}>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                {...stylex.props(styles.link)}
              >
                <svg
                  {...stylex.props(styles.buttonIcon, styles.socialIcon)}
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li {...stylex.props(styles.listItem)}>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                {...stylex.props(styles.link)}
              >
                <svg
                  {...stylex.props(styles.buttonIcon, styles.socialIcon)}
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div {...stylex.props(styles.ticks)} />
      <section {...stylex.props(styles.spacer)} />
    </div>
  )
}

export default App
