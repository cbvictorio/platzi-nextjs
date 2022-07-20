import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter, NextRouter } from 'next/router'
import NextImage from 'next/image'
import pokeball from '@/assets/Poke_Ball.webp'
import themeTokens from '@/theme/tokens'

const ROUTES: Array<Types.Route> = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
]

const Nav = styled.nav`
    background-color: ${({ theme }: Interfaces.Theme) => theme.colors.primaryRed};
    height: ${({ theme }: Interfaces.Theme) => theme.navbar.height};
    margin: 0;
    position: sticky;
    top: 0;

    ${themeTokens.bp.tablet} {
        border: 3px solid blue;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-width: ${themeTokens.navbar.width};
        margin: auto;

        a.active-link {
            text-decoration: underline;
        }

        a {
            height: 100%;
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;

            span {
                margin-inline: ${({ theme }: Interfaces.Theme) => theme.spaces.xs};

                ${themeTokens.bp.tablet} {
                    margin-inline: ${({ theme }: Interfaces.Theme) => theme.spaces.s};
                }
            }
        }
    }
`

const Navbar: FC = () => {
    const { pathname }: NextRouter = useRouter()
    return (
        <Nav tabIndex={-1}>
            <div tabIndex={-1}>
                {ROUTES.map(({ href, text }: Types.Route) => (
                    <Link key={href} href={href}>
                        <a href={href} {...(pathname === href && { className: 'active-link' })}>
                            {pathname === href && (
                                <NextImage height={20} width={20} src={pokeball} className='pokeball' />
                            )}
                            <span>{text}</span>
                        </a>
                    </Link>
                ))}
            </div>
        </Nav>
    )
}

export default Navbar
