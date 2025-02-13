/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

// Compound Components :: Modal

// Step 1: Create context for the Modal
const ModalContext = createContext();

// Step 2: Create the Modal component
function Modal({ children }) {
  // Keep track of currently open window
  const [openName, setOpenName] = useState("");

  const closeModal = () => setOpenName("");
  const openModal = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ closeModal, openModal, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

// Create Child components for the Modal
function Open({ children, opens: openWindowName }) {
  const { openModal } = useContext(ModalContext);

  // CloneElement returns a copy of the element with additional functions added like onClick
  return cloneElement(children, { onClick: () => openModal(openWindowName) });
}

function Window({ children, name }) {
  const ref = useRef(null);
  const { openName, closeModal } = useContext(ModalContext);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // Close the modal if clicked outside of the Window
          closeModal();
        }
      }
      document.addEventListener("click", handleClick, true);

      // When the component unmounts remove the listner
      return () => document.removeEventListener("click", handleClick, true);
    },
    [closeModal]
  );

  // If not current opened window then return null for this window
  if (name !== openName) return null;

  // Else return the Window
  // CreatePortal is used to take out the modal from the normal flow of the DOM and put it in the root of the HTML Body.
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={closeModal}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onClose: closeModal })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

// Add children as properties to the Modal component
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
