import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['gray-700']};
        font-family: 'Roboto', sans-serif;
        overflow: overlay;
    }
`
