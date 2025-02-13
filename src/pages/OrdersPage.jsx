import AllOrders from "../features/order/AllOrders";
import Heading from "../ui/Heading";

function OrdersPage() {
  return (
    <>
      <Heading as="h2">My Orders</Heading>
      <AllOrders />
    </>
  );
}

export default OrdersPage;
