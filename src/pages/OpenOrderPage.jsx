import OpenAOrder from "../features/order/OpenAOrder";
import Heading from "../ui/Heading";

function OpenOrderPage() {
  return (
    <>
      <Heading as="h2">✅ Your order is placed</Heading>
      <OpenAOrder />
    </>
  );
}

export default OpenOrderPage;
