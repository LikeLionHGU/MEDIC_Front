import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../img/Logo.png";
import up from "../../img/up.png";
import down from "../../img/down.png";
import search from "../../img/search.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 59px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 29px;
  height: 32px;
  margin-right: 4px;
  margin-bottom: 3px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 35px;
  margin-right: 35px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1.2px solid #b2d23e;
  border-radius: 7.5px;
  width: 770px;
  overflow: visible; /* overflow 속성을 visible로 변경 */
`;

const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  border-radius: 7.5px;
  font-weight: bold;
  background-color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 38px;

  &:focus {
    outline: none;
  }
`;

const IMG = styled.img`
  margin-left: 68px;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  top: 40px;
  left: 0;
  width: 81px;
  height: 65px;
  background-color: #b2d23e;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 4px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    text-align: center;
    height: 33px;
    border-radius: 4px;
    &:hover {
      background-color: #99b93b;
    }
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid #8c8c8c;
  }
`;

const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  width: 505px;
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 0 7.5px 7.5px 0; /* 좌측 모서리는 0으로 설정 */
  background-color: #b2d23e;
  font-family: "Pretendard-Regular";
  border: none;
  width: 111px;
  height: 38px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  margin-right: 3px;
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("제품");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        <Title>MEDIC</Title>
      </Logo>
      <SearchContainer>
        <Dropdown>
          <DropdownButton onClick={toggleDropdown}>
            {selectedOption}
            <IMG src={dropdownOpen ? up : down} alt="dropdown icon" />
          </DropdownButton>
          <DropdownContent show={dropdownOpen}>
            <div onClick={() => selectOption("제품")}>제품</div>
            <div onClick={() => selectOption("기능")}>기능</div>
          </DropdownContent>
        </Dropdown>
        <SearchInput type="text" placeholder="검색어를 입력하세요" />
        <SearchButton>
          <SearchIcon src={search} alt="search icon" />
          검색하기
        </SearchButton>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
