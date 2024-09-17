import { HStack, Input } from "@yamada-ui/react";
import type { ChangeEvent, FC } from "react";
import { memo } from "react";
import { AddButton, ClearButton } from "./butons";

export const TodoForm: FC<{
  todoName: string;
  handleTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => Promise<void>;
  handleClearTodo: () => Promise<void>;
}> = memo(({ todoName, handleAddTodo, handleClearTodo, handleTodoChange }) => (
  <HStack gap={0}>
    <Input
      type="text"
      placeholder="Enter your todo."
      borderTopRightRadius={0}
      borderBottomRightRadius={0}
      value={todoName}
      onChange={handleTodoChange}
    />
    <AddButton handleAddTodo={handleAddTodo} />
    <ClearButton handleClearTodo={handleClearTodo} />
  </HStack>
));
