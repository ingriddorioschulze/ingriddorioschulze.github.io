import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    min-width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.radicalRed}
  }
`
export default GlobalStyles
