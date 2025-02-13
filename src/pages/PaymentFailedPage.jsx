import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Heading from "../ui/Heading";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const FailedSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;

  & svg {
    color: var(--color-red-700);
  }
`;

function PaymentFailedPage() {
  const navigate = useNavigate();
  return (
    <FailedSection>
      <HiOutlineExclamationCircle className="big-icon" />
      <Heading as="h2">Payment Failed</Heading>
      <span>Payment has failed for this order. Please retry again.</span>
      <Button
        size="medium"
        variation="danger"
        onClick={() => navigate("/cart")}
      >
        Back to Cart
      </Button>
    </FailedSection>
  );
}

export default PaymentFailedPage;
