import { useQuery } from "@tanstack/react-query";
import { getAllAddresses } from "../../services/apiAddress";
import { useUser } from "./useUser";

export function useAddress() {
  const { user } = useUser();
  const { id } = user ?? {};
  const { data: addresses, isLoading } = useQuery({
    queryKey: ["addresses", id],
    queryFn: () => getAllAddresses(id),
  });

  return { addresses, isLoading };
}
