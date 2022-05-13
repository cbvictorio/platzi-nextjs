import { FC } from 'react'
import styled from 'styled-components'
import ThemeSection from '@/theme/Section'
import Link from 'next/link'
import { API_URL } from '@/utils/constants'
import PokemonCard from '@/components/PokemonCard'
import PokemonAPI from '@/db'

type IProps = {
    pokemons: Array<PaginatedSinglePokemon>
}

const Section = styled(ThemeSection)`
    h2,
    h3 {
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`

const Home: FC<IProps> = ({ pokemons = [] }) => {
    return (
        <Section>
            <h2>Please click on any pokemon to start navigating, hope you enjoy it!</h2>
            <h3>
                This app was created with the
                <Link href={API_URL}> PokeAPI </Link>
            </h3>
            <ul>
                {pokemons.map(({ name, url }) => (
                    <li key={`${name}${url}`}>
                        <PokemonCard pokemon={{ name, url }} />
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export const getServerSideProps = async () => {
    const response = await PokemonAPI.getPokemonByPagination()
    const { error } = response as GenericError
    const { results } = response as PaginatedPokemonData
    const pokemons = error ? [] : results
    return {
        props: { pokemons },
    }
}

export default Home
