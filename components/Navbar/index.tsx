import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '@/theme/Section'

const Nav = styled.nav`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryRed};
    margin: 0;
    height: ${({ theme }: CustomInterfaces.Theme) => theme.navbar.height};

    section {
        display: flex;
        justify-content: center;
        height: 100%;

        a {
            text-decoration: none;
            color: white;
            margin-right: ${({ theme }: CustomInterfaces.Theme) => theme.spaces.xl};
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 ${({ theme }: CustomInterfaces.Theme) => theme.spaces.m};

            &:hover {
                text-decoration: underline;
                background-color: ${({ theme }: CustomInterfaces.Theme) =>
                    theme.colors.secondaryRed};
            }
        }
    }
`

const Navbar: FC = () => {
    return (
        <Nav>
            <Section>
                <Link href='/'>
                    <a> Home </a>
                </Link>
                <Link href='/about'>
                    <a> About </a>
                </Link>
            </Section>
        </Nav>
    )
}

export default Navbar
