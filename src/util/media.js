import { styles } from "../config"

const breakpoints = styles.breakPoints

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `(min-width: ${breakpoints[key] / 16}rem)`
  return acc
}, {})
