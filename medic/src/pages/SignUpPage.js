import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SignUpButton from "../components/SignUpPage/SignUpButton";
import logo from "../img/Logo.png";
import UserInput2 from "../components/SignUpPage/UserInput";
import useDetectClose from "../components/SignUpPage/UseDetectClose";
import arrow from "../img/arrow.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 45px;
  height: 52px;
  margin-right: 4px;
  margin-bottom: 39.26px;
  margin-top: 0px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 50.26px;
  margin-bottom: 34.26px;
`;

const Email = styled.div`
  font-family: "Pretendard-Regular";
  color: black;
  font-size: 14px;
  width: 570px;
  margin-bottom: 6px;
  margin-top: 13.24px;
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
  width: 570px;
  margin-top: 3px;
  margin-bottom: 7px;
  color: ${({ isInvalid, touched }) => {
    if (!touched) return "#C5C5C5";
    return isInvalid ? "#B2D23E" : "#A1A1A1";
  }};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const ArrowImage = styled.img`
  position: absolute;
  top: 11px;
  right: 14px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      filter: invert(53%) sepia(33%) saturate(577%) hue-rotate(33deg)
        brightness(95%) contrast(92%);
    `}
`;

const HashtagContainer = styled.div`
  position: relative;
  width: 580px;
`;

const HashtagInput = styled.input`
  font-family: "Pretendard-Regular";
  background-color: transparent;
  width: 100%;
  border-radius: 7.5px;
  height: 40px;
  border: 1px solid black;
  text-align: start;
  padding-left: 10px;
  cursor: pointer;

  &:focus {
    font-family: "Pretendard-Regular";
    text-align: start;
    outline: none;
    border-color: #b2d23e;

    & + ${ArrowImage} {
      filter: invert(53%) sepia(33%) saturate(577%) hue-rotate(33deg)
        brightness(95%) contrast(92%);
    }
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  top: 42px;
  left: 0;
  border: 1px solid #b2d23e;
  width: 100%;
  height: 109.5px;
  border-radius: 7.5px;
  background-color: white;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  align-content: space-evenly;
  justify-items: center;
  text-align: center;
  line-height: 2;
`;

const GenderList = styled.ul`
  border: 1px solid #b2d23e;
  margin-top: 3px;
  border-radius: 7.5px;
  width: 578px;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #effaca;
  border-radius: 7.5px;
  cursor: pointer;
  height: 32px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GListItem = styled.li`
  background-color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  height: 32px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: start;

  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }

  &:active {
    background-color: #effaca;
  }
`;

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userPassword: "",
    userNickname: "",
    birthYear: "",
    gender: "",
    hashtags: [],
  });

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [birthdayTouched, setBirthdayTouched] = useState(false);
  const [isGenderFocused, setIsGenderFocused] = useState(false);
  const [isHashtagFocused, setIsHashtagFocused] = useState(false);

  const genderList = ["남성", "여성"];
  const hashtagList = [
    "관절뼈건강",
    "기억력개선",
    "면역기능개선",
    "운동수행능력",
    "체지방 감소",
    "피부건강",
    "혈당조절",
    "혈중 중성지방 개선",
  ];

  const genderDropDownRef = useRef();
  const hashtagDropDownRef = useRef();

  const [isOpenGender, setIsOpenGender] = useDetectClose(
    genderDropDownRef,
    false
  );
  const [isOpenHashtag, setIsOpenHashtag] = useDetectClose(
    hashtagDropDownRef,
    false
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));

    if (name === "userEmail") setEmailTouched(true);
    if (name === "userPassword") setPasswordTouched(true);
    if (name === "userNickname") setNicknameTouched(true);
    if (name === "birthYear") setBirthdayTouched(true);
  };

  const handleHashtagRemove = (hashtag) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      hashtags: userInfo.hashtags.filter((item) => item !== hashtag),
    }));
  };

  const handleHashtagClick = (hashtag) => {
    setUserInfo((userInfo) => {
      const newHashtags = [...userInfo.hashtags];
      if (newHashtags.includes(hashtag)) {
        newHashtags.splice(newHashtags.indexOf(hashtag), 1);
      } else if (newHashtags.length < 3) {
        newHashtags.push(hashtag);
      }
      return { ...userInfo, hashtags: newHashtags };
    });
  };

  const handleGenderClick = (gender) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      gender: gender,
    }));
    setIsOpenGender(false);
  };

  const isInvalidEmail =
    emailTouched &&
    (!userInfo.userEmail.includes("@") || !userInfo.userEmail.includes("."));

  const isInvalidPassword =
    passwordTouched &&
    (userInfo.userPassword.length > 8 ||
      !/[a-zA-Z]/.test(userInfo.userPassword) ||
      !/[0-9]/.test(userInfo.userPassword));

  const isInvalidNickname =
    nicknameTouched &&
    (userInfo.userNickname.length > 4 || userInfo.userNickname.length === 0);

  const isInvalidBirthday =
    birthdayTouched &&
    (userInfo.birthYear.length !== 6 || !/[0-9]/.test(userInfo.birthYear));

  const isValidEmail = !isInvalidEmail && emailTouched;
  const isValidPassword = !isInvalidPassword && passwordTouched;
  const isValidNickname = !isInvalidNickname && nicknameTouched;
  const isValidBirthday = !isInvalidBirthday && birthdayTouched;
  const isValidHashtags =
    userInfo.hashtags.length >= 1 && userInfo.hashtags.length <= 3;

  const isValid =
    isValidEmail &&
    isValidPassword &&
    isValidNickname &&
    isValidBirthday &&
    isValidHashtags;

  const navigate = useNavigate();

  const loginProcess = () => {
    fetch("/data/Login.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        userEmail: userInfo.userEmail,
        userPassword: userInfo.userPassword,
        userNickname: userInfo.userNickname,
        birthYear: userInfo.birthYear,
        gender: userInfo.gender === "여성" ? true : false,
        hashtags: userInfo.hashtags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "LOGIN SUCCESS") {
          localStorage.setItem("token", data.message);
          navigate("/medic");
        }
      });
  };

  return (
    <Container>
      <UserFrame onChange={handleInputChange}>
        <Logo>
          <LogoImage src={logo} alt="Logo" />
          <Title>MEDIC</Title>
        </Logo>

        <Email>아이디</Email>
        <UserInput2
          type="text"
          placeholder=""
          value={userInfo.userEmail}
          name="userEmail"
        />
        <ErrorMessage
          isInvalid={isInvalidEmail}
          touched={emailTouched}
          isVisible={isInvalidEmail || !emailTouched}
        >
          이메일 형식으로 입력해주세요.
        </ErrorMessage>

        <Email>비밀번호</Email>
        <UserInput2
          type="password"
          placeholder=""
          value={userInfo.userPassword}
          name="userPassword"
        />
        <ErrorMessage
          isInvalid={isInvalidPassword}
          touched={passwordTouched}
          isVisible={isInvalidPassword || !passwordTouched}
        >
          영문, 숫자 포함 8자 이내로 입력해주세요.
        </ErrorMessage>

        <Email>닉네임</Email>
        <UserInput2
          type="nickname"
          placeholder=""
          value={userInfo.userNickname}
          name="userNickname"
        />
        <ErrorMessage
          isInvalid={isInvalidNickname}
          touched={nicknameTouched}
          isVisible={isInvalidNickname || !nicknameTouched}
        >
          최대 4글자로 입력해주세요.
        </ErrorMessage>

        <Email>생년월일</Email>
        <UserInput2
          type="birthday"
          placeholder=""
          value={userInfo.birthYear}
          name="birthYear"
        />
        <ErrorMessage
          isInvalid={isInvalidBirthday}
          touched={birthdayTouched}
          isVisible={isInvalidBirthday || !birthdayTouched}
        >
          생년월일 6자리를 입력해주세요.
        </ErrorMessage>

        <Email>성별</Email>
        <HashtagContainer ref={genderDropDownRef}>
          <HashtagInput
            onFocus={() => setIsGenderFocused(true)}
            onBlur={() => setIsGenderFocused(false)}
            onClick={() => setIsOpenGender(!isOpenGender)}
            type="button"
            value={userInfo.gender || "성별"}
            readOnly
          />
          <ArrowImage src={arrow} alt="Arrow" isFocused={isGenderFocused} />
          {isOpenGender && (
            <GenderList>
              {genderList.map((value, index) => (
                <GListItem key={index} onClick={() => handleGenderClick(value)}>
                  {value}
                </GListItem>
              ))}
            </GenderList>
          )}
        </HashtagContainer>

        <Email>건강 맞춤형 해시태그</Email>
        <HashtagContainer ref={hashtagDropDownRef}>
          <HashtagInput
            onFocus={() => setIsHashtagFocused(true)}
            onBlur={() => setIsHashtagFocused(false)}
            onClick={() => setIsOpenHashtag(!isOpenHashtag)}
            type="button"
            value={"해시태그"}
            readOnly
          />
          <ArrowImage src={arrow} alt="Arrow" isFocused={isHashtagFocused} />
          {isOpenHashtag && (
            <DropDownList>
              {hashtagList.map((value, index) => (
                <ListItem key={index} onClick={() => handleHashtagClick(value)}>
                  {userInfo.hashtags.includes(value)
                    ? `${userInfo.hashtags.indexOf(value) + 1} | ${value}`
                    : value}
                </ListItem>
              ))}
            </DropDownList>
          )}
          {userInfo.hashtags.map((hashtag, index) => (
            <div key={index} style={{ display: "inline-block", margin: "4px" }}>
              <span>{`${hashtag}`}</span>
              <span
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => handleHashtagRemove(hashtag)}
              >
                X
              </span>
            </div>
          ))}
        </HashtagContainer>

        <SignUpButton
          text="가입하기"
          disabled={!isValid}
          onClick={loginProcess}
        />
      </UserFrame>
    </Container>
  );
};

export default SignUpPage;
