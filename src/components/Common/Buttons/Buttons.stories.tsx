import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Buttons from "./Buttons";

export default {
  title: "Buttons",
  component: Buttons,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);
export const BtnColors = Template.bind({});
BtnColors.args = {
  bgcolor: "#DFE9F5",
  text: "Button",
};
