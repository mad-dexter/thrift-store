import FormLayout from "../ui/FormLayout";
import Heading from "../ui/Heading";
import RegisterForm from "../features/authentication/RegisterForm";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
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
      <Heading as="h2">Register to Thrift Heaven</Heading>
      <RegisterForm />
    </FormLayout>
  );
}

export default Register;
