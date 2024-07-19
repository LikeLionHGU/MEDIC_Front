import { useState } from "react";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "../components/SignUpPage2/LoginButton";
import backgroundImage from "../img/SignUpPage.png";
import logo from "../img/Logo.png";
// import axios from "axios"; // 또는 fetch를 사용할 수 있습니다.

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 48px;
  margin-right: 8px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 50.26px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const SubTitle = styled.div`
  font-family: "KIMM_Bold";
  color: #cbcbcb;
  font-size: 16px;
  margin-bottom: 38px;
`;

const SubTitle2 = styled.div`
  font-family: "KIMM_Bold";
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 38px;
`;

const WelcomeMessage = styled.div`
  font-family: "KIMM_Light";
  color: #ffffff;
  font-size: 40px;
  margin-top: 49px;
  margin-bottom: 115px;
  text-align: center;
  line-height: 150%;
`;

const Nickname = styled.span`
  color: #b2d23e; // 닉네임의 색상 설정
`;

const SignUpPage2 = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("건강이"); // 임시로 닉네임을 설정
  // const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   // 백엔드에서 닉네임을 가져오는 함수
  //   const fetchNickname = async () => {
  //     try {
  //       const response = await axios.get("/api/user/nickname"); // API 엔드포인트는 실제 백엔드 API에 맞게 조정
  //       setNickname(response.data.nickname);
  //     } catch (error) {
  //       console.error("Failed to fetch nickname:", error);
  //     }
  //   };

  //   fetchNickname();
  // }, []);

  const goLoginPage = () => {
    navigate("/Medic/LoginPage");
  };

  return (
    <Container>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        <Title>MEDIC</Title>
      </Logo>
      <Logo>
        <SubTitle>건강기능식품에</SubTitle>
        <div style={{ width: "5px" }} />
        <SubTitle2>신뢰</SubTitle2>
        <SubTitle>를 더하다</SubTitle>
      </Logo>
      {nickname && (
        <WelcomeMessage>
          <Nickname>{nickname}</Nickname>님 회원가입이<br></br> 완료되었습니다!
        </WelcomeMessage>
      )}
      <LoginButton
        text="로그인하고 맞춤 건강기능식품 추천받기"
        onClick={goLoginPage}
        style={{ backgroundColor: "#90AF20" }}
      />
    </Container>
  );
};

export default SignUpPage2;
