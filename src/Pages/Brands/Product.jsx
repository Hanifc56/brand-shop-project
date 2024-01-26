import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, brand, photo, type, price, rateing, discription } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 border border-blue-300">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="flex items-center">
            <div className="badge badge-primary badge-outline mx-4">
              {brand}
            </div>
            <div className="badge badge-outline mx-4">{type}</div>
          </div>
          <p>{discription}</p>
          <div className="card-actions">
            <Link to="/productDetails">
              <button className="btn btn-outline btn-primary">
                View Details
              </button>
            </Link>
            <Link to="/updateProduct">
              <button className="btn btn-outline btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
