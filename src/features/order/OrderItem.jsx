import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const OrderItemContainer = styled.div`
  display: grid;
  grid-template-columns: 20fr 30fr 30fr 10fr 10fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  border-radius: 8px;

  & img {
    height: 10rem;
    width: 10rem;
  }
`;

/* eslint-disable react/prop-types */
function OrderItem({ orderItem = {} }) {
  return (
    <OrderItemContainer>
      <div>
        <img
          src={orderItem.product.productImage.at(0).imageUrl}
          alt={`Image of ${orderItem.product.productName}`}
        />
      </div>

      <span>{orderItem.product.productName}</span>
      <span>{orderItem.product.shortDescription}</span>
      <span>{formatCurrency(orderItem.price)}</span>
    </OrderItemContainer>
  );
}

export default OrderItem;
