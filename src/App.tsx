import {
  Button,
  Checkbox,
  Container,
  HStack,
  Heading,
  Input,
  List,
  ListItem,
  Text,
} from "@yamada-ui/react";
import type { ChangeEvent, FC } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import type { Todo } from "./utils/indexed-db";
import {
  addTodo,
  clearTodos,
  deleteTodo,
  getTodos,
  updateTodo,
} from "./utils/indexed-db";

function App() {
  const [todoName, setTodoName] = useState<string>("");
  const [todos, setTodos] = useState<Awaited<ReturnType<typeof getTodos>>>([]);

  const handleTodoChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTodoName(e.currentTarget.value),
    [todoName],
  );

  const handleAddTodo = useCallback(async () => {
    if (todoName === "") return;
    await addTodo({ name: todoName, isCompleted: false });
    await fetchTodos();
    setTodoName("");
  }, [todoName]);

  const handleToggleComplete = useCallback(
    async (id: number, isCompleted: boolean) => {
      await updateTodo(id, { isCompleted });
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo)),
      );
    },
    [],
  );

  const handleDeleteTodo = useCallback(async (id: number) => {
    if (id === 0) return;
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleClearTodo = useCallback(async () => {
    await clearTodos();
    setTodos([]);
  }, []);

  const fetchTodos = async () => {
    const storedTodos = await getTodos();
    setTodos(storedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Container maxW="2xl" m="auto">
        <Title />
        <TodoForm
          {...{ handleAddTodo, handleClearTodo, handleTodoChange, todoName }}
        />
        <TodoPreview {...{ todos, handleDeleteTodo, handleToggleComplete }} />
      </Container>
    </>
  );
}

export default App;

const Title: FC = memo(() => {
  return <Heading>Todo App</Heading>;
});

const TodoForm: FC<{
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
    <Button
      colorScheme="primary"
      borderTopLeftRadius={0}
      borderBottomLeftRadius={0}
      borderTopRightRadius={0}
      borderBottomRightRadius={0}
      onClick={handleAddTodo}
    >
      Add
    </Button>
    <Button
      colorScheme="danger"
      borderTopLeftRadius={0}
      borderBottomLeftRadius={0}
      onClick={handleClearTodo}
    >
      All Clear
    </Button>
  </HStack>
));

const TodoPreview: FC<{
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
