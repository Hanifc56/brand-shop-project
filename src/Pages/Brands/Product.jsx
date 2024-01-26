import { handler } from "@tailwindcss/aspect-ratio";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Product = ({ product }) => {
  const { _id, name, brand, photo, type, price, rateing, discription } =
    product;
  const handleProductId = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      {_id ? (
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
              <Link to={`/productDetails/${_id}`}>
                <button className="btn btn-outline btn-primary">
                  View Details
                </button>
              </Link>
              <Link to={`/updateProduct/${_id}`}>
                <button className="btn btn-outline btn-primary">Update</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>NO Product Found!!!Coming Soon....</h1>
        </div>
      )}
    </div>
  );
};

export default Product;
