import { FC } from 'react'
import PokemonAPI from '@/db'
import { GetStaticProps } from 'next'
import ThemeSection from '@/theme/Section'
import styled from 'styled-components'
import Image from 'next/image'

const POKEMON_IMG_SIZE = 80

type IProps = {
    pokemonData: FetchSinglePokemonDataResponse
    slug?: PokemonSlug
}

const Section = styled(ThemeSection)`
    border: 3px solid ${({ theme }: CustomInterfaces.Theme) => theme.colors.primaryBlack};
    border-radius: 5px;
    margin: ${({ theme }: CustomInterfaces.Theme) => theme.spaces.m} auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
        display: flex;
        align-items: center;
        margin: 0;
        strong {
            font-size: ${({ theme }: CustomInterfaces.Theme) => theme.fontSizes.xl};
            text-transform: capitalize;
        }
    }
`

const Product: FC<IProps> = ({ pokemonData, slug }: IProps) => {
    const { id, name, sprites } = pokemonData as SinglePokemonData
    const { error, message } = pokemonData as GenericError

    if (error) {
        return (
            <Section>
                <h1> There was an error while retrieving the following pokemon: {slug} </h1>
                <p> {message} </p>
            </Section>
        )
    }

    return (
        <Section>
            <div>
                <Image width={POKEMON_IMG_SIZE} height={POKEMON_IMG_SIZE} src={sprites.front_default as string} />
                <strong> {`${name} (${id})`} </strong>
            </div>
        </Section>
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
    of the pokemon is dynamic, we cannot necessarily generate a static page for it,
    UNLESS, we use the `getStaticPaths` method with NextJS 

*/

// SSR
// export const getServerSideProps: GetStaticProps = async ({ params }) => {
//     const slug = params?.slug as string
//     const pokemonData: PokemonFetchResponse = await PokemonAPI.getPokemonByNameOrId(slug)
//     return {
//         props: { pokemonData, slug },
//     }
// }

// SSG
export const getStaticPaths = async () => {
    const response = await PokemonAPI.getPokemonByPagination()
    const { error } = response as GenericError
    const { results } = response as PaginatedPokemonData

    const paths = !error ? results.map(({ name: slug }) => ({ params: { slug } })) : []

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string
    const pokemonData: FetchSinglePokemonDataResponse = await PokemonAPI.getPokemonByNameOrId(slug)
    return {
        props: { pokemonData, slug },
    }
}

export default Product
