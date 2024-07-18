import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent; // 배경을 투명하게 설정
  border: 1px solid black;
  border-radius: 7.5px;
  width: 570px;
  height: 37.5px;
  color: black;
  padding-bottom: 0px;
  padding-left: 5px;
  font-family: "Pretendard-Regular";

  &:focus {
    font-family: "Pretendard-Regular";
    outline: none; // 포커스 시 기본 아웃라인 제거
    border-color: #b2d23e; // 포커스 시에도 아래쪽 테두리만 표시
  }
`;

const UserInput2 = ({ type, placeholder, value, name, onChange }) => {
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

export default UserInput2;
