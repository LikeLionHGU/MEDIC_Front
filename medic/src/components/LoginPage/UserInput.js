import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent; // 배경을 투명하게 설정
  border: none;
  border-bottom: 0.5px solid #fff;
  width: 430px;
  height: 50px;
  color: white;
  padding-bottom: 0px;
  font-family: "Pretendard-Regular";

  &:focus {
    font-family: "Pretendard-Regular";
    outline: none; // 포커스 시 기본 아웃라인 제거
    border-bottom: 0.5px solid #fff; // 포커스 시에도 아래쪽 테두리만 표시
  }
`;

const UserInput = ({ type, placeholder, value, name, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default UserInput;
