import { useEffect } from "react"
import { useProducts } from "../context/ProductContext"
import ProductCard from "../components/ProductCard";


function ProductsPage() {

  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (products.length === 0) return (<h1>Loading...</h1>)

  return (
    <div>
      <h1 className='text-center text-5xl mb-5 mt-10'>Products</h1>
    <div className='grid grid-cols-3'>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
    </div>
  )
}

export default ProductsPage