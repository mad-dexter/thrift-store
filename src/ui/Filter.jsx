/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-yellow-100);
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  border: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-yellow-700);
  }

  ${(props) =>
    props.active === "true" &&
    css`
      background-color: var(--color-yellow-700);
      color: var(--color-brand-50);
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-yellow-700);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={(currentFilter === String(option.value)).toString()}
          disabled={currentFilter === String(option.value)}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
