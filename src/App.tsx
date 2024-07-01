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
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
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

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoName(e.currentTarget.value);

  const handleAddTodo = async () => {
    if (todoName === "") return;
    await addTodo({ name: todoName, isCompleted: false });
    await fetchTodos();
    setTodoName("");
  };

  const handleToggleComplete = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      await updateTodo(id, { isCompleted: !todo.isCompleted });
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        ),
      );
    }
  };

  const handleDeleteTodo = async (id: number) => {
    if (id === 0) return;
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleClearTodo = async () => {
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
            onClick={handleClearTodo}
          >
            All Clear
          </Button>
        </HStack>
        {todos.length === 0 ? (
          <Text>No todo.</Text>
        ) : (
          <List>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                as={HStack}
                justifyContent="space-between"
              >
                <Checkbox
                  isChecked={todo.isCompleted}
                  flexGrow={1}
                  h="full"
                  onChange={() => handleToggleComplete(todo.id || 0)}
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
            ))}
          </List>
        )}
      </Container>
    </>
  );
}

export default App;
