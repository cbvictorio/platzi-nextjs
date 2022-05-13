import { FC } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

type IProps = {
    pokemon: PaginatedSinglePokemon
}

const Link = styled.a`
    border: 3px solid ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryBlack};
    border-radius: 5px;
    width: 100%;
    display: block;
    padding: ${({ theme }: CustomInterfaces.Theme) => theme.spaces.s};
    margin-bottom: ${({ theme }: CustomInterfaces.Theme) => theme.spaces.s};
    text-transform: capitalize;
    text-decoration: none;
    color: ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryBlack};
`

const PokemonCard: FC<IProps> = ({ pokemon: { name } }) => {
    const href = `/pokemon/${name}`
    return (
        <NextLink href={href}>
            <Link href={href}> {name} </Link>
        </NextLink>
    )
}

export default PokemonCard
