import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAddress as createAddressApi } from "../../services/apiAddress";
import { useUser } from "./useUser";
import toast from "react-hot-toast";

export function useCreateAddress() {
  const { user } = useUser();
  const { id } = user ?? {};
  const queryClient = useQueryClient();
  const { mutate: createAddress, isPending: isCreating } = useMutation({
    mutationFn: (data) => createAddressApi({ ...data, userId: id }),
    onSuccess: () => {
      toast.success("Address created successfully.");
      queryClient.invalidateQueries({ queryKey: ["addresses", id] });
    },
    onError: (error) => {
      toast.error("Failed to create Address. Try again later.");
      console.log(error.message);
    },
  });

  return { createAddress, isCreating };
}
