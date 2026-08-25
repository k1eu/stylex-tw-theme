import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { color } from 'stylex-tw-theme/colors/color.stylex'
import { violet } from 'stylex-tw-theme/colors/violet.stylex'
import { zinc } from 'stylex-tw-theme/colors/zinc.stylex'
import { fontFamily, fontSize, fontWeight } from 'stylex-tw-theme/font.stylex'
import { duration } from 'stylex-tw-theme/motion.stylex'
import { radius } from 'stylex-tw-theme/radius.stylex'
import { colorScheme, maxScreens } from 'stylex-tw-theme/screens.stylex'
import { shadow } from 'stylex-tw-theme/shadow.stylex'
import { spacing } from 'stylex-tw-theme/spacing.stylex'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

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
    borderInlineColor: {
      default: zinc[200],
      [colorScheme.dark]: zinc[800],
    },
    fontFamily: fontFamily.sans,
    fontSize: { default: fontSize.lg, [maxScreens.lg]: fontSize.base },
    lineHeight: 1.45,
    letterSpacing: 0.18,
    color: {
      default: zinc[500],
      [colorScheme.dark]: zinc[400],
    },
    backgroundColor: {
      default: color.white,
      [colorScheme.dark]: zinc[900],
    },
    colorScheme: 'light dark',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: { default: spacing[6], [maxScreens.lg]: spacing[4] },
    placeContent: 'center',
    placeItems: 'center',
    padding: { default: null, [maxScreens.lg]: '32px 20px 24px' },
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
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    color: {
      default: zinc[950],
      [colorScheme.dark]: zinc[100],
    },
    fontSize: { default: fontSize['6xl'], [maxScreens.lg]: fontSize['4xl'] },
    letterSpacing: -1.68,
    marginBlock: { default: spacing[8], [maxScreens.lg]: spacing[5] },
  },
  copy: {
    margin: 0,
  },
  code: {
    fontFamily: fontFamily.mono,
    display: 'inline-flex',
    borderRadius: radius.default,
    color: {
      default: zinc[950],
      [colorScheme.dark]: zinc[100],
    },
    fontSize: fontSize.sm,
    lineHeight: 1.35,
    paddingInline: spacing[2],
    paddingBlock: spacing[1],
    backgroundColor: {
      default: zinc[100],
      [colorScheme.dark]: zinc[800],
    },
  },
  counter: {
    fontFamily: fontFamily.mono,
    display: 'inline-flex',
    fontSize: fontSize.base,
    paddingInline: spacing[2.5],
    paddingBlock: spacing[1.5],
    borderRadius: radius.md,
    color: {
      default: violet[600],
      [colorScheme.dark]: violet[400],
    },
    backgroundColor: {
      default: violet[100],
      [colorScheme.dark]: violet[950],
    },
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: {
      default: 'transparent',
      ':hover': {
        default: violet[300],
        [colorScheme.dark]: violet[700],
      },
    },
    transitionProperty: 'border-color',
    transitionDuration: duration[300],
    marginBottom: spacing[6],
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
      ':focus-visible': {
        default: violet[600],
        [colorScheme.dark]: violet[400],
      },
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
      borderLeftColor: {
        default: zinc[200],
        [colorScheme.dark]: zinc[800],
      },
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: -4.5,
      right: 0,
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: {
        default: zinc[200],
        [colorScheme.dark]: zinc[800],
      },
    },
  },
  nextSteps: {
    display: 'flex',
    flexDirection: { default: 'row', [maxScreens.lg]: 'column' },
    textAlign: { default: 'left', [maxScreens.lg]: 'center' },
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: {
      default: zinc[200],
      [colorScheme.dark]: zinc[800],
    },
  },
  panel: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: { default: spacing[8], [maxScreens.lg]: '24px 20px' },
  },
  docs: {
    borderRightWidth: { default: 1, [maxScreens.lg]: 0 },
    borderRightStyle: 'solid',
    borderRightColor: {
      default: zinc[200],
      [colorScheme.dark]: zinc[800],
    },
    borderBottomWidth: { default: 0, [maxScreens.lg]: 1 },
    borderBottomStyle: 'solid',
    borderBottomColor: {
      default: zinc[200],
      [colorScheme.dark]: zinc[800],
    },
  },
  icon: {
    marginBottom: spacing[4],
    width: 22,
    height: 22,
  },
  subheading: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    color: {
      default: zinc[950],
      [colorScheme.dark]: zinc[100],
    },
    fontSize: { default: fontSize['2xl'], [maxScreens.lg]: fontSize.xl },
    lineHeight: 1.18,
    letterSpacing: -0.24,
    marginTop: 0,
    marginBottom: spacing[2],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: { default: null, [maxScreens.lg]: 'wrap' },
    justifyContent: { default: null, [maxScreens.lg]: 'center' },
    gap: spacing[2],
    marginTop: { default: spacing[8], [maxScreens.lg]: spacing[5] },
    marginBottom: 0,
    marginInline: 0,
  },
  listItem: {
    flexGrow: { default: null, [maxScreens.lg]: 1 },
    flexShrink: { default: null, [maxScreens.lg]: 1 },
    flexBasis: { default: null, [maxScreens.lg]: 'calc(50% - 8px)' },
  },
  link: {
    color: {
      default: zinc[950],
      [colorScheme.dark]: zinc[100],
    },
    fontSize: fontSize.base,
    borderRadius: radius.md,
    backgroundColor: {
      default: zinc[100],
      [colorScheme.dark]: zinc[800],
    },
    display: 'flex',
    paddingInline: spacing[3],
    paddingBlock: spacing[1.5],
    alignItems: 'center',
    justifyContent: { default: null, [maxScreens.lg]: 'center' },
    gap: spacing[2],
    textDecoration: 'none',
    width: { default: null, [maxScreens.lg]: '100%' },
    boxSizing: 'border-box',
    transitionProperty: 'box-shadow',
    transitionDuration: duration[300],
    boxShadow: {
      default: shadow.none,
      ':hover': shadow.md,
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
      [colorScheme.dark]: 'invert(1) brightness(2)',
    },
  },
  spacer: {
    height: { default: 88, [maxScreens.lg]: 48 },
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: {
      default: zinc[200],
      [colorScheme.dark]: zinc[800],
    },
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
