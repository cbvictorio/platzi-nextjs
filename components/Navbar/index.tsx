import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '@/theme/Section'
import { useRouter } from 'next/router'
import Image from 'next/image'
import pokeball from '@/assets/Poke_Ball.webp'

type Route = {
    href: string
    text: string
}

const ROUTES: Array<Route> = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
]

// background-color: ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryRed};
const Nav = styled.nav`
    background-color: ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryRed};
    height: ${({ theme }: CustomInterfaces.Theme) => theme.navbar.height};
    padding: 0 ${({ theme }: CustomInterfaces.Theme) => theme.spaces.m};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;

    section {
        display: flex;
        align-items: center;
        height: 100%;

        a {
            padding: 0 ${({ theme }: CustomInterfaces.Theme) => theme.spaces.l};
            text-decoration: none;
            color: white;
            height: 100%;
            display: flex;
            align-items: center;

            &:hover {
                background-color: ${({ theme }: CustomInterfaces.Theme) =>
                    theme.colors.secondaryRed};
                text-decoration: underline;
            }
        }
    }
`

const Navbar: FC = () => {
    const { pathname } = useRouter()
    return (
        <Nav>
            <Section>
                {ROUTES.map(({ href, text }: Route) => (
                    <Link key={href} href={href}>
                        <a href={href}>
                            {pathname === href && (
                                <Image height={30} width={30} src={pokeball} className='pokeball' />
                            )}
                            {text}
                        </a>
                    </Link>
                ))}
            </Section>
        </Nav>
    )
}

export default Navbar
