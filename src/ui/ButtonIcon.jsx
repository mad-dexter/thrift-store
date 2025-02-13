import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--color-grey-900);
  }
`;

export default ButtonIcon;
