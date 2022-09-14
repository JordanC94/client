import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (e, product) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, product)
      .then(() => navigate('/products'))
      .catch((err) => console.log(err));
  };

  return (
    product && <ProductForm formText={'Edit Product'} submitHandler={updateProduct} initialProduct={product} errorObject = {{}} />
  );
};

export default EditProduct;