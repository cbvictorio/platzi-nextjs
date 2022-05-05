import { IncomingMessage, ServerResponse } from 'http'
import PokemonAPI from 'db/'

const getPokemonByNameOrId = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    const pokemon = await PokemonAPI.getByIdOrName('pikachu')
    console.log('retrieved pokemon:')
    console.log(pokemon)
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ data: pokemon }))
}

export default getPokemonByNameOrId

