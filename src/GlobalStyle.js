import { createGlobalStyle, css } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  :root{ 
    font-family: 'Poppins', sans-serif;
  }
`
export default GlobalStyles