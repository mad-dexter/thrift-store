import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";

import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./ui/PageNotFound";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import ContactPage from "./pages/ContactPage";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./features/authentication/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import OpenOrderPage from "./pages/OpenOrderPage";
import PaymentFailedPage from "./pages/PaymentFailedPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 1000 * 60,
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} path="/" />
            <Route element={<ProductPage />} path="/details/:productId" />
            <Route element={<HomePage />} path="/shop" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<CartPage />} path="/cart" />
            <Route element={<OrdersPage />} path="/orders" />
            {/* Success path when payment goes through */}
            <Route element={<OpenOrderPage />} path="/order/:orderId" />
            {/* Failure Path when payment fails */}
            <Route element={<PaymentFailedPage />} path="/paymentfailed" />
          </Route>
          <Route element={<OrderPage />} path="/order" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-yellow-100)",
            color: "var(--color-grey-700)",
            boxShadow: "var(--shadow-md)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
