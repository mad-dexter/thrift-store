/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";
import AddressItem from "../../ui/AddressItem";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import OrderItem from "./OrderItem";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  padding: 2rem;
  border-radius: 8px;
`;

const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const OrderLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  color: black;
`;

const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const OrderItemsAccordionBar = styled.div`
  background-color: var(--color-grey-200);
  color: var(--color-grey-700);
  border-radius: 10px;

  & button {
    display: grid;
    grid-template-columns: 95fr 5fr;
    align-items: center;
    justify-items: start;
    padding: 2rem;
    background-color: transparent;
    border: none;
    width: 100%;
  }
`;

const OrderItemsAccordionContent = styled.div`
  background-color: var(--color-grey-200);
  color: var(--color-grey-700);
  padding: 1.6rem 2.8rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  border-radius: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

function ShowOrder({ order }) {
  const [itemsOpen, setItemsOpen] = useState(false);

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <OrderContainer>
      <Heading as="h3">Order - {order.id}</Heading>
      <OrderDetails>
        <HorizontalDiv>
          <OrderLabel>Created on</OrderLabel>
          <div>
            {new Date(order?.created_at).toLocaleDateString("en-IN", options)}
          </div>
        </HorizontalDiv>
        <HorizontalDiv>
          <OrderLabel>Order Notes</OrderLabel>
          <div>{order.notes ? order.notes : "Not provided"}</div>
        </HorizontalDiv>
        <HorizontalDiv>
          <OrderLabel>Order Total</OrderLabel>
          <div>{formatCurrency(order.orderPrice)}</div>
        </HorizontalDiv>
        <HorizontalDiv>
          <OrderLabel>Payment Type</OrderLabel>
          <div>{order.paymentType}</div>
        </HorizontalDiv>
        <HorizontalDiv>
          <OrderLabel>Order Status</OrderLabel>
          <div>{order.status}</div>
        </HorizontalDiv>
        <HorizontalDiv>
          <AddressItem showDelete={false} address={order.addresses} />
        </HorizontalDiv>
      </OrderDetails>
      <FlexContainer>
        <OrderItemsAccordionBar>
          <button onClick={() => setItemsOpen((open) => !open)}>
            <span>Ordered Items</span>
            {itemsOpen ? (
              <HiChevronUp className="icon" />
            ) : (
              <HiChevronDown className="icon" />
            )}
          </button>
        </OrderItemsAccordionBar>
        {itemsOpen && (
          <OrderItemsAccordionContent>
            {order.orderitems.map((item) => (
              <OrderItem orderItem={item} key={item.product.id} />
            ))}
          </OrderItemsAccordionContent>
        )}
      </FlexContainer>
    </OrderContainer>
  );
}

export default ShowOrder;
