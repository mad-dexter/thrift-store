/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useCreateCartItem } from "../cart/useCreateCartItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledProduct = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30rem;
  padding-bottom: 1rem;
  position: relative;

  & img {
    width: 30rem;
    height: 38rem;
  }

  & p {
    font-family: "Lato", sans-serif;
    font-size: 1.4rem;
    margin: 0 1rem 1rem;
    color: var(--color-grey-600);
  }

  ${(props) =>
    props.isfragile === "true" &&
    css`
      &::after {
        content: "Fragile";
        position: absolute;
        top: 4%;
        right: -21%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.4rem;
        background-color: red;
        padding: 0.6rem 8rem;
        transform: rotate(45deg);
      }
    `}
`;

function ProductItem({ product }) {
  const {
    id: productId,
    productName,
    unitPrice,
    productImage,
    isFragile,
    shortDescription,
  } = product ?? {};
  const { createCartItem, isCreating } = useCreateCartItem();

  function handleAddToCart() {
    createCartItem({ itemId: productId, itemQty: 1, totalPrice: unitPrice });
  }

  return (
    <StyledProduct isfragile={isFragile.toString()}>
      <Link to={`/details/${productId}`}>
        {/* <img
          src={productImage.at(0).imageUrl}
          alt={`Image of ${productName}`}
        /> */}
        <LazyLoadImage
          src={productImage.at(0).imageUrl}
          alt={`Image of ${productName}`}
          placeholderSrc="/assets/placeholder.png"
          effect="blur"
        />
        <Heading as="h2">{productName}</Heading>
        <p>{shortDescription}</p>
      </Link>
      <Button
        size="medium"
        variation="primary"
        onClick={handleAddToCart}
        disabled={isCreating}
      >
        {`Add to cart @ ${formatCurrency(unitPrice)}`}
      </Button>
    </StyledProduct>
  );
}

export default ProductItem;
