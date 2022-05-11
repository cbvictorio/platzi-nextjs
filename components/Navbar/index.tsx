import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '@/theme/Section'

const Nav = styled.nav`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.primaryRed};
    margin: 0;
`

const Navbar: FC = () => {
    return (
        <Nav>
            <Link href='/'>
                <a> Home </a>
            </Link>
            <Link href='/about'>
                <a> About </a>
            </Link>
        </Nav>
    )
}

export default Navbar
