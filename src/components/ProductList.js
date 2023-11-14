import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCall} from '../helper/apiHelper';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      const response = getCall('/products');
      if(response?.data?.data) {
        localStorage.setItem('products', response?.data?.data);
        setProducts([...response?.data?.data]);
      } else if (!response?.ok) {
          navigate('/login', { replace: true });
      }
    }
  }, [token]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
