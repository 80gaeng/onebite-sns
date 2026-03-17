import { useMutation } from "@tanstack/react-query";
import { signInWithOAuth, SignUp } from "@/api/auth";

export function useSignInWithOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}
