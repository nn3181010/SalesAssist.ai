import {useState, useEffect} from 'react'
import './index.css'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products', error))
  }, [])

  return (
    <div className="main">
      <h1>Products</h1>
      <p className="para"> Total Products :{products.length}</p>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
