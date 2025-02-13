/* eslint-disable react/prop-types */
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiMiniTrash } from "react-icons/hi2";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteAddress } from "../features/authentication/useDeleteAddress";

const StyledAddressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  padding: 1.6rem;
  padding-top: 3.2rem;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  font-size: 1.8rem;
  border-radius: 8px;
  position: relative;

  & svg {
    height: 2rem;
    width: 2rem;
  }

  & button {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
  }
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

function AddressItem({ address, showDelete }) {
  const { id, flatNo, societyName, street, landmark, city, state, pincode } =
    address ?? {};

  const { deleteAddress, isDeleting } = useDeleteAddress();

  function handleDeleteAddress() {
    deleteAddress(id);
  }

  return (
    <StyledAddressContainer>
      {showDelete && (
        <Modal>
          <Modal.Open opens="deleteAddress">
            <ButtonIcon>
              <HiMiniTrash className="icon" />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="deleteAddress">
            <ConfirmDelete
              resourceName="address"
              onConfirm={handleDeleteAddress}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      )}

      <div>
        <BoldSpan>{flatNo}</BoldSpan>, <span>{societyName}</span>
      </div>
      <div>
        {street}, {landmark}
      </div>
      <div>
        {city}, {state} - {pincode}
      </div>
    </StyledAddressContainer>
  );
}

export default AddressItem;
