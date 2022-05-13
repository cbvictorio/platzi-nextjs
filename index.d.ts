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

type PaginatedSinglePokemon = {
    name: string
    url: Url
}

type PaginatedPokemonData = {
    count: number
    next: Url
    previous: Url
    results: Array<PaginatedSinglePokemon>
}

type FetchSinglePokemonDataResponse = SinglePokemonData | GenericError

type FetchPaginatedPokemonDataResponse = PaginatedPokemonData | GenericError

type PaginationOptions = {
    readonly limit: number
    readonly offset: number
}

type PokemonFetchResponse = PokemonData | Array<FetchPaginatedPokemonData> | GenericError

declare namespace CustomInterfaces {
    interface ReactChildren {
        readonly children: import('react').ReactNode
    }

    interface Theme {
        theme: {
            colors: {
                readonly primaryRed: string
                readonly primaryBlack: string
                readonly secondaryRed: string
                readonly primaryBlue: string
            }
            readonly bp: {
                tablet: string
                desktop: string
            }
            readonly section: {
                maxWidth: number
            }
            readonly spaces: {
                xs: string
                s: string
                m: string
                l: string
                xl: string
            }
            readonly fontSizes: {
                s: string
                default: string
                m: string
                l: string
                xl: string
                jumbo: stringw
            }
            readonly navbar: {
                height: string
            }
        }
    }
}
