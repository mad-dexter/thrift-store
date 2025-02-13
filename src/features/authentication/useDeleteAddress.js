import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress as deleteAddressApi } from "../../services/apiAddress";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const { mutate: deleteAddress, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteAddressApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
      toast.success("Address deleted successfully");
    },

    onError: (error) => {
      console.log(error.message);
      toast.error("Unable to delete address due to some error.");
    },
  });

  return { deleteAddress, isDeleting };
}
