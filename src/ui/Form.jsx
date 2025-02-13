import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & button {
    margin-top: 0.8rem;
  }

  & a:link,
  & a:visited {
    background-color: transparent;
    color: #0077cc;
    font-size: 1rem;
    padding: 0;
    text-decoration: underline;
    font-size: 1.8rem;
    word-spacing: 0.2rem;
  }

  & a:hover,
  & a:active {
    color: #0099dd;
  }
`;

export default Form;
