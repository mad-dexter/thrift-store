import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiMiniTrash } from "react-icons/hi2";
import { useProductImage } from "./useProductImage";
import SpinnerMini from "../../ui/SpinnerMini";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCartItem } from "./useDeleteCartItem";

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 20fr 30fr 30fr 10fr 10fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  border-radius: 8px;

  & img {
    height: 10rem;
    width: 10rem;
  }
`;

/* eslint-disable react/prop-types */
function CartItem({ cartItem = {} }) {
  const { image, isLoading } = useProductImage(cartItem?.itemId);
  const { deleteCartItem, isDeleting } = useDeleteCartItem();
  // console.log(image);

  function handleCartItemDeletion() {
    deleteCartItem(cartItem.id);
  }

  return (
    <CartItemContainer>
      <div>
        {isLoading && <SpinnerMini />}
        {!isLoading && (
          <img
            src={image?.at(0).imageUrl}
            alt={`Image of ${cartItem?.product?.productName}`}
          />
        )}
      </div>

      <span>{cartItem?.product?.productName}</span>
      <span>{cartItem?.product?.shortDescription}</span>
      <span>{formatCurrency(cartItem?.totalPrice)}</span>
      <span>
        <Modal>
          <Modal.Open opens="deleteCart">
            <ButtonIcon>
              <HiMiniTrash className="icon" />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="deleteCart">
            <ConfirmDelete
              resourceName="cart item"
              onConfirm={handleCartItemDeletion}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </span>
    </CartItemContainer>
  );
}

export default CartItem;
