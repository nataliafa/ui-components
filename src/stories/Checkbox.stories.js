import React from "react"
import {
  Container,
  InputContainer,
  UnstyledInput,
  Input,
  UnstyledLabel,
  Label,
  UnstyledHint,
  Hint,
  UnstyledError,
  Error,
  Checkbox,
} from "../components/checkbox"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
}

export const Basic = () => (
  <Checkbox
    label="Bluberry Ice Cream 🫐"
    hint="Check this to get Blueberry Ice Cream!"
  />
)

export const BasicPlusUserStyles = () => (
  <Container>
    <InputContainer>
      <Input type="checkbox" id="blueberry-ice-cream-1" />
      <Label htmlFor="blueberry-ice-cream-1" style={{ fontStyle: "italic" }}>
        Bluberry Ice Cream 🫐
      </Label>
    </InputContainer>
    <Hint style={{ fontStyle: "italic" }}>
      Check this to get Blueberry Ice Cream!
    </Hint>
  </Container>
)
BasicPlusUserStyles.storyName = "Basic + User Styles"

export const BasicPlusError = () => (
  <Container>
    <InputContainer>
      <Input type="checkbox" id="blueberry-ice-cream-2" />
      <Label htmlFor="blueberry-ice-cream-2">Bluberry Ice Cream 🫐</Label>
    </InputContainer>
    <Hint>Check this to get Blueberry Ice Cream!</Hint>
    <Error>Mayday, we ran out of Blueberries!</Error>
  </Container>
)
BasicPlusError.storyName = "Basic + Error"

export const Unstyled = () => (
  <Container>
    <InputContainer>
      <UnstyledInput type="checkbox" id="blueberry-ice-cream-3" />
      <UnstyledLabel htmlFor="blueberry-ice-cream-3" style={{ marginLeft: 5 }}>
        Bluberry Ice Cream 🫐
      </UnstyledLabel>
    </InputContainer>
    <UnstyledHint style={{ fontSize: "small" }}>
      Check this to get Blueberry Ice Cream!
    </UnstyledHint>
  </Container>
)

export const UnstyledPlusError = () => (
  <Container>
    <InputContainer>
      <UnstyledInput type="checkbox" id="blueberry-ice-cream-3" />
      <UnstyledLabel htmlFor="blueberry-ice-cream-3" style={{ marginLeft: 5 }}>
        Bluberry Ice Cream 🫐
      </UnstyledLabel>
    </InputContainer>
    <UnstyledHint style={{ fontSize: "small" }}>
      Check this to get Blueberry Ice Cream!
    </UnstyledHint>
    <UnstyledError style={{ fontSize: "small", color: "red" }}>
      Mayday, we ran out of Blueberries!
    </UnstyledError>
  </Container>
)
UnstyledPlusError.storyName = "Unstyled + Error"
