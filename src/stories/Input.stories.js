import React from "react";
import { Input } from "../components/input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Hello World!",
  placeholder: "Hello World!",
};
