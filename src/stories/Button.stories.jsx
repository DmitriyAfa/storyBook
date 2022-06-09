import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // В свойстве argTypes можем описать любые аргмуенты которые могут быть приняты
  argTypes: {
    // проп backgroundColor
    backgroundColor: { control: "color" },
    accLeft: { control: "text" },
    accRight: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//Шаблом принимает аргументы и возвращает кнопку в которую спредим аргументы
const Template = (args) => <Button {...args} />;

//делаем ссылку на шаблон и биндим пустой объект {}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  label: "Button",
  onClick: console.log("Hello i`m Primary button"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
  disable: true,
};

export const Danger = Template.bind({});
Danger.args = {
  type: "success",
  size: "big",
  label: "Button",
  accRight: "42",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  size: "big",
  label: "Button",
  accLeft: "42",
};

export const Block = Template.bind({});
Block.args = {
  size: "medium",
  label: "Block mode",
  block: true,
  isLoading: true,
  onClick: console.log("Hello i`m Block button"),
};
