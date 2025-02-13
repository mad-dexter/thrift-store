import supabase from "./supabase";

export async function getAllCartData(userId) {
  const { data, error } = await supabase
    .from("cart")
    .select("*, product(productName, shortDescription, unitPrice)")
    .eq("userId", userId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching all cart data");
  }

  return data;
}

export async function createCartItem(data) {
  const { error } = await supabase.from("cart").insert([data]);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while creating a cart item");
  }
}

export async function deleteCartItem(itemId) {
  const { error } = await supabase.from("cart").delete().eq("id", itemId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while deleting the address");
  }
}
