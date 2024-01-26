import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const ProductByBrand = () => {
  const products = useLoaderData();
  const { brandName } = useParams();
  console.log(brandName);
  const thisBrandProduct = products.filter(
    (product) => product.brand === brandName
  );
  return (
    <div>
      <h1>Produt by brand {products.length}</h1>
      {thisBrandProduct.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default ProductByBrand;
