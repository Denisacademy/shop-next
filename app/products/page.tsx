import LoadingContainer from "@/components/global/LoadingContainer";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Suspense } from "react";

import EmptyList from "@/components/global/EmptyList";
import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage(props: {
  searchParams: Promise<{
    layout?: string;
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  // console.log("params", searchParams);

  const search = searchParams?.search || "";
  const layout = searchParams?.layout || "grid";

  // console.log("search", searchParams);
  //http://localhost:3000/products?query=simba&page=3
  // if (!products.length) {
  //   return <div>Loading...</div>;
  // }
  // console.log("action", products);
  return (
    <>
      {/* <Suspense fallback={<LoadingContainer />}> */}
      <ProductsContainer layout={layout} search={search} />
      {/* </Suspense> */}
    </>
  );
}

export default ProductsPage;
