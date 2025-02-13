import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/apiProducts";

export function useCategories() {
  const {
    isLoading,
    data: categoryData,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return { isLoading, categoryData, error };
}
