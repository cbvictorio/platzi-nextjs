import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '@/theme/Section'

const Nav = styled.nav`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.primaryRed};
    margin: 0;
`

const StyledSection = styled(Section)`
    border: 3px solid blue;
`

const Navbar: FC = () => {
    return (
        <Nav>
            <StyledSection>
                <Link href='/'>
                    <a> Home </a>
                </Link>
                <Link href='/about'>
                    <a> About </a>
                </Link>
            </StyledSection>
        </Nav>
    )
}

export default Navbar
