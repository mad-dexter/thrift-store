import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { useCart } from "./useCart";
import SpinnerMini from "../../ui/SpinnerMini";
import { formatCurrency } from "../../utils/helpers";

const StyledCartOverview = styled.div`
  background-color: #fff8dc;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 10fr 10fr 80fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1.8rem 4rem;

  & a {
    justify-self: end;
  }

  & a:link,
  & a:visited {
    font-size: 2rem;
    font-weight: 700;
  }
  & a:hover,
  & a:active {
    text-decoration: underline;
    text-decoration-color: #d2b48c;
    text-decoration-thickness: 0.5rem;
    text-underline-offset: 0.8rem;
  }
`;

const CartLabelSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
`;

const CurrencyValueSpan = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

function CartOverview() {
  const { isAuthenticated } = useUser();
  const { cart, isLoading } = useCart();
  const location = useLocation();

  if (!isAuthenticated) return null;
  if (!cart) return null;
  if (cart?.length === 0) return null;
  if (isLoading) return <SpinnerMini />;

  const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <StyledCartOverview>
      <p>
        <CurrencyValueSpan>{cart?.length}</CurrencyValueSpan>{" "}
        <CartLabelSpan>Items</CartLabelSpan>
      </p>
      <p>
        <CurrencyValueSpan>{formatCurrency(totalCartPrice)}</CurrencyValueSpan>
      </p>
      {location.pathname === "/cart" && (
        <Link to="/order">Proceed to Order &rarr;</Link>
      )}
      {location.pathname !== "/cart" && (
        <Link to="/cart">Open Cart &rarr;</Link>
      )}
    </StyledCartOverview>
  );
}

export default CartOverview;
