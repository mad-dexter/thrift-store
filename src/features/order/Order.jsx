import styled from "styled-components";
import Profile from "../../ui/Profile";
import Heading from "../../ui/Heading";
import OrderAddress from "./OrderAddress";
import { useCart } from "../cart/useCart";
import { useState } from "react";
import Button from "../../ui/Button";
import { useCreateOrder } from "./useCreateOrder";
import { useUser } from "../authentication/useUser";
import Spinner from "../../ui/Spinner";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OrderDivs = styled.div`
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  border-radius: 8px;
  padding: 1.6rem 3.2rem;
  display: grid;
  grid-template-columns: 20fr 80fr;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  padding: 1.6rem;
  display: flex;
  justify-content: end;
`;

function Order() {
  const { cart, isLoading } = useCart();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [note, setNote] = useState("");
  const { createOrder, isCreating } = useCreateOrder();
  const { user } = useUser();
  const { id } = user ?? {};

  function handlePlaceOrder() {
    const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
    const orderData = {
      userId: id,
      addressId: Number(selectedAddress),
      paymentType: "Online",
      status: "PLACED",
      orderPrice: totalCartPrice,
      notes: note,
    };

    const orderItems = [];
    cart.forEach((item) => {
      orderItems.push({
        itemId: item.itemId,
        itemQty: item.itemQty,
        price: item.totalPrice,
      });
    });

    createOrder({ orderData, orderItems });
  }

  if (isLoading) return <Spinner />;

  return (
    <OrderContainer>
      <OrderDivs>
        <Heading as="h3">Ordering for</Heading>
        <Profile showLogout={false} />
      </OrderDivs>
      <OrderDivs>
        <Heading as="h3">Deliver it to</Heading>
        <OrderAddress setSelectedAddress={setSelectedAddress} />
      </OrderDivs>
      <OrderDivs>
        <Heading as="h3">Delivery Notes</Heading>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows="6"
          cols="10"
        />
      </OrderDivs>
      <OrderDivs>
        <Heading as="h3">Payment</Heading>
      </OrderDivs>
      <ButtonDiv>
        <Button
          size="large"
          variation="primary"
          onClick={handlePlaceOrder}
          disabled={isCreating || !selectedAddress}
        >
          {isCreating ? "Creating order" : "Place Order"}
        </Button>
      </ButtonDiv>
    </OrderContainer>
  );
}

// For us payment success page is the OpenAOrder page.
// Need to create a Page for payment failure
// Add those routes in App.js

export default Order;
