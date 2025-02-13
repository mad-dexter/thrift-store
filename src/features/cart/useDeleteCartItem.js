import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem as deleteCartItemApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useDeleteCartItem() {
  const queryClient = useQueryClient();
  const { mutate: deleteCartItem, isPending: isDeleting } = useMutation({
    mutationFn: (itemId) => deleteCartItemApi(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Cart item removed.");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Failed to remove cart item.");
    },
  });

  return { deleteCartItem, isDeleting };
}
