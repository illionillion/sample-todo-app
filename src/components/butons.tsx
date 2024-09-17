import { Button } from "@yamada-ui/react";
import type { FC } from "react";
import { memo } from "react";

export const AddButton: FC<{
  handleAddTodo: () => Promise<void>;
}> = memo(({ handleAddTodo }) => (
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
));

export const ClearButton: FC<{
  handleClearTodo: () => Promise<void>;
}> = memo(({ handleClearTodo }) => (
  <Button
    colorScheme="danger"
    borderTopLeftRadius={0}
    borderBottomLeftRadius={0}
    onClick={handleClearTodo}
  >
    All Clear
  </Button>
));
