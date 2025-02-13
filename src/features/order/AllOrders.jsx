import styled from "styled-components";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { useAllOrders } from "./useAllOrders";
import ShowOrder from "./ShowOrder";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

function AllOrders() {
  const { orders, isLoading } = useAllOrders();

  if (isLoading) return <Spinner />;
  if (!orders)
    return <Heading as="h3">You don&apos;t have any orders.</Heading>;
  if (orders?.length === 0)
    return <Heading as="h3">You don&apos;t have any orders.</Heading>;

  return (
    <OrderContainer>
      {orders.map((order) => (
        <ShowOrder order={order} key={order.id} />
      ))}
    </OrderContainer>
  );
}

export default AllOrders;
