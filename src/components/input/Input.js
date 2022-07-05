import React from "react"
import { ErrorMessage, Field, useField } from "formik"
import styled from "styled-components"
import * as style from "../../lib/style"

const Label = styled.label`
  display: inline-block;
  margin-bottom: ${style.smallMargin};
  ${(props) =>
    props.disabled
      ? `
    opacity: 0.5;
  `
      : ""}
`

const InputContainer = styled.div`
  position: relative;
  box-sizing: border-box;

  ${(props) =>
    props.iconContent
      ? `
    &:before {
      content: "${props.iconContent}";
      position: absolute;
      top: 16px;
      left: 20px;
      font-family: "${props.iconFontFamily}";
      font-size: 16px;
      color: variables.$link-bLue;
    }
  `
      : ""}
`

const Element = styled.input`
  width: 100%;
  height: 40px;
  color: ${style.textColor};
  padding: 0 ${style.padding} 0 ${style.padding};
  box-sizing: border-box;
  transition: 0.2s ease;
  border: 1px solid ${style.grey};
  font-size: inherit;
  border-radius: ${style.borderRadius};

  &::placeholder {
    color: ${style.grey};
  }

  &:focus {
    outline: none;
    border: 1px solid ${style.blueVariant1};
    box-shadow: 0 0 0 3px ${style.blueVariant2};
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.iconContent
      ? `
    padding-left: 50px !important;
  `
      : ""}
`

export const Input = ({
  name,
  label,
  iconContent,
  iconFontFamily,
  hint,
  isFormik,
  ...props
}) => {
  let meta, field, helpers
  try {
    ;[field, meta, helpers] = useField(name)
  } catch {}
  return (
    <div>
      {label ? (
        <Label htmlFor={name}>
          {label}{" "}
          {props.required ? <span style={{ color: " red" }}>*</span> : null}
        </Label>
      ) : null}
      <InputContainer>
        {isFormik ? (
          <Field
            component={Element}
            iconContent={iconContent}
            type="text"
            name={name}
            {...props}
          />
        ) : (
          <Element
            type="text"
            iconContent={iconContent}
            name={name}
            {...props}
          />
        )}
      </InputContainer>
      {hint ? <span className="form-control__hint">{hint}</span> : null}
      {isFormik && meta.error ? (
        <span className="form-control__error">
          <ErrorMessage name={name} />
        </span>
      ) : null}
    </div>
  )
}
