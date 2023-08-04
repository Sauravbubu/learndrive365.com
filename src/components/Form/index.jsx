import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled, { keyframes } from "styled-components";

const Form = styled.form`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    max-width: 80vw; /* For medium-sized screens */
  }

  @media (max-width: 576px) {
    max-width: 80vw; /* For smaller screens */
  }
`;

const FieldWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  color: black;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  color: black;
  background: white;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  background-color: #ddd;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledValidationError = styled(ValidationError)`
  color: red;
  animation: ${fadeIn} 0.3s ease;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknloqaw");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Form id="contact" onSubmit={handleSubmit}>
      <FieldWrapper>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" name="name" />
        <StyledValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" name="email" />
        <StyledValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="number">Phone Number</Label>
        <Input id="number" type="number" name="number" />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" rows="4" />
        <StyledValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FieldWrapper>

      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
