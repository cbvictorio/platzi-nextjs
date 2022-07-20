import { FC } from 'react'
import styled from 'styled-components'
import themeTokens from './tokens'
interface IProps extends Interfaces.ReactChildren {
    className?: string
}

const StyledSection = styled.section`
    max-width: ${({ theme }: Interfaces.Theme) => `${theme.section.maxWidth}px`};
    margin: auto;
`

const Section: FC<IProps> = ({ children, className, ...props }) => (
    <StyledSection className={className} {...props}>
        {children}
    </StyledSection>
)

export default Section
