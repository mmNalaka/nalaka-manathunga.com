import { createGlobalStyle } from "styled-components"
import { styles } from "../config/index"
import { media } from "../util/media"

export default createGlobalStyle`
h1, h2, h3, h4, h5, h6{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  line-height: 1.1;
  text-rendering: optimizeLegibility;
  font-family: 'Poppins', sans-serif;
  color: inherit;
}

h1,
.h1 {
  font-size: 1.8rem;
}

@media ${media.small} {
  h1,
  .h1 {
    font-size: 2.2rem;
  }
}

@media ${media.medium} {
  h1,
  .h1 {
    font-size: 3rem;
  }
}
`
