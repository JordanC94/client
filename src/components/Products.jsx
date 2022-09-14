import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const baseUrl = 'http://localhost:8000/api/products';
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="col">
      <Outlet context={{ baseUrl, products, setProducts }} />
    </div>
  );
};

export default Products;