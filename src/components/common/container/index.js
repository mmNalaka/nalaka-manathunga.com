import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { media } from "../../../util/media"

const MaxWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  align-self: center;
  height: 100%;
  justify-content: ${props => props.jutsifyContent || 'flex-start'};

  @media ${media.wide} {
    padding: 0 2rem;
  }

  @media ${media.extraWide} {
    padding: 0 3rem;
  }

  @media ${media.ultraWide} {
    max-width: 1800px;
    padding: 0 4rem;
  }
`

const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  justify-content: ${props => props.jutsifyContent || 'flex-start'};
`

const Container = ({ children, fullWidth, jutsifyContent }) =>
  fullWidth ? (
    <FullWidthContainer jutsifyContent={jutsifyContent}>
      {children}
    </FullWidthContainer>
  ) : (
    <MaxWidthContainer jutsifyContent={jutsifyContent}>
      {children}
    </MaxWidthContainer>
  )

Container.prototype = {
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Container
