import { useRouter } from 'next/router'

const Product = () => {
    const { query: { id } } = useRouter()
    return (
        <div>
            Here's the product page: { id }
        </div>
    )
}

export default Product