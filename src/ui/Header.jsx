import styled from "styled-components";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";

const StyledHeader = styled.header`
  background-color: #d2b48c; /* Tan */
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-self: end;

  & ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    align-items: center;
  }

  & li:last-child {
    padding-top: 0.3rem;
  }

  & a:link,
  & a:visited {
    text-decoration: none;
    color: #333;
    margin: 0 1rem;
    font-weight: bold;
  }

  & a:hover,
  & a:active {
    text-decoration: underline;
    text-decoration-thickness: 0.5rem;
    text-underline-offset: 0.8rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">
        <Heading as="h1">Thrift Heaven</Heading>
      </NavLink>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <HeaderLogin />
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
