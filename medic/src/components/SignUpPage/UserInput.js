import React from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 7.5px;
  width: 570px;
  height: 37.5px;
  color: black;
  padding-bottom: 0px;
  padding-left: 5px;
  font-family: "Pretendard-Regular";
  transition: border-color 0.3s;

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border-color: #e45d5d;
    `}

  &:focus {
    font-family: "Pretendard-Regular";
    outline: none;
    border-color: ${({ isInvalid }) => (isInvalid ? "#e45d5d" : "#b2d23e")};
  }
`;

const UserInput2 = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  isInvalid,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      isInvalid={isInvalid}
    />
  );
};

export default UserInput2;
