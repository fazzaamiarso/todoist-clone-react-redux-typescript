import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  children: JSX.Element;
}

const MODAL_ROOT = document.getElementById("modal") as HTMLDivElement;

const ModalBase: React.FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <Modal>{children}</Modal>
      <Backdrop />
    </>,

    MODAL_ROOT
  );
};

const Modal = styled.div`
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  padding: 1rem;
`;
const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default ModalBase;
