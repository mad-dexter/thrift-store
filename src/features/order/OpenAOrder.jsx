import Spinner from "../../ui/Spinner";
import { useOrder } from "./useOrder";
import ShowOrder from "./ShowOrder";

function OpenAOrder() {
  const { order, isLoading } = useOrder();

  if (isLoading) return <Spinner />;

  return <ShowOrder order={order} />;
}

export default OpenAOrder;
