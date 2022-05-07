import { NextApiRequest, NextApiResponse } from 'next'
import PokemonAPI from 'db/'

const getPokemonByNameOrId = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const slug: string | string[] = req?.query?.slug
    const response: PokemonFetchResponse = await PokemonAPI.getPokemonByNameOrId(slug)

    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ data: response }))
}

export default getPokemonByNameOrId
