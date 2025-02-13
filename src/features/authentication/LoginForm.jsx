import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { Link } from "react-router-dom";
import Form from "../../ui/Form";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <Link to="/register">Don&apos;t have an account? Register here</Link>
      <Button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</Button>
    </Form>
  );
}

export default LoginForm;
