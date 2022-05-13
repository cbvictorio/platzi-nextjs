import styled from 'styled-components'
import Section from '@/theme/Section'

const StyledFooter = styled.footer`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryBlack};
    color: white;
`

const Footer = () => (
    <StyledFooter>
        <Section>This is the footer</Section>
    </StyledFooter>
)

export default Footer
