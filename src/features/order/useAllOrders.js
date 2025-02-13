import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { getAllOrders } from "../../services/apiOrder";

export function useAllOrders() {
  const { user } = useUser();
  const { id } = user ?? {};
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(id),
  });

  return { orders, isLoading };
}
