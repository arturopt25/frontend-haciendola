import { useForm } from "react-hook-form"
import { useProducts } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function ProductFormPage() {
  
  const { register, handleSubmit, setValue } = useForm();
  const {createProduct, getProduct, updateProduct} = useProducts()
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id);
        console.log(product)
        setValue('handle', product.handle)
        setValue('title', product.title)
        setValue('description', product.description)
        setValue('sku', product.sku)
        setValue('grams', product.grams)
        setValue('stock', product.stock)
        setValue('price', product.price)
        setValue('compare', product.compare)
        setValue('barcode', product.barcode)
      }
    }
    loadProduct()
  }, []);

  
  const onSubmit = handleSubmit((data) => {
    if(params.id) {
      updateProduct(params.id, data);
    } else {
      createProduct(data);
    }
    navigate('/products')
  })
  
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Handle"
        { ...register('handle')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        autoFocus
        />
        <input 
        type="text"
        placeholder="Title"
        { ...register('title')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <textarea
        rows="3"
        placeholder="Description"
        { ...register('description')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        ></textarea>
        <input 
        type="text"
        placeholder="Sku"
        { ...register('sku')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <input 
        type="text"
        placeholder="Grams"
        { ...register('grams')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <input 
        type="text"
        placeholder="Stock"
        { ...register('Price')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <input 
        type="text"
        placeholder="Price"
        { ...register('price')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <input 
        type="text"
        placeholder="Compare"
        { ...register('compare')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />
        <input 
        type="text"
        placeholder="Barcode"
        { ...register('barcode')}
        className="w-full bg-zinc-700 text-white px-4 py-2  rounded-md my-2"
        />

        <button className='bg-indigo-500 px-3 py-2 rounded-md mt-2'>Save</button>
      </form>
    </div>
  )
}

export default ProductFormPage