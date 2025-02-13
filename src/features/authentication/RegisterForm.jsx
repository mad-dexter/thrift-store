import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import Form from "../../ui/Form";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function LoginForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const { registerFn, isLoading } = useRegister();

  function handleFormSubmit({ fullName, email, phone, password }) {
    registerFn(
      { fullName, email, phone, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        type="email"
        placeholder="Email"
        id="email"
        disabled={isLoading}
        {...register("email", {
          required: "This field is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter valid email",
          },
        })}
      />
      <Input
        type="text"
        placeholder="Full Name"
        id="fullName"
        disabled={isLoading}
        {...register("fullName", { required: "This field is required." })}
      />
      {errors?.fullName?.message && <Error>{errors?.fullName?.message}</Error>}
      <Input
        type="tel"
        placeholder="Mobile Number"
        id="phone"
        disabled={isLoading}
        {...register("phone", { required: "This field is required." })}
      />
      {errors?.phone?.message && <Error>{errors?.phone?.message}</Error>}
      <Input
        type="password"
        placeholder="Password"
        id="password"
        disabled={isLoading}
        {...register("password", {
          required: "This field is required.",
          validate: (value) =>
            value.length >= 6 || "Password must be at least 6 characters.",
        })}
      />
      {errors?.password?.message && <Error>{errors?.password?.message}</Error>}
      <Input
        type="password"
        placeholder="Confirm Password"
        id="cpassword"
        disabled={isLoading}
        {...register("cpassword", {
          required: "This field is required.",
          validate: (value) =>
            value === getValues("password") ||
            "Password and confirm password do not match.",
        })}
      />
      {errors?.cpassword?.message && (
        <Error>{errors?.cpassword?.message}</Error>
      )}
      <Link to="/login">Already have an account? Login now!</Link>
      <Button disabled={isLoading}>
        {isLoading ? "Loading..." : "Register"}
      </Button>
    </Form>
  );
}

export default LoginForm;
