import styled from "styled-components";
import ProductDetails from "../features/products/ProductDetails";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
`;

function ProductPage() {
  return (
    <StyledContainer>
      <ProductDetails />
    </StyledContainer>
  );
}

export default ProductPage;
