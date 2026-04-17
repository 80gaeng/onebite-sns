import { deleteImagesInPath } from "@/api/image";
import { deletedPost } from "@/api/post";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useDeletePost(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: deletedPost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSuccess) {
        callbacks.onSuccess();
      }

      if (deletedPost.image_urls && deletedPost.image_urls.length > 0) {
        await deleteImagesInPath(`${deletedPost.author_id}/${deletedPost.id}`);
      }
    },
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}
