import { FC } from 'react'
import styled from 'styled-components'
import themeTokens from './tokens'
interface IProps extends CustomInterfaces.ReactChildren {
    className?: string
}

const StyledSection = styled.section`
    max-width: ${({ theme }: CustomInterfaces.Theme) => `${theme.section.maxWidth}px`};
    margin: auto;
    padding: ${themeTokens.spaces.m};

    ${themeTokens.mq.tablet} {
        padding: ${themeTokens.spaces.xl};
    }
`

const Section: FC<IProps> = ({ children, className, ...props }) => (
    <StyledSection className={className} {...props}>
        {children}
    </StyledSection>
)

export default Section
