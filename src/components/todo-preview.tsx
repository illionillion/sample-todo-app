import type { FC } from "react";
import { memo } from "react";
import type { getTodos, Todo } from "../utils/indexed-db";
import {
  Button,
  Checkbox,
  HStack,
  List,
  ListItem,
  Text,
} from "@yamada-ui/react";

export const TodoPreview: FC<{
  todos: Awaited<ReturnType<typeof getTodos>>;
  handleToggleComplete: (id: number, isCompleted: boolean) => Promise<void>;
  handleDeleteTodo: (id: number) => Promise<void>;
}> = memo(({ todos, handleDeleteTodo, handleToggleComplete }) =>
  todos.length === 0 ? (
    <Text>No todo.</Text>
  ) : (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...{ handleDeleteTodo, handleToggleComplete, todo }}
        />
      ))}
    </List>
  ),
);

const TodoItem: FC<{
  todo: Todo;
  handleToggleComplete: (id: number, isCompleted: boolean) => Promise<void>;
  handleDeleteTodo: (id: number) => Promise<void>;
}> = memo(({ todo, handleDeleteTodo, handleToggleComplete }) => (
  <ListItem as={HStack} justifyContent="space-between">
    <Checkbox
      isChecked={todo.isCompleted}
      flexGrow={1}
      h="full"
      onChange={() => handleToggleComplete(todo.id || 0, !todo.isCompleted)}
    >
      {todo.name}
    </Checkbox>
    <Button
      variant="outline"
      colorScheme="danger"
      onClick={() => handleDeleteTodo(todo.id || 0)}
    >
      Delete
    </Button>
  </ListItem>
));
