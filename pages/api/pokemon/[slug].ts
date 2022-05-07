import { NextApiRequest, NextApiResponse } from 'next'
import PokemonAPI from '@/db'

const getPokemonByNameOrId = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const slug: string | string[] = req?.query?.slug
    const response: PokemonFetchResponse = await PokemonAPI.getPokemonByNameOrId(slug)

    res.setHeader('content-type', 'application/json')
    res.status(200).json(response)
}

export default getPokemonByNameOrId
