import React from 'react'
import styled from 'styled-components'

import Contact from '../pages/Contact'
import Presentation from '../pages/Presentation'
import Projects from '../pages/Projects'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
`

function Content() {
  return (
    <ContentContainer>
      <Presentation />
      <Projects />
      <Contact />
    </ContentContainer>
  )
}

export default Content
