import React from "react";
import { Button, UnstyledButton } from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faLemon,
  faCarrot,
  faUtensils,
  faCandyCane,
  faAppleAlt,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/font.css";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: "Hello World!",
  backgroundColor: "white",
};

export const BasicPlusUserStyles = () => (
  <div style={{ display: "flex" }}>
    <Button
      text="Hello World!"
      backgroundColor="#00796b"
      style={{ marginLeft: 0 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#fbc02d"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#ff6f00"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#dd2c00"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#283593"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#1565c0"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#eeeeee"
      style={{ marginLeft: 5 }}
    />
  </div>
);
BasicPlusUserStyles.storyName = "Basic + User Styles";

export const Disabled = () => (
  <div style={{ display: "flex" }}>
    <Button
      text="Hello World!"
      backgroundColor="#00796b"
      disabled={true}
      style={{ marginLeft: 0 }}
    />
    <Button
      text="Hello World!"
      disabled={true}
      backgroundColor="#fbc02d"
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#ff6f00"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#dd2c00"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#283593"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#1565c0"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <Button
      text="Hello World!"
      backgroundColor="#eeeeee"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
  </div>
);

export const Icons = () => (
  <div style={{ display: "flex" }}>
    <Button backgroundColor="#00796b" style={{ marginLeft: 0 }}>
      <FontAwesomeIcon icon={faIceCream} />
    </Button>
    <Button backgroundColor="#fbc02d" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faLemon} />
    </Button>
    <Button backgroundColor="#ff6f00" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCarrot} />
    </Button>
    <Button backgroundColor="#dd2c00" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faUtensils} />
    </Button>
    <Button backgroundColor="#283593" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCandyCane} />
    </Button>
    <Button backgroundColor="#1565c0" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faAppleAlt} />
    </Button>
    <Button backgroundColor="#eeeeee" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCheese} />
    </Button>
  </div>
);

export const Unstyled = () => <UnstyledButton>Hello World!</UnstyledButton>;
