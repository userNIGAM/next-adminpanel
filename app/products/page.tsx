import Link from "next/link"
import { products } from "./data/products"

export default function ProductsPage() {
  
    return(
        <>
            <div>
                <h1>Products</h1>
                {
                    products.map((product)=>(
                        <div key={product.id}>
                            
                            <Link href={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}