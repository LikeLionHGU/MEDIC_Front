import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "../components/SignUpPage2/LoginButton";
import backgroundImage from "../img/SignUpPage.png";
import logo from "../img/Logo.png";
import axios from "axios"; // axios를 사용하여 API 요청

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
  const [nickname, setNickname] = useState(""); // 닉네임을 초기 상태로 설정

  useEffect(() => {
    // 백엔드에서 닉네임을 가져오는 함수
    const fetchNickname = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail"); // 로컬 저장소에서 사용자 이메일 가져오기
        const response = await axios.get(`/auth/sign-up/welcome/info`, {
          params: { userEmail },
        });
        if (response.data.success) {
          setNickname(response.data.data.userNickname);
        }
      } catch (error) {
        console.error("Failed to fetch nickname:", error);
      }
    };

    fetchNickname();
  }, []);

  const goLoginPage = () => {
    navigate("/");
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
      {/* {nickname && (
        <WelcomeMessage>
          <Nickname>{nickname}</Nickname>님 회원가입이<br></br> 완료되었습니다!
        </WelcomeMessage>
      )} */}

      <WelcomeMessage>
        <Nickname>건강이</Nickname>님 회원가입이<br></br> 완료되었습니다!
      </WelcomeMessage>

      <LoginButton
        text="로그인하고 맞춤 건강기능식품 추천받기"
        onClick={goLoginPage}
        style={{ backgroundColor: "#90AF20" }}
      />
    </Container>
  );
};

export default SignUpPage2;