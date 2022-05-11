import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.primaryBlack};
`

const Footer = () => <StyledFooter>This is the footer</StyledFooter>

export default Footer
