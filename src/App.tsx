import { Button, Container, HStack, Heading, Input, List, ListItem, Text } from "@yamada-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { addTodo, clearTodos, getTodos } from "./utils/indexed-db";

function App() {
  const [todoName, setTodoName] = useState<string>('');
  const [todos, setTodos] = useState<Awaited<ReturnType<typeof getTodos>>>([]);

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => setTodoName(e.currentTarget.value);

  const handleAddTodo = async () => {
    if (todoName === "") return;
    await addTodo({ name: todoName });
    setTodos([...todos, { name: todoName }]);
    setTodoName('');
  };

  const handleClearToso = async () => {
    await clearTodos()
    setTodos([])
  }

  useEffect(() => {
    const fetchTodos = async () => {
      const storedTodos = await getTodos();
      setTodos(storedTodos);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <Container>
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
        {
          todos.length === 0 ?
            <Text>No todo.</Text>
            :
            <List>
              {todos.map((todo, i) => (
                <ListItem key={i}>{todo.name}</ListItem>
              ))}
            </List>
        }
      </Container>
    </>
  )
}

export default App
