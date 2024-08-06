import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import up from "../../img/up.svg";
import down from "../../img/down.svg";
import search from "../../img/whitesearch.svg";

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

const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  font-weight: bold;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 35px 10px 16px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  top: 43px;
  left: 8px;
  width: 81px;
  height: 66px;
  background-color: #b2d23e;
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
      background-color: #99b93b;
    }
  }

  & > div:first-child {
    border-radius: 5px 5px 0px 0px;
    border-bottom: 0.3px solid #939090;
  }

  & > div:last-child {
    border-radius: 0px 0px 5px 5px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1.2px solid #b2d23e;
  border-radius: 10px;
  width: 770px;
  overflow: visible;
`;

const SearchInput = styled.input`
  border: none;
  flex-grow: 1;
  color: #8c8c8c;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 8px;
  &:focus {
    outline: none;
    color: black;
  }
`;

const SearchButton = styled.button`
  border-radius: 0 8px 8px 0;
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
  margin-right: 3px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: flex-end;
  padding-right: 62px;
  padding-top: 30px;
  padding-bottom: 10px;
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

const Header = ({ onSearchOptionChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("제품");
  const [userNickname, setUserNickname] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedNickname = localStorage.getItem("userNickname");
    if (storedNickname) {
      setUserNickname(storedNickname);
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onSearchOptionChange(option);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/api/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const text = await response.text();
      console.log("Logout response text:", text);

      if (text === "success") {
        localStorage.removeItem("token");
        localStorage.removeItem("userNickname");
        navigate("/");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogoClick = () => {
    navigate("/Medic");
  };

  const handleSearch = () => {
    navigate(`/Medic/SearchPage?query=${encodeURIComponent(searchQuery)}`);
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
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "검색어를 입력하세요")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>
            <SearchIcon src={search} alt="search icon" />
            검색하기
          </SearchButton>
        </SearchContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
