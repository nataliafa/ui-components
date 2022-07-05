import React, { useMemo } from "react";
import { ErrorMessage, useField } from "formik";
import uniqueId from "../../lib/unique-id";
import styled from "styled-components";
import * as style from "../../lib/style";
import check from "./img/check.svg";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UnstyledInput = styled.input`
  margin: 0;
`;

export const Input = styled.input`
  appearance: none;
  margin: 0;
  border-radius: 3px;
  border: 1px solid ${style.grey};
  width: 16px;
  height: 16px;
  transition: 0.2s ease;

  &:checked {
    background-color: ${style.blueVariant1};
    fill: white;
    background-image: url("${check}");
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${style.blueVariant1};
    box-shadow: 0 0 0 3px ${style.blueVariant2};
  }
`;

export const UnstyledLabel = styled.label``;

export const Label = styled(UnstyledLabel)`
  margin: 0 0 0 5px;
`;

export const UnstyledHint = styled.span`
  display: block;
`;

export const Hint = styled(UnstyledHint)`
  color: #c4cdd5;
  font-size: small;
`;

export const UnstyledError = styled.span`
  display: block;
`;

export const Error = styled(UnstyledError)`
  color: hsl(348, 100%, 61%);
  font-size: small;
`;

export const Checkbox = ({
  name,
  label,
  hint,
  defaultChecked,
  onChange,
  className,
  isFormik,
  ...props
}) => {
  if (isFormik && !name) {
    throw "name is required";
  }
  const id = useMemo(() => uniqueId());
  let meta, field, helpers;
  try {
    [field, meta, helpers] = useField(name);
  } catch {}
  return (
    <Container>
      <InputContainer>
        <Input
          name={name}
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          {...props}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.checked);
            }
          }}
        />
        <Label htmlFor={id}>{label}</Label>
      </InputContainer>
      {hint ? <Hint>{hint}</Hint> : null}
      {isFormik && meta.error ? (
        <Error>
          <ErrorMessage name={name} />
        </Error>
      ) : null}
    </Container>
  );
};
