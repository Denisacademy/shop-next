import db from "../utils/db";

// IT IS MORE EXPLICIT
export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
    // select property
    // select: {
    // name: true,
    // },
  });
  console.log(products);
  return products;
};

// ANOTHER APPROACH
export const fetchAllProducts = () => {
  return db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
