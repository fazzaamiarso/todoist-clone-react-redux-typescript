import React from "react";
import styled from "styled-components";

interface Props {
  actionText: string;
  onEditAction: () => void;
}

const EditDropDownItem: React.FC<Props> = ({ actionText, onEditAction }) => {
  return (
    <Container onClick={onEditAction}>
      <span>{actionText}</span>
    </Container>
  );
};

const Container = styled.button`
  width: 100%;
  padding: 0.3rem 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default EditDropDownItem;
