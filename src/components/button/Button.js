import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colorBasedOnBgColor, colorToHex } from "../../lib/color";
import * as style from "../../lib/style";

const UnstyledElement = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.2s ease;
  font-size: inherit;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => props.color};

  &:hover:enabled {
    opacity: 0.8;
  }

  &:active {
    opacity: 1 !important;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Element = styled(UnstyledElement)`
  height: 40px;
  padding: 0 ${style.largePadding} 0 ${style.largePadding};
  border-radius: ${style.borderRadius};
  box-sizing: border-box;

  &:focus-visible {
    box-shadow: 0 0 0 3px ${style.blueVariant2};
  }
`;

export function useTextColor(backgroundColor, lightColor, darkColor) {
  const [textColor, setTextColor] = useState("default");

  useEffect(() => {
    let hexColor;
    try {
      hexColor = colorToHex(backgroundColor);
    } catch {
      hexColor = null;
    }
    if (hexColor) {
      setTextColor(colorBasedOnBgColor(hexColor, lightColor, darkColor));
    }
  }, [backgroundColor]);

  return textColor;
}

export const Button = ({
  text,
  backgroundColor,
  lightColor,
  darkColor,
  ...props
}) => {
  const color = useTextColor(
    backgroundColor,
    lightColor ? lightColor : "white",
    darkColor ? darkColor : style.textColor
  );
  return (
    <Element backgroundColor={backgroundColor} color={color} {...props}>
      {text ? text : props.children}
    </Element>
  );
};

export const UnstyledButton = ({
  text,
  backgroundColor,
  lightColor,
  darkColor,
  ...props
}) => {
  return (
    <UnstyledElement backgroundColor={backgroundColor} {...props}>
      {text ? text : props.children}
    </UnstyledElement>
  );
};
