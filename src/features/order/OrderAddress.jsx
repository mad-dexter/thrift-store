/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useAddress } from "../authentication/useAddress";
import SpinnerMini from "../../ui/SpinnerMini";
import AddressList from "../../ui/AddressList";

const StyledProfileContainer = styled.div`
  padding: 2rem 4rem;
`;

function OrderAddress({ setSelectedAddress }) {
  const { addresses, isLoading: isAddressLoading } = useAddress();

  return (
    <StyledProfileContainer>
      <div>
        {isAddressLoading && <SpinnerMini />}
        {!isAddressLoading && (
          <AddressList
            addresses={addresses}
            showDelete={false}
            setSelectedAddress={setSelectedAddress}
          />
        )}
      </div>
    </StyledProfileContainer>
  );
}

export default OrderAddress;
