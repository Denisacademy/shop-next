import db from "../utils/db";

// IT IS MORE EXPLICIT
export const fetchFeaturedProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  //setTimeout(() => console.log("waitng"), 5000);
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
    // select property
    // select: {
    // name: true,
    // },
  });
  //console.log(products);
  return products;
};

export const productWithQuery = async (search: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: search,
            mode: "insensitive",
          },
        },
        {
          company: {
            startsWith: search,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  // console.log("product-action-query", productWithQuery);
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
