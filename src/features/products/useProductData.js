import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/apiProducts";

export function useProductData() {
  const { productId } = useParams();

  const {
    isLoading,
    data: productData,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProductDetails(productId),
    retry: false,
  });

  return { isLoading, productData, error };
}
