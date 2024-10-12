import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { ProductsData, ProductsData2 } from "./ProductData";


const Products: React.FC = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;



