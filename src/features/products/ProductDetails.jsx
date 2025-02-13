import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { useProductData } from "./useProductData";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { useCreateCartItem } from "../cart/useCreateCartItem";

const StyledImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow-x: hidden;
  & img {
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  & .slide {
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100%;

    /* THIS creates the animation! */
    transition: transform 1s;
  }

  & .slide > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledProductDetailsContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  height: 82vh;

  & p {
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--color-grey-500);
  }
`;

const StyledSubHeading = styled.p`
  color: var(--color-grey-700);
  margin-top: -1rem;
  font-size: 2rem;
`;

const PriceLabel = styled.p`
  font-size: 3rem !important;
  font-weight: bold !important;
  margin-bottom: 1rem;
  color: #6b8e23 !important;
`;

const FragileLabel = styled.p`
  color: var(--color-red-700) !important;
  text-transform: uppercase;
  font-size: 1.6rem !important;
  word-spacing: 0.5rem;
`;

const StyledCategoryPill = styled.div`
  border-radius: 20px;
  padding: 1rem 2rem;
  background-color: var(--color-yellow-100);
  display: inline-block;
`;

const StyledImageThumbnailContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);

  & img {
    height: 4rem;
    width: 4rem;
    border-radius: 0px;
  }
`;

const StyledAccordionLeftButton = styled.button`
  background-color: transparent;
  border: none;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1;

  & svg {
    width: 4rem;
    height: 4rem;
  }

  & svg:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;

const StyledAccordionRightButton = styled.button`
  background-color: transparent;
  border: none;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1;

  & svg {
    width: 4rem;
    height: 4rem;
  }

  & svg:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;

const StyledImageButton = styled.button`
  border: 1px solid var(--color-grey-500);
`;

function ProductDetails() {
  const [currSlide, setCurrSlide] = useState(0);
  const { isLoading, productData } = useProductData();
  const { createCartItem, isCreating } = useCreateCartItem();

  if (isLoading) return <Spinner />;

  // Get all the product data
  const {
    id: productId,
    productName,
    shortDescription,
    description,
    unitPrice,
    categories,
    isFragile,
    productImage,
  } = productData ?? {};

  function handleAddToCart() {
    createCartItem({ itemId: productId, itemQty: 1, totalPrice: unitPrice });
  }

  const { categoryName } = categories ?? {};

  function moveSlideForward() {
    if (currSlide === productImage.length - 1) {
      setCurrSlide(0);
    } else {
      setCurrSlide((slide) => slide + 1);
    }
  }

  function moveSlideBackward() {
    if (currSlide === 0) {
      setCurrSlide(productImage.length - 1);
    } else {
      setCurrSlide((slide) => slide - 1);
    }
  }

  return (
    <>
      <StyledImageContainer>
        <StyledAccordionLeftButton onClick={moveSlideBackward}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </StyledAccordionLeftButton>
        <StyledAccordionRightButton onClick={moveSlideForward}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </StyledAccordionRightButton>
        {/* Main Image */}
        {productImage.map((image, index) => (
          <div
            className="slide"
            key={image.imageUrl}
            style={{ transform: `translateX(${100 * (index - currSlide)}%` }}
          >
            <img
              src={image.imageUrl}
              alt="Product Image"
              style={{ height: "48rem" }}
            />
          </div>
        ))}

        {/* Image thumbnails */}
        <StyledImageThumbnailContainer>
          {productImage.map((image, index) => (
            <StyledImageButton
              key={image.imageUrl}
              data-slide={index}
              onClick={() => setCurrSlide(index)}
              className={currSlide === index ? "thumbail-selected" : ""}
            >
              <img
                src={image.imageUrl}
                alt="Image Thumbnails"
                key={image.imageUrl}
              />
            </StyledImageButton>
          ))}
        </StyledImageThumbnailContainer>
      </StyledImageContainer>
      <StyledProductDetailsContainer>
        <Heading as="h2">{productName}</Heading>
        <StyledSubHeading>{shortDescription}</StyledSubHeading>
        <p>{description}</p>
        {isFragile && (
          <FragileLabel>This item is marked FRAGILE!!!</FragileLabel>
        )}
        <div>
          <StyledCategoryPill>{categoryName}</StyledCategoryPill>
        </div>
        <PriceLabel>{formatCurrency(unitPrice)}</PriceLabel>
        <Button onClick={handleAddToCart} disabled={isCreating}>
          Add to Cart
        </Button>
      </StyledProductDetailsContainer>
    </>
  );
}

export default ProductDetails;
