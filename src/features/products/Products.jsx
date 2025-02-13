import styled from "styled-components";
import { useProducts } from "./useProducts";
import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";
import { useCategories } from "./useCategories";
import Filter from "../../ui/Filter";
import Heading from "../../ui/Heading";

const StyledProductsContainer = styled.section`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const StyledProductsSection = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 0.5rem;
  margin-top: 2rem;
`;

function Products() {
  const { isLoading, productsData } = useProducts();
  const { isLoading: isCategoryLoading, categoryData } = useCategories();

  if (isLoading || isCategoryLoading) return <Spinner />;

  return (
    <StyledProductsContainer>
      <Filter
        filterField="category"
        options={[
          { value: "all", label: "All" },
          ...categoryData.map((category) => ({
            value: category.id,
            label: category.categoryName,
          })),
        ]}
      />
      <StyledProductsSection>
        {productsData.length === 0 && (
          <Heading as="h3">No Product found.</Heading>
        )}
        {productsData.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </StyledProductsSection>
    </StyledProductsContainer>
  );
}

export default Products;
