import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useAddress } from "./useAddress";
import SpinnerMini from "../../ui/SpinnerMini";
import AddressList from "../../ui/AddressList";
import Profile from "../../ui/Profile";
import { Link } from "react-router-dom";

const StyledProfileContainer = styled.div`
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const HorizonatalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  & a:link,
  & a:visited {
    font-size: 1.8rem;
    text-decoration: underline;
    text-underline-offset: 0.6rem;
    transition: all 0.5s;
  }

  & a:hover,
  & a:active {
    font-size: 1.9rem;
  }
`;

function ProfilePage() {
  const { addresses, isLoading: isAddressLoading } = useAddress();

  return (
    <StyledProfileContainer>
      <HorizonatalDiv>
        <Profile />
        <Link to="/orders">My Orders</Link>
      </HorizonatalDiv>
      <div>
        <Heading as="h3">Your Addresses</Heading>
        {isAddressLoading && <SpinnerMini />}
        {!isAddressLoading && <AddressList addresses={addresses} />}
      </div>
    </StyledProfileContainer>
  );
}

export default ProfilePage;
