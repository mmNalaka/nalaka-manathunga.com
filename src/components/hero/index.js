import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../config"
import Container from "../common/container"
import Logo from "../../images/nm-logo-primary.svg"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
  background-color: ${styles.colors.primaryDefault};
  color: ${styles.colors.primaryAccent};
`

const SiteLogo = styled(Logo)`
  position: absolute;
  top: 1rem;
`

const TextWhite = styled.span`
  color: #ffffff;
`

const Hero = props => (
  <Section>
    <Container jutsifyContent="center">
      <Link to="/">
        <SiteLogo />
      </Link>

      <h1>
        Hello, I'm <TextWhite>Nalaka Manathunga.</TextWhite>
        <br />
        Full-stack web developer and UI Designer based in Stockholm, Sweden.
      </h1>
      <h3>
        I am a self-taught full-stack developer, who is passionate about UI/UX
        design.
      </h3>
    </Container>
  </Section>
)

export default Hero
