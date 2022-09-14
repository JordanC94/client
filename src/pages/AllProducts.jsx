import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  const { baseUrl, products } = useOutletContext();

  const deleteProduct = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((product) => {
            return (
              <tr key={product._id}>
                <td>
                  <Link to={`/products/${product._id}`}>{product.title}</Link>
                </td>
                <td>{product.price}</td>
                <td className="text-end">
                  <Link
                    to={`/products/${product._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllProducts;