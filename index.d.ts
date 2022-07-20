declare namespace Types {
    type Pokemon = {
        id: string
        name: string
        weight: number
    }

    type Route = {
        href: string
        text?: string
    }
}

declare namespace Interfaces {
    interface ReactChildren {
        readonly children: import('react').ReactNode
    }

    interface Theme {
        theme: {
            colors: {
                readonly primaryRed: string
                readonly primaryBlack: string
                readonly secondaryRed: string
                readonly primaryBlue: string
            }
            readonly bp: {
                tablet: string
                desktop: string
            }
            readonly section: {
                maxWidth: number
            }
            readonly spaces: {
                xs: string
                s: string
                m: string
                l: string
                xl: string
            }
            readonly fontSizes: {
                s: string
                default: string
                m: string
                l: string
                xl: string
                jumbo: string
            }
            readonly navbar: {
                height: string
            }
        }
    }
}
