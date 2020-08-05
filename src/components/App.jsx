import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Navbar from './NavBar'
import Content from '../components/Content'
import GlobalStyles from '../GlobalStyles'
import theme from '../theme'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Content />
      </AppContainer>
    </ThemeProvider>
  )
}
export default App
