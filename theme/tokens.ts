const bp = {
    tablet: '@media only screen and (min-width: 760px)',
    desktop: '@media only screen and (min-width: 1024px)',
}

const themeTokens = {
    bp,
    colors: {
        primaryRed: '#ef5350',
        secondaryRed: '#c62828',
        primaryBlack: '#263238',
        primaryBlue: '#508CEF',
    },
    section: {
        maxWidth: 1280,
    },
    spaces: {
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '40px',
    },
    fontSizes: {
        s: '12px',
        m: '18px',
        default: '24px',
        l: '30px',
        xl: '36px',
        jumbo: '60px',
    },
    navbar: {
        height: '80px',
        width: '1280px',
    },
}

export default themeTokens
