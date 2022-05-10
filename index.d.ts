type Url = string | null

type GenericError = {
    error: boolean
    message: string
}

type PokemonSlug = string | string[]

type PokemonAbilities = Array<{
    is_hidden: boolean
    slot: number
    ability: {
        name: string
        url: Url
    }
}>

type PokemonTypes = Array<{
    slot: number
    type: {
        name: string
        url: Url
    }
}>

type PokemonSprites = {
    back_default: Url
    back_female: Url
    back_shiny: Url
    back_shiny_female: Url
    front_default: Url
    front_female: Url
    front_shiny: Url
    front_shiny_female: Url
}

type SinglePokemonData = {
    id: string
    name: string
    sprites: PokemonSprites
    abilities: PokemonAbilities
    types: PokemonTypes
    weight: number
    location_area_encounters: Url
}

type PaginatedPokemonData = {
    count: number
    next: Url
    previous: Url
    results: Array<{
        name: string
        url: Url
    }>
}

type FetchSinglePokemonDataResponse = SinglePokemonData | GenericError

type FetchPaginatedPokemonDataResponse = PaginatedPokemonData | GenericError

type PaginationOptions = {
    limit: number
    offset: number
}

type PokemonFetchResponse = PokemonData | Array<FetchPaginatedPokemonData> | GenericError

declare namespace CustomInterfaces {
    interface ReactChilden {
        children: import('react').ReactNode
    }
}
