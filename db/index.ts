import { API_URL } from 'utils/constants'

const generateError = (message: string): GenericError => ({
    error: true,
    message,
})

const fetchPokemon = async (url: string): Promise<PokemonData | GenericError> => {
    try {
        const request = await fetch(`${API_URL}/${url}`)
        const pokemonData = await request.json()

        const { id, name, sprites, abilities, types, weight, location_area_encounters } =
            pokemonData

        const pokemon: PokemonData = {
            id,
            name,
            sprites,
            abilities,
            types,
            weight,
            location_area_encounters,
        }

        return pokemon
    } catch (e) {
        console.log(e)
        return generateError('Error from FE: could not fetch pokemon data')
    }
}

const getPokemonByNameOrId = async (slug: PokemonSlug): Promise<PokemonFetchResponse> => {
    if (!slug) return generateError('No ID or name was provided')
    const pokemon: PokemonFetchResponse = await fetchPokemon(`/pokemon/${slug}`)
    return pokemon
}

type PokemonAPI = {
    getPokemonByNameOrId: (slug: PokemonSlug) => Promise<PokemonFetchResponse>
}

const PokemonAPI: PokemonAPI = {
    getPokemonByNameOrId,
}

export default PokemonAPI
