/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #fff;
    background-color: #6b8e23;

    &:hover {
      box-shadow: 0 0.5rem 0.5rem 0 rgba(106, 142, 35, 0.2);
      background-color: #3e510a;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
      box-shadow: 0 0.5rem 0.5rem 0 rgba(106, 142, 35, 0.1);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const StyledButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  padding: 0.8rem 1.8rem;
  border: none;
  cursor: pointer;
  border-radius: 20px;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

StyledButton.defaultProps = {
  size: "large",
  variation: "primary",
};

function Button({ size, variation, onClick, disabled, children }) {
  return (
    <StyledButton
      size={size}
      variation={variation}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
