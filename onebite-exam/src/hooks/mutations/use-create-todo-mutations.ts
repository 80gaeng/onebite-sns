import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutations() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      window.alert("Create Todo Failed");
    },
  });
}
