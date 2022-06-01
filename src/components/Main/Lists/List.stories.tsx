import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Lists from "./Lists";

export default {
  title: "Lists",
  component: Lists,
} as ComponentMeta<typeof Lists>;

export const ListStyle: ComponentStory<typeof Lists> = () => {
  return <Lists selectedMonth={""} />;
};
