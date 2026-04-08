import { createPostWithImages } from "@/api/post";
import type { PostEntity, UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

type CreatePostVariables = {
  content: string;
  images: File[];
  userId: string;
};

export function useCreatePost(callbacks?: UseMutationCallback) {
  return useMutation<PostEntity, Error, CreatePostVariables>({
    mutationFn: ({ content, images, userId }) =>
      createPostWithImages(content, images, userId),
    onSuccess: () => {
      if (callbacks?.onSuccess) {
        callbacks.onSuccess();
      }
    },
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}
