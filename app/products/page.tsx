import Link from "next/link";
import { products } from "./data/products";

export default function ProductPage () {
    return(
        <>
            <div>Products List</div>
            {
                products.map((product)=>(
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                    >
                        <h2 className="text-blue-600 hover:underline">{product.name}</h2>
                    </Link>
                ))
            }
        </>
    )
}