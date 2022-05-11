import { FC } from 'react'
import PokemonAPI from '@/db'

type IProps = {
    pokemons: Array<PaginatedSinglePokemon>
}

const Home: FC<IProps> = ({ pokemons = [] }) => {
    return (
        <div>
            <h1> Hello world from Next JS !</h1>
            <ul>
                {pokemons.map(({ name }) => (
                    <a key={name} href={`/pokemon/${name}`}>
                        <li> {name} </li>
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
