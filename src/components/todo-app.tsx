import type { ChangeEvent } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import {
  addTodo,
  clearTodos,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../utils/indexed-db";
import { Container } from "@yamada-ui/react";
import { Title } from "./title";
import { TodoForm } from "./todo-form";
import { TodoPreview } from "./todo-preview";

export const TodoApp = memo(() => {
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
    <Container maxW="2xl" m="auto">
      <Title />
      <TodoForm
        {...{ handleAddTodo, handleClearTodo, handleTodoChange, todoName }}
      />
      <TodoPreview {...{ todos, handleDeleteTodo, handleToggleComplete }} />
    </Container>
  );
});
