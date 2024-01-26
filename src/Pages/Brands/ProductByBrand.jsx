import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Navbar from "../Shared/Navbar";
import Slider from "../Shared/Slider";

const ProductByBrand = () => {
  const products = useLoaderData();
  const { brandName } = useParams();
  console.log(brandName);
  const thisBrandProduct = products.filter(
    (product) => product.brand === brandName
  );

  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <h1 className="text-center text-4xl font-bold my-8">
        Chose Form Best of best
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thisBrandProduct.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductByBrand;
