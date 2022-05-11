import { FC } from 'react'
import ThemeProvider from '@/theme/ThemeProvider'
import styled from 'styled-components'

const StyledSection = styled.section`
    max-width: ${({ theme }: CustomInterfaces.Theme) => `${theme.sizes.maxWidth}px`};
    margin: auto;
    border: 3px solid blue;
`

const Section: FC<CustomInterfaces.ReactChildren> = ({ children }) => (
    <ThemeProvider>
        <StyledSection>{children}</StyledSection>
    </ThemeProvider>
)

export default Section
