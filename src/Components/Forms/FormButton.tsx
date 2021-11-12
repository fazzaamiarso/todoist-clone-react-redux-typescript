import React from "react";
import styled, { css } from "styled-components";

interface Button {
  disabled: boolean;
  content: string;
  BtnType: "main" | "secondary";
  onClick?: () => void;
  type?: "submit";
}

const FormButton: React.FC<Button> = ({
  disabled = false,
  content,
  BtnType,
  onClick,
  type,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} BtnType={BtnType} type={type}>
      {content}
    </Button>
  );
};

const Button = styled.button<{ BtnType: "main" | "secondary" }>`
  padding: 1em 1.5em;
  &:hover {
    opacity: 0.75;
  }
  ${({ BtnType }) =>
    BtnType === "main" &&
    css`
      background-color: var(--primaryColor);
    `}
  ${({ BtnType }) =>
    BtnType === "secondary" &&
    css`
      background-color: white;
    `}
`;
export default FormButton;
