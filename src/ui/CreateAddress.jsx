/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Heading from "./Heading";
import Form from "./Form";
import Input from "./Input";
import styled from "styled-components";
import Button from "./Button";
import { useCreateAddress } from "../features/authentication/useCreateAddress";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function CreateAddress({ onClose: onModalClose }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { createAddress, isCreating } = useCreateAddress();

  function handleFormSubmit(data) {
    createAddress(data, {
      onSuccess: () => {
        reset();
        onModalClose();
      },
    });
  }

  return (
    <FormContainer>
      <Heading as="h2">Add a New Address</Heading>

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          placeholder="Flat/house Number"
          id="flatNo"
          {...register("flatNo", { required: "This field is required." })}
        />
        {errors?.flatNo?.message && <Error>{errors?.flatNo?.message}</Error>}
        <Input
          type="text"
          placeholder="Society Name"
          id="societyName"
          {...register("societyName", { required: "This field is required." })}
        />
        {errors?.societyName?.message && (
          <Error>{errors?.societyName?.message}</Error>
        )}
        <Input
          type="text"
          placeholder="Street"
          id="street"
          {...register("street", { required: "This field is required." })}
        />
        {errors?.street?.message && <Error>{errors?.street?.message}</Error>}
        <Input
          type="text"
          placeholder="Landmark"
          id="landmark"
          {...register("landmark")}
        />
        <Input
          type="text"
          placeholder="City"
          id="city"
          {...register("city", { required: "This field is required." })}
        />
        {errors?.city?.message && <Error>{errors?.city?.message}</Error>}
        <Input
          type="text"
          placeholder="State"
          id="state"
          {...register("state", { required: "This field is required." })}
        />
        {errors?.state?.message && <Error>{errors?.state?.message}</Error>}
        <Input
          type="number"
          placeholder="Pincode"
          id="pincode"
          {...register("pincode", { required: "This field is required." })}
        />
        {errors?.pincode?.message && <Error>{errors?.pincode?.message}</Error>}
        <Button disabled={isCreating}>
          {isCreating ? "Loading..." : "Create Address"}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default CreateAddress;
