import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  List,
  ListItem,
  Text,
} from "@yamada-ui/react";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { addTodo, clearTodos, deleteTodo, getTodos } from "./utils/indexed-db";

function App() {
  const [todoName, setTodoName] = useState<string>("");
  const [todos, setTodos] = useState<Awaited<ReturnType<typeof getTodos>>>([]);

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoName(e.currentTarget.value);

  const handleAddTodo = async () => {
    if (todoName === "") return;
    await addTodo({ name: todoName });
    await fetchTodos();
    setTodoName("");
  };

  const handleDeleteTodo = async (id: number) => {
    if (id === 0) return;
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleClearToso = async () => {
    await clearTodos();
    setTodos([]);
  };

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
        <Heading>Todo App</Heading>
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
            onClick={handleClearToso}
          >
            All Clear
          </Button>
        </HStack>
        {todos.length === 0 ? (
          <Text>No todo.</Text>
        ) : (
          <List>
            {todos.map((todo, i) => (
              <ListItem key={i} as={HStack} justifyContent="space-between">
                <Text>{todo.name}</Text>
                <Button
                  variant="outline"
                  colorScheme="danger"
                  onClick={() => handleDeleteTodo(todo.id || 0)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </>
  );
}

export default App;
