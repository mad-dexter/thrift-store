import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrder";
import { useParams } from "react-router-dom";

export function useOrder() {
  const { orderId } = useParams();

  const { data: order, isLoading } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });

  return { order, isLoading };
}
