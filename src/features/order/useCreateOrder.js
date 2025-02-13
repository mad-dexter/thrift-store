import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createOrder, isPending: isCreating } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (order) => {
      toast.success(`Order ${order?.at(0).id} is successfully placed.`);
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      navigate(`/order/${order.at(0).id}`);
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Order creation failed. Please try again later.");
    },
  });

  return { createOrder, isCreating };
}
