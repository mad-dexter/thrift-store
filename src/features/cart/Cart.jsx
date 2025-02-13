import styled from "styled-components";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import CartItem from "./CartItem";
import { useCart } from "./useCart";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

function Cart() {
  const { cart, isLoading } = useCart();

  if (isLoading) return <Spinner />;
  if (!cart) return <Heading as="h3">No items in cart</Heading>;
  if (cart?.length === 0) return <Heading as="h3">No items in cart</Heading>;

  return (
    <CartContainer>
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </CartContainer>
  );
}

export default Cart;
