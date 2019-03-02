import { styles } from "../config"

const breakpoints = styles.breakPoints

export const media = {
  small: `(min-width: ${breakpoints.small / 16}rem)`,
  medium: `(min-width: ${breakpoints.medium / 16}rem)`,
  large: `(min-width: ${breakpoints.large / 16}rem)`,
  wide: `(min-width: ${breakpoints.wide / 16}rem)`,
  extraWide: `(min-width: ${breakpoints.extraWide / 16}rem)`,
  ultraWide: `(min-width: ${breakpoints.ultraWide / 16}rem)`
}
