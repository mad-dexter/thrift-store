import supabase from "./supabase";

export async function getOrder(id) {
  const { data, error } = await supabase
    .from("orders")
    .select(
      "*, addresses(*), orderitems(product(id, productName, shortDescription, productImage(imageUrl)), price)"
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching order details");
  }

  return data;
}

export async function getAllOrders(userId) {
  const { data, error } = await supabase
    .from("orders")
    .select(
      "*, addresses(*), orderitems(product(id, productName, shortDescription, productImage(imageUrl)), price)"
    )
    .eq("userId", userId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching Orders");
  }

  return data;
}

export async function createOrder({ orderData, orderItems }) {
  const { data: order, error } = await supabase
    .from("orders")
    .insert([orderData])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while creating the order");
  }

  const orderItemsWithId = orderItems.map((item) => {
    return { orderId: order.at(0).id, ...item };
  });

  const { error: orderItemErr } = await supabase
    .from("orderitems")
    .insert(orderItemsWithId);

  if (orderItemErr) {
    console.error(orderItemErr.message);

    // In such case we will have to delete the created order
    await supabase.from("orders").delete().eq("id", order.at(0).id);

    throw new Error("An error occurred while creating the order items");
  }

  // If everything is fine then delete the cart data
  const { error: cartDeleteError } = await supabase
    .from("cart")
    .delete()
    .eq("userId", order.at(0).userId);

  if (cartDeleteError) {
    console.error(cartDeleteError.message);
    throw new Error("An error occurred while creating the order");
  }

  return order;
}
