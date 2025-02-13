import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartItem as createCartItemApi } from "../../services/apiCart";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

export function useCreateCartItem() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { id } = user ?? {};
  const { mutate: createCartItem, isPending: isCreating } = useMutation({
    mutationFn: (data) => createCartItemApi({ ...data, userId: id }),
    onSuccess: () => {
      toast.success("Item added to cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Error in adding item to cart");
    },
  });

  return { createCartItem, isCreating };
}
