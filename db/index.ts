import { API_URL } from 'utils/constants'

type PokemonApiType = {
    getByIdOrName: (idName: string) => Promise<any>
}

const customFetch = async (url: string): Promise<any> => {
    try {
        const request = await fetch(`${API_URL}/${url}`)
        const pokemon = await request.json()
        return pokemon
    } catch(e) {
        return {
            error: true,
            message: 'Error from FE: could not fetch pokemon data',
            exception: e
        }
    }
}

const getByIdOrName = async (idName: string) : Promise<any> => {
    const pokemonData = customFetch(`/pokemon/${idName}`)
    // const { 
    //     id, 
    //     name, 
    //     sprites, 
    //     abilities, 
    //     types, 
    //     weight,
    //     location_area_encounters
    // } = pokemonData
    return pokemonData
}

const PokemonAPI: PokemonApiType = {
    getByIdOrName
}

export default PokemonAPI