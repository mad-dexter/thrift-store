/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

const StyledProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledVerticalElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StyledLabel = styled.span`
  color: var(--color-grey-400);
  font-size: 1.6rem;
`;

function Profile({ showLogout = true }) {
  const { user } = useUser();
  const { email, user_metadata } = user ?? {};
  const { fullName, phone } = user_metadata ?? {};
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <StyledProfileDetailsContainer>
      <StyledVerticalElement>
        <Heading as="h3">
          {showLogout && "Hello,"} {fullName}
        </Heading>
        {showLogout && (
          <Button
            size="small"
            variation="danger"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Logout"}
          </Button>
        )}
      </StyledVerticalElement>
      <StyledVerticalElement>
        <StyledLabel>Phone</StyledLabel>
        <span>{phone}</span>
      </StyledVerticalElement>
      <StyledVerticalElement>
        <StyledLabel>Email</StyledLabel>
        <span>{email}</span>
      </StyledVerticalElement>
    </StyledProfileDetailsContainer>
  );
}

export default Profile;
