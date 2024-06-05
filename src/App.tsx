import { Button, Container, HStack, Heading, Input, List, ListItem, Text } from "@yamada-ui/react"
import { ChangeEvent, useState } from "react"

function App() {

  const [todoName, setTodoName] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => setTodoName(e.currentTarget.value)
  const handleAddTodo = () => {
    if (todoName === "") return
    setTodos([...todos, todoName])
    setTodoName('')
  }

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
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </HStack>
        {
          todos.length === 0 ?
            <Text>No todo.</Text>
            :
            <List>
              {todos.map((todo, i) => (
                <ListItem key={i}>{todo}</ListItem>
              ))}
            </List>
        }
      </Container>
    </>
  )
}

export default App
