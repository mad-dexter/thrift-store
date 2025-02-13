import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: registerFn, isPending: isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      queryClient.removeQueries(["user"]);
      queryClient.setQueryData(["user"], user);
      // Redirect to login page
      toast.success("User created successfully. Happy shopping");
      navigate("/");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Failed to create user. Please try again.");
    },
  });

  return { registerFn, isLoading };
}
