import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/Logo.png";
import up from "../../img/up.png";
import down from "../../img/down.png";
import search from "../../img/search.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  width: 1200px;
  margin-left: 57px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
  overflow: visible;
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
  padding: 10px 45px 10px 16px;
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
  margin-right: 16px;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  top: 40px;
  left: 0;
  width: 120px;
  height: 66px;
  background-color: #b2d23e;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 5px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    text-align: center;
    height: 33px;

    &:hover {
      border-radius: 5px;
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
  flex-grow: 1;
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 0 7.5px 7.5px 0;
  background-color: #b2d23e;
  font-family: "Pretendard-Regular";
  border: none;
  height: 38px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #a3c03a;
  }
`;

const SearchIcon = styled.img`
  margin-left: 8px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: flex-end;
  padding-right: 62px;
  padding-top: 50px;
`;

const WelcomeMessage = styled.div`
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const UserNickname = styled.div`
  color: #b2d23e;
  font-family: "Pretendard-Regular";
  font-size: 14px;
`;

const LogoutButton = styled.button`
  border: 1px solid #8c8c8c;
  border-radius: 10px;
  background-color: #fff;
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  cursor: pointer;
  width: 76px;
  height: 29px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #575757;
    border: 1px solid #575757;
  }
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("제품");
  const [userNickname, setUserNickname] = useState("건강이");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        const response = await fetch(`/api/user/info?userEmail=${userEmail}`);
        const data = await response.json();
        if (data.success) {
          setUserNickname(data.data.userNickname);
        }
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };

    fetchUserInfo();
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/Medic");
  };

  return (
    <>
      <UserContainer>
        <WelcomeMessage>
          <UserNickname>{userNickname}</UserNickname>님 환영합니다!
        </WelcomeMessage>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </UserContainer>
      <HeaderContainer>
        <Logo onClick={handleLogoClick}>
          <LogoImage src={logo} alt="Logo" />
          <Title>MEDIC</Title>
        </Logo>
        <SearchContainer>
          <Dropdown>
            <DropdownButton onClick={toggleDropdown}>
              {selectedOption}
            </DropdownButton>{" "}
            <IMG src={dropdownOpen ? up : down} alt="dropdown icon" />
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
    </>
  );
};

export default Header;
