import { useMutation } from "@tanstack/react-query";
import { SignUp } from "@/api/auth";
import type { UseMutationCallback } from "@/types";

export function useSignUp(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: SignUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
