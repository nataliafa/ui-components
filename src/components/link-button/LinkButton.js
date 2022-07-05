import React from "react"
import styled from "styled-components"
import { useTextColor } from "../button"
import * as style from "../../lib/style"

const UnstyledElement = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border: 0;
  outline: 0;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => props.color};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }

  &:active {
    opacity: ${(props) => (!props.disabled ? "1 !important" : "")};
  }

  ${(props) =>
    props.disabled
      ? `  
    opacity: 0.5;
    cursor: default;`
      : ""}
`

const Element = styled(UnstyledElement)`
  height: 40px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  border-radius: ${style.borderRadius};
`

export const LinkButton = ({
  text,
  backgroundColor,
  lightColor,
  darkColor,
  disabled,
  onClick,
  ...props
}) => {
  const color = useTextColor(
    backgroundColor,
    lightColor ? lightColor : "white",
    darkColor ? darkColor : style.textColor
  )
  return (
    <Element
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && onClick) onClick(e)
      }}
      {...props}
    >
      {text ? text : props.children}
    </Element>
  )
}

export const UnstyledLinkButton = ({
  text,
  backgroundColor,
  disabled,
  onClick,
  ...props
}) => {
  const textColor = useTextColor(backgroundColor)
  return (
    <UnstyledElement
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && onClick) onClick(e)
      }}
      {...props}
    >
      {text ? text : props.children}
    </UnstyledElement>
  )
}
