/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import { useProducts } from "../context/ProductContext";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProducts();

  return (
    <div>
      <div className="bg-zinc-800 max-w-md w-full p-7 rounded-md my-3">
        <h1 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Handle: {product.handle}</h1>
        <h3 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Title: {product.title}</h3>
        <h3 className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>
          Description: {parse(product.description)}
        </h3>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Sku: {product.sku}</p>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Grams: {product.grams}</p>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Stock: {product.stock}</p>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Price: {product.price}</p>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Compare: {product.compare}</p>
        <p className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>Barcode: {product.barcode}</p>
        <div className="text-2xl flex gap-x-2 justify-end items-center">
          <button className='bg-indigo-500 px-3 py-2 rounded-md mt-2 mr-5' onClick={() => deleteProduct(product._id)}>delete</button>
          <Link className='bg-indigo-500 px-3 py-2 rounded-md mt-2' to={`/product/${product._id}`}>edit</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
