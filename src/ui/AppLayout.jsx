import { Outlet } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import CartOverview from "../features/cart/CartOverview";
import StyledAppLayout from "./StyledAppLayout";
import Main from "./Main";
import Container from "./Container";

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <Hero />
        <Container>
          <Outlet />
        </Container>
      </Main>

      <CartOverview />
    </StyledAppLayout>
  );
}

export default AppLayout;
