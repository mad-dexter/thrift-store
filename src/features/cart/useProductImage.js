import { useQuery } from "@tanstack/react-query";
import { getProductImage } from "../../services/apiProducts";

export function useProductImage(productId) {
  const { data: image, isLoading } = useQuery({
    queryKey: ["productImage", productId],
    queryFn: () => getProductImage(productId),
  });

  return { image, isLoading };
}
