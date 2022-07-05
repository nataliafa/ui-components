import React from "react";
import { LinkButton, UnstyledLinkButton } from "../components/link-button";
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
  title: "Components/LinkButton",
  component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: "Hello World!",
  backgroundColor: "white",
};

export const BasicPlusUserStyles = () => (
  <div style={{ display: "flex" }}>
    <LinkButton
      text="Hello World!"
      backgroundColor="#00796b"
      style={{ marginLeft: 0 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#fbc02d"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#ff6f00"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#dd2c00"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#283593"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#1565c0"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#eeeeee"
      style={{ marginLeft: 5 }}
    />
  </div>
);
BasicPlusUserStyles.storyName = "Basic + User Styles";

export const Disabled = () => (
  <div style={{ display: "flex" }}>
    <LinkButton
      text="Hello World!"
      backgroundColor="#00796b"
      disabled={true}
      style={{ marginLeft: 0 }}
      onClick={() => console.log("click!")}
    />
    <LinkButton
      text="Hello World!"
      disabled={true}
      backgroundColor="#fbc02d"
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#ff6f00"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#dd2c00"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#283593"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#1565c0"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
    <LinkButton
      text="Hello World!"
      backgroundColor="#eeeeee"
      disabled={true}
      style={{ marginLeft: 5 }}
    />
  </div>
);

export const Icons = () => (
  <div style={{ display: "flex" }}>
    <LinkButton backgroundColor="#00796b" style={{ marginLeft: 0 }}>
      <FontAwesomeIcon icon={faIceCream} />
    </LinkButton>
    <LinkButton backgroundColor="#fbc02d" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faLemon} />
    </LinkButton>
    <LinkButton backgroundColor="#ff6f00" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCarrot} />
    </LinkButton>
    <LinkButton backgroundColor="#dd2c00" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faUtensils} />
    </LinkButton>
    <LinkButton backgroundColor="#283593" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCandyCane} />
    </LinkButton>
    <LinkButton backgroundColor="#1565c0" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faAppleAlt} />
    </LinkButton>
    <LinkButton backgroundColor="#eeeeee" style={{ marginLeft: 5 }}>
      <FontAwesomeIcon icon={faCheese} />
    </LinkButton>
  </div>
);

export const Unstyled = () => (
  <UnstyledLinkButton>Hello World!</UnstyledLinkButton>
);
