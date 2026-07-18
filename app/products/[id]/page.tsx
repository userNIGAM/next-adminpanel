import { products} from "../data/products";
type Props ={
  params : Promise<{
    id : string,
  }>
}

export default async function ProductPage({params}: Props) {
  const {id} = await params;
  const product = products.find((item) => item.id === id);
  if (!product) {
    return <h1>Product Not Found</h1>;
}
  return (
    <>
      <div>
              <div key={product.id} className="">
                <h1>{product.name}</h1>
                <p>{product.id}</p>
                <h3> {product.description} </h3>
              </div>
      </div>
    </>
  );
}
