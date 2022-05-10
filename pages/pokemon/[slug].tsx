import { FC } from 'react'
import PokemonAPI from '@/db'

type IProps = {
    pokemonData: PokemonFetchResponse
    slug?: PokemonSlug
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

/* 
    getServerSideProps and getStaticProps can only be used on PAGES file, 
    it cannot be used anywhere else.

    * NOTE: Difference between Static Site Generation (SSG) and Server Side Rendering (SSR)

    SSR: Any request on the server side is known as 'On-Demand', which means that
         every time an user opens a page, a call to the API will be performed every single
         time that page is opened up.
    
    SSG: The call to the API happens just once, allowing Next JS to build a static page,
         which means that the html, css and JS files will be previously generated and 
         ready to be served with the info from the API, with all the markup and all the info
         previously generated.

    For this particular case, a pokemon page has to be a SSR site, since the id or name
    of the pokemon is dynamic, we cannot necessarily generate a static page for it.

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

// export const getStaticProps = async (ctx: GetServerSidePropsCtx) => {
//     const {
//         query: { slug },
//     } = ctx
//     const pokemonData: PokemonFetchResponse = await PokemonAPI.getPokemonByNameOrId(slug)
//     return {
//         props: { pokemonData, slug },
//     }
// }

export default Product
