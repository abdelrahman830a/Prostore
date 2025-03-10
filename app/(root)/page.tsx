import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product-actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  console.log("latestProducts", latestProducts);
  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" limit={4} />
    </>
  );
};

export default Homepage;
