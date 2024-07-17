import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserInput from "../components/LoginPage/UserInput";
import LoginButton from "../components/LoginPage/LoginButton";
import backgroundImage from "../img/LoginPage.png";
import logo from "../img/Logo.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 52.56px;
  height: 58.4px;
  margin-right: 8px;
  margin-bottom: 30px;
  margin-top: 0px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 70px;
  margin-bottom: 24px;
`;

const SubTitle = styled.div`
  font-family: "KIMM_Bold";
  color: #cbcbcb;
  font-size: 20px;
  margin-bottom: 27.76px;
`;

const SubTitle2 = styled.div`
  font-family: "KIMM_Bold";
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 27.76px;
`;

const Email = styled.div`
  font-family: "Pretendard-Regular";
  color: white;
  font-size: 14px;
  width: 430px;
  margin-bottom: 0;
  margin-top: 30.24px;
`;

const UserFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 531px;
  border-radius: 10px;
  font-size: 14px;
  font-family: "Pretendard-Regular";
`;

const ErrorMessage = styled.div`
  width: 430px;
  margin-top: 3px;
  color: ${({ isInvalid, touched }) => {
    if (!touched) return "#C5C5C5";
    return isInvalid ? "#B2D23E" : "#A1A1A1";
  }};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const Contatin = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-right: 38px;
  margin-top: 0px;
`;

const Div = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: white;
  margin-right: 20px;
`;
const SignButton = styled.button`
  background: none;
  border: 1px solid #b2d23e;
  border-radius: 10px;
  color: #b2d23e;
  cursor: pointer;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  padding: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  text-align: start;
  width: 430px;
  margin-top: 26.98px;
  padding-left: 0px;

  &:hover {
    text-decoration: underline;
  }

  span {
    font-weight: bold;
  }
`;

const LoginPage = () => {
  // 유저 정보(ID, PW)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // 이메일, 비번 유효성 검사 메시지 상태
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    setEmailTouched(false);
    setPasswordTouched(false);
  }, []);

  // 이메일, 비밀번호 입력 처리
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));

    if (name === "email") setEmailTouched(true);
    if (name === "password") setPasswordTouched(true);
  };

  // 유효성 검사
  const isInvalidEmail =
    emailTouched &&
    (!userInfo.email.includes("@") || !userInfo.email.includes("."));
  const isInvalidPassword =
    passwordTouched &&
    (userInfo.password.length > 8 ||
      !/[a-zA-Z]/.test(userInfo.password) ||
      !/[0-9]/.test(userInfo.password));

  const isValidEmail = !isInvalidEmail && emailTouched;
  const isValidPassword = !isInvalidPassword && passwordTouched;

  const isValid = isValidEmail && isValidPassword;

  // 페이지 이동
  const navigate = useNavigate();

  // 회원가입 페이지 이동
  const goSignupPage = () => {
    navigate("/medic/signup");
  };

  // fetch : 로그인 버튼 클릭 시 메인 페이지로 이동
  const loginProcess = () => {
    fetch("/data/Login.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "LOGIN SUCCESS") {
          localStorage.setItem("token", data.message);
          navigate("/medic");
        } else {
          alert("가입되지 않은 정보입니다.");
        }
      });
  };

  return (
    <Container>
      <Contatin>
        <Div>아직 계정이 없으신가요?</Div>
        <SignButton onClick={goSignupPage}>무료로 시작하기</SignButton>
      </Contatin>
      <UserFrame onChange={handleInputChange}>
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
        <Email>Email address</Email>
        <UserInput
          type="text"
          placeholder=""
          value={userInfo.email}
          name="email"
        />
        <ErrorMessage
          isInvalid={isInvalidEmail}
          touched={emailTouched}
          isVisible={isInvalidEmail || !emailTouched}
        >
          이메일 주소를 입력해주세요.
        </ErrorMessage>
        <Email>Password</Email>
        <UserInput
          type="password"
          placeholder=""
          value={userInfo.password}
          name="password"
        />
        <ErrorMessage
          isInvalid={isInvalidPassword}
          touched={passwordTouched}
          isVisible={isInvalidPassword || !passwordTouched}
        >
          영문, 숫자 포함 8자 이내로 입력해주세요.
        </ErrorMessage>
        <ActionButton>
          <span>비밀번호</span>를 잊으셨나요?
        </ActionButton>
        <LoginButton text="로그인" disabled={!isValid} onClick={loginProcess} />
      </UserFrame>
    </Container>
  );
};

export default LoginPage;
