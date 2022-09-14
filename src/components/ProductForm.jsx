import { useState } from 'react';

const ProductForm = (props) => {
  const { submitHandler, initialProduct, errorObject } = props;
  const [formState, setFormState] = useState(initialProduct);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="card">
        <h5 className="card-header">Product Manager</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control form-control-sm"
                value={formState.title}
                onChange={changeHandler}
              />
              {errorObject.title ? (
                <span className="form-text text-danger">
                  {errorObject.title}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control form-control-sm"
                value={formState.price}
                onChange={changeHandler}
              />
              {errorObject.price ? (
                <span className="form-text text-danger">
                  {errorObject.price}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                value={formState.description}
                onChange={changeHandler}
              ></textarea>
              {errorObject.description ? (
                <span className="form-text text-danger">
                  {errorObject.description}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;