import styled from "styled-components"
import * as style from "../../lib/style"

export const Form = styled.form`
  & > * {
    margin-bottom: ${style.smallMargin};

    &:last-child {
      margin-bottom: 0;
    }
  }
`
