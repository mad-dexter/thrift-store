import Cart from "../features/cart/Cart";
import Heading from "../ui/Heading";

function CartPage() {
  return (
    <>
      <Heading as="h2">My Cart</Heading>
      <Cart />
    </>
  );
}

export default CartPage;
