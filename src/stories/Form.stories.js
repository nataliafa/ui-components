import React from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { Form } from "../components/form";

export default {
  title: "Components/Form",
  component: Input,
};

export const Basic = () => (
  <Form>
    <Input label="Lorem ipsum " placeholder="Lorem ipsum dolor sit amet" />
    <Input
      label="Consectetur adipiscing"
      placeholder="Consectetur adipiscing elit"
    />
    <Checkbox
      label="Bluberry Ice Cream 🫐"
      hint="Check this to get Blueberry Ice Cream!"
    />
    <Button type="button" text="Hello World!" backgroundColor="#eeeeee" />
  </Form>
);
