import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCreateTodoMutations } from "@/hooks/mutations/use-create-todo-mutations";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutations();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="새로운 할 일을 입력하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
