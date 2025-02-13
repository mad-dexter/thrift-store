import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledAboutContainer = styled.section`
  max-width: 900px;
  margin: 0.5rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  & p {
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  & img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
`;

const Strong = styled.strong`
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
`;

function AboutPage() {
  return (
    <StyledAboutContainer>
      <Heading as="h2">Our Story</Heading>
      <img src="/assets/thrift_1.jpg" alt="Thrift Store Interior" />
      <p>
        Welcome to <Strong>Thrift Heaven</Strong>, where fashion meets
        sustainability. Our journey began with a simple mission: to give
        pre-loved items a second chance while promoting eco-friendly shopping.
      </p>
      <p>
        We carefully curate high-quality, unique pieces that carry stories from
        the past and create new memories for the future. Whether you&apos;re
        looking for vintage fashion, one-of-a-kind accessories, or timeless home
        decor, we have something special for everyone.
      </p>
      <p>
        At Thrift Heaven, we believe in affordability, sustainability, and
        community. Every purchase you make supports reducing waste and helps
        give back to local charities. Thank you for being a part of our journey!
      </p>
    </StyledAboutContainer>
  );
}

export default AboutPage;
