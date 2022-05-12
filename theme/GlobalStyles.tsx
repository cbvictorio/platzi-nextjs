import { createGlobalStyle } from 'styled-components'
import themeTokens from '@/theme/tokens'

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: system-ui;

        &:not(h1, h2, h3, h4, h5) {
            font-size: ${themeTokens.fontSizes.default};
        }
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }
`

export default GlobalStyles
