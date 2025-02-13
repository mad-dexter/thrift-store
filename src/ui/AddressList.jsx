/* eslint-disable react/prop-types */
import styled from "styled-components";
import AddressItem from "./AddressItem";
import ButtonIcon from "./ButtonIcon";
import { HiMiniPlusCircle } from "react-icons/hi2";
import Modal from "./Modal";
import CreateAddress from "./CreateAddress";

const StyledAddressContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  align-items: center;
  justify-content: start;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & input[type="radio"] {
    height: 2.5rem;
    width: 2.5rem;
    accent-color: var(--color-yellow-700);
  }
`;

function AddressList({ addresses, showDelete = true, setSelectedAddress }) {
  return (
    <>
      <StyledAddressContent>
        {showDelete &&
          addresses.map((address) => (
            <AddressItem
              address={address}
              key={address.id}
              showDelete={showDelete}
            />
          ))}

        {!showDelete &&
          addresses.map((address) => (
            <div key={address.id}>
              <input
                type="radio"
                id={address.id}
                name="addressKey"
                value={address.id}
                onChange={(e) => setSelectedAddress(e.target.value)}
              />
              <AddressItem address={address} showDelete={showDelete} />
            </div>
          ))}
      </StyledAddressContent>

      <Modal>
        <Modal.Open opens="createAddress">
          <ButtonIcon>
            <HiMiniPlusCircle /> Add new addresses
          </ButtonIcon>
        </Modal.Open>
        <Modal.Window name="createAddress">
          <CreateAddress />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddressList;
