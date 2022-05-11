import { FC } from 'react'
import ThemeProvider from '@/theme/ThemeProvider'
import styled from 'styled-components'

interface IProps extends CustomInterfaces.ReactChildren {
    className?: string
}

const StyledSection = styled.section`
    max-width: ${({ theme }: CustomInterfaces.Theme) => `${theme.sizes.maxWidth}px`};
    margin: auto;
`

const Section: FC<IProps> = ({ children, className }) => (
    <ThemeProvider>
        <StyledSection className={className}>{children}</StyledSection>
    </ThemeProvider>
)

export default Section
