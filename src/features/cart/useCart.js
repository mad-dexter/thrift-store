import { useQuery } from "@tanstack/react-query";
import { getAllCartData } from "../../services/apiCart";
import { useUser } from "../authentication/useUser";

export function useCart() {
  const { user } = useUser();
  const { id } = user ?? {};

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getAllCartData(id),
  });

  return { cart, isLoading };
}
