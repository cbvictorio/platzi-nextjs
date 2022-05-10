import { API_URL, DEFAULT_PAGINATION_LIMIT } from 'utils/constants'
import 'isomorphic-fetch'

const generateError = (message: string): GenericError => ({
    error: true,
    message,
})

const fetchPokemon = async (url: string): Promise<any | GenericError> => {
    try {
        const request = await fetch(`${API_URL}/${url}`)
        return await request.json()
    } catch (e) {
        console.log(e)
        return generateError('Error from FE: could not fetch pokemon data')
    }
}

// This method will bring a specific pokemon by ID or name
const getPokemonByNameOrId = async (slug: PokemonSlug): Promise<FetchSinglePokemonDataResponse> => {
    if (!slug) return generateError('No ID or name was provided')

    const pokemonResult: FetchSinglePokemonDataResponse = await fetchPokemon(`/${slug}`)

    const { id, name, sprites, abilities, types, weight, location_area_encounters } =
        pokemonResult as SinglePokemonData

    const { error, message } = pokemonResult as GenericError

    if (error) return generateError(message)

    return {
        id,
        name,
        sprites,
        abilities,
        types,
        weight,
        location_area_encounters,
    }
}

const getPokemonByPagination = async (
    options: PaginationOptions = { limit: DEFAULT_PAGINATION_LIMIT, offset: 0 } as PaginationOptions
): Promise<FetchPaginatedPokemonDataResponse> => {
    const { limit, offset }: PaginationOptions = options

    const paginationUrl: string = `?limit=${limit}&offset=${offset}`

    const fetchPaginationResults: FetchPaginatedPokemonDataResponse = await fetchPokemon(
        paginationUrl
    )

    return fetchPaginationResults
}

type PokemonAPI = {
    getPokemonByNameOrId: (slug: PokemonSlug) => Promise<FetchSinglePokemonDataResponse>
    getPokemonByPagination: (
        options?: PaginationOptions
    ) => Promise<FetchPaginatedPokemonDataResponse>
}

const PokemonAPI: PokemonAPI = {
    getPokemonByNameOrId,
    getPokemonByPagination,
}

export default PokemonAPI
