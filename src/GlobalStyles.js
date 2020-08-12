import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.alabaster};

  }
`
export default GlobalStyles
