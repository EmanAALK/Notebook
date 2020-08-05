import styled, { createGlobalStyle } from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    color: black;
    background-color: black;
  }
`;
