import { HiOutlineUserCircle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Button from "./Button";
import { useUser } from "../features/authentication/useUser";
import SpinnerMini from "./SpinnerMini";
import { useNavigate } from "react-router-dom";

function HeaderLogin() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  // Check if user is already autheticated
  const { isFetching: isLoading, isAuthenticated } = useUser();

  if (isLoading) return <SpinnerMini />;

  return (
    <>
      {isAuthenticated && (
        <ButtonIcon onClick={() => navigate("/profile")}>
          <HiOutlineUserCircle className="profileIcon" />
        </ButtonIcon>
      )}
      {!isAuthenticated && (
        <Button size="medium" variation="primary" onClick={handleLogin}>
          Login
        </Button>
      )}
    </>
  );
}

export default HeaderLogin;
