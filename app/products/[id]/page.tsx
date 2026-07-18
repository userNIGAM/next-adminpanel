import { products } from "../data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:flex">
        
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 p-8 md:w-1/2">
          <div className="flex h-80 w-80 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white text-gray-400">
            Product Image
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between p-8 md:w-1/2">

          <div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              Featured
            </span>

            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-2 text-gray-500">
              Product ID: {product.id}
            </p>

            <p className="mt-6 text-4xl font-bold text-green-600">
              ${product.price}
            </p>

            <p className="mt-6 leading-relaxed text-gray-600">
              This is a premium quality product built with excellent materials.
              Perfect for everyday use and designed to deliver outstanding
              performance.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-3">
            <button className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
              Add to Cart
            </button>

            <button className="w-full rounded-xl border border-gray-300 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}