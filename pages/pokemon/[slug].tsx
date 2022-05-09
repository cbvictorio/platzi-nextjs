import { FC } from 'react'
import { useRouter } from 'next/router'
import PokemonAPI from '@/db'

type IProps = {
    pokemonData: PokemonFetchResponse
    slug?: PokemonSlug
}

/* 
    getServerSideProps and getStaticProps can only be used on PAGES file, 
    it cannot be used anywhere else 
*/

export const getServerSideProps = async (ctx: GetServerSidePropsCtx) => {
    const {
        query: { slug },
    } = ctx
    const pokemonData: PokemonFetchResponse = await PokemonAPI.getPokemonByNameOrId(slug)
    return {
        props: { pokemonData, slug },
    }
}

const Product: FC<IProps> = ({ pokemonData, slug }: IProps) => {
    const { id, name } = pokemonData as PokemonData
    const { error, message } = pokemonData as GenericError

    if (error) {
        return (
            <div>
                <h1> There was an error while retrieving the following pokemon: {slug} </h1>
                <p> {message} </p>
            </div>
        )
    }

    return (
        <div>
            <h1> Pokemon ID: {id} </h1>
            <h2> Pokemon Name: {name} </h2>
        </div>
    )
}

export default Product
