import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const products = localStorage.getItem('products');
  const token = localStorage.getItem('token');
  const [product, setProduct] = useState('');
  const { productId } = useParams();
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      const product = products?.find(x => x.id === productId);
      setProduct(product)
    }
  }, [products, token]);

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;