import supabase from "./supabase";

export async function getAllApiProducts(filter) {
  const query = supabase
    .from("product")
    .select("*, categories(categoryName), productImage(imageUrl)", {
      count: "exact",
    });

  if (filter !== "all") {
    query.eq("categoryId", filter);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching all products");
  }

  return data;
}

export async function getProductDetails(productId) {
  const { data, error } = await supabase
    .from("product")
    .select("*, categories(categoryName), productImage(imageUrl)")
    .eq("id", productId)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching product details");
  }

  return data;
}

export async function getAllCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching all product categories");
  }

  return data;
}

export async function getProductImage(productId) {
  const { data, error } = await supabase
    .from("productImage")
    .select("imageUrl")
    .eq("productId", productId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching product image");
  }

  return data;
}
