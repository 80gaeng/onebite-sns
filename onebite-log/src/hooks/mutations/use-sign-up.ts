import { useMutation } from "@tanstack/react-query";
import { SignUp } from "@/api/auth";

export function useSignUp() {
  return useMutation({
    mutationFn: SignUp,
  });
}
