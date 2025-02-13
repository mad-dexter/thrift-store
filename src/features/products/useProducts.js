import { useQuery } from "@tanstack/react-query";
import { getAllApiProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";

  const {
    isLoading,
    data: productsData,
    error,
  } = useQuery({
    queryKey: ["products", filterValue],
    queryFn: () => getAllApiProducts(filterValue),
  });

  return { isLoading, productsData, error };
}
