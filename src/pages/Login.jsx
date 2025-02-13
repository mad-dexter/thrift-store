import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import FormLayout from "../ui/FormLayout";
import { useUser } from "../features/authentication/useUser";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return null;
  return (
    <FormLayout>
      <NavLink to="/">
        <Heading as="h1">Thrift Heaven</Heading>
      </NavLink>
      <Heading as="h2">Log in to your account</Heading>
      <LoginForm />
    </FormLayout>
  );
}

export default Login;
