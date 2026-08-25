import * as stylex from '@stylexjs/stylex'
import { color } from 'stylex-tw-theme/colors/color.stylex'
import { violet } from 'stylex-tw-theme/colors/violet.stylex'
import { zinc } from 'stylex-tw-theme/colors/zinc.stylex'
import { fontFamily, fontSize, fontWeight } from 'stylex-tw-theme/font.stylex'
import { duration } from 'stylex-tw-theme/motion.stylex'
import { radius } from 'stylex-tw-theme/radius.stylex'
import { colorScheme, screens } from 'stylex-tw-theme/screens.stylex'
import { shadow } from 'stylex-tw-theme/shadow.stylex'
import { spacing } from 'stylex-tw-theme/spacing.stylex'

const styles = stylex.create({
  page: {
    minHeight: '100svh',
    display: 'grid',
    placeItems: 'center',
    padding: spacing[6],
    fontFamily: fontFamily.sans,
    backgroundColor: {
      default: zinc[50],
      [colorScheme.dark]: zinc[950],
    },
    color: {
      default: zinc[700],
      [colorScheme.dark]: zinc[300],
    },
  },
  card: {
    width: '100%',
    maxWidth: '32rem',
    padding: spacing[8],
    borderRadius: radius.xl,
    backgroundColor: {
      default: color.white,
      [colorScheme.dark]: zinc[900],
    },
    boxShadow: shadow.lg,
  },
  kicker: {
    margin: 0,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: {
      default: violet[600],
      [colorScheme.dark]: violet[400],
    },
  },
  title: {
    marginBlock: spacing[2],
    fontSize: {
      default: fontSize['2xl'],
      [screens.md]: fontSize['3xl'],
    },
    fontWeight: fontWeight.semibold,
    color: {
      default: zinc[950],
      [colorScheme.dark]: zinc[50],
    },
  },
  copy: {
    margin: 0,
    fontSize: fontSize.base,
    lineHeight: 1.6,
  },
  swatches: {
    display: 'flex',
    gap: spacing[2],
    marginTop: spacing[6],
  },
  swatch: {
    width: spacing[8],
    height: spacing[8],
    borderRadius: radius.md,
  },
  zinc: {
    backgroundColor: zinc[500],
  },
  violet: {
    backgroundColor: violet[500],
  },
  button: {
    marginTop: spacing[6],
    paddingInline: spacing[4],
    paddingBlock: spacing[2],
    borderWidth: 0,
    borderRadius: radius.md,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: color.white,
    backgroundColor: {
      default: violet[600],
      ':hover': violet[500],
    },
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: duration[150],
  },
})

function App() {
  return (
    <main {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.card)}>
        <p {...stylex.props(styles.kicker)}>Installed from npm</p>
        <h1 {...stylex.props(styles.title)}>stylex-tw-theme</h1>
        <p {...stylex.props(styles.copy)}>
          This app depends on the published package, not the workspace
          copy. Spacing, zinc, violet, and the reset all come from
          stylex-tw-theme@0.1.0.
        </p>
        <div {...stylex.props(styles.swatches)}>
          <span {...stylex.props(styles.swatch, styles.zinc)} />
          <span {...stylex.props(styles.swatch, styles.violet)} />
        </div>
        <button type="button" {...stylex.props(styles.button)}>
          Tokens compiled
        </button>
      </section>
    </main>
  )
}

export default App
