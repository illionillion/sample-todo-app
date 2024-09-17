import { Heading } from "@yamada-ui/react";
import type { FC } from "react";
import { memo } from "react";

export const Title: FC = memo(() => {
  return <Heading>Todo App</Heading>;
});
