import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledContactContainer = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  & p {
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

function ContactPage() {
  return (
    <StyledContactContainer>
      <Heading as="h2">Contact Us</Heading>
      <p>
        Have a question or need assistance? Reach out to us, and we will be
        happy to help!
      </p>

      <p>Email: support@thrifthaven.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Vintage Lane, Thrift City, TC 45678</p>
    </StyledContactContainer>
  );
}

export default ContactPage;
