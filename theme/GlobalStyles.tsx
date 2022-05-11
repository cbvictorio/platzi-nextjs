import { createGlobalStyle } from 'styled-components'
import themeTokens from '@/theme/tokens'

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: system-ui;
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }
`

export default GlobalStyles
