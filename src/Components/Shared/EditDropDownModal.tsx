import styled from "styled-components";

interface ModalProps {
  children?: JSX.Element;
  onCancel: () => void;
}

const EditDropDownModal: React.FC<ModalProps> = ({ children, onCancel }) => {
  return <Modal onClick={onCancel}>{children}</Modal>;
};

const Modal = styled.div`
  width: max-content;
  position: absolute;
  z-index: 101;
  bottom: -5rem;
  right: 0%;
  background-color: white;
  padding-block: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;

  border-radius: var(--borderRadius);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export default EditDropDownModal;
