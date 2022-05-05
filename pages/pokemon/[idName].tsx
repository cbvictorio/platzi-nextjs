import { FC} from 'react'
import { useRouter } from 'next/router'

const Product: FC = () => {
    const { query: { idName } } = useRouter()
    return (
        <div>
            Here's the product page: { idName }
        </div>
    )
}

export default Product