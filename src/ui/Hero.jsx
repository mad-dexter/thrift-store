import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const StyledHero = styled.section`
  padding: 2rem;
  background-color: #fff8dc; /* Cornsilk */
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  function goShopping() {
    navigate("/shop");
  }

  if (location.pathname !== "/") return <></>;

  return (
    <StyledHero>
      <Heading as="h2">Discover Unique Finds at Affordable Prices</Heading>
      <Button onClick={goShopping}>Shop Now</Button>
    </StyledHero>
  );
}

export default Hero;
