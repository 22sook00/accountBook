import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePickers from "./DatePickers";

export default {
  title: "DatePicker",
  component: DatePickers,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof DatePickers>;

const Template: ComponentStory<typeof DatePickers> = (args) => (
  <DatePickers {...args} />
);
export const CircleColors = Template.bind({});
CircleColors.args = {
  bgcolor: "#DFE9F5",
};
