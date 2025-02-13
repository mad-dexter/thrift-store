import Heading from "../ui/Heading";
import Order from "../features/order/Order";
import StyledAppLayout from "../ui/StyledAppLayout";
import Header from "../ui/Header";
import Main from "../ui/Main";
import Container from "../ui/Container";

function OrderPage() {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <Container>
          <Heading as="h2">Complete your order</Heading>
          <Order />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default OrderPage;
