import supabase from "./supabase";

export async function getAllAddresses(userId) {
  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while fetching all addresses");
  }

  return data;
}

export async function createAddress(address) {
  const { data, error } = await supabase.from("addresses").insert([address]);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while creating the address");
  }

  return data;
}

export async function deleteAddress(addressId) {
  const { error } = await supabase
    .from("addresses")
    .delete()
    .eq("id", addressId);

  if (error) {
    console.error(error.message);
    throw new Error("An error occurred while deleting the address");
  }
}
