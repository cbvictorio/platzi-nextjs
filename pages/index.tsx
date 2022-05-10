import { FC } from 'react'
import { GetServerSideProps } from 'next'
import PokemonAPI from '@/db'

type IProps = {
    pokemons: Array<SinglePokemonData>
}

const Home: FC<IProps> = ({ pokemons = [] }) => {
    return (
        <div>
            <h1> Hello world from Next JS !</h1>
            <ul>
                {pokemons.map(({ id, name }) => (
                    <a href={`/pokemon/${name}`}>
                        <li key={id}> {name}</li>
                    </a>
                ))}
            </ul>
        </div>
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
