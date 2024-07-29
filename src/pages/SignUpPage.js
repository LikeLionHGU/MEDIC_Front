import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SignUpButton from "../components/SignUpPage/SignUpButton";
import logo from "../img/Logo.png";
import UserInput2 from "../components/SignUpPage/UserInput";
import useDetectClose from "../components/SignUpPage/UseDetectClose";
import arrow from "../img/arrow.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Add some margin to the bottom */
`;
const LogoImage = styled.img`
  width: 45px;
  height: 52px;
  margin-right: 4px;
  /* margin-bottom: 39.26px; */
  margin-top: 32px;
`;
const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 50.26px;
  margin-top: 40px;
  /* margin-bottom: 34.26px; */
`;
const Email = styled.div`
  font-family: "Pretendard-Regular";
  color: ${({ isInvalid }) => (isInvalid ? "#E45D5D" : "black")};
  font-size: 14px;
  width: 570px;
  margin-bottom: 6px;
  margin-top: 13.24px;
`;

const GEmail = styled.div`
  font-family: "Pretendard-Regular";
  color: black;
  font-size: 14px;
  width: 570px;
  margin-bottom: 6px;
  margin-top: 20.24px;
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
    return isInvalid ? "#E45D5D" : "#A1A1A1";
  }};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  border: none;
  padding: 5px;
  box-sizing: border-box;
`;

const Error = styled.div`
  width: 570px;
  margin-top: 3px;
  margin-bottom: 7px;
  color: #a1a1a1;
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
  width: 579px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 579px;
`;

const HashtagInput = styled.input`
  font-family: "Pretendard-Regular";
  background-color: transparent;
  width: 570px;
  border-radius: 7.5px;
  height: 40px;
  border: 1px solid black;
  text-align: start;
  padding-left: 5px;
  margin-bottom: 5px;
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
  border: 1px solid #b2d23e;
  border-radius: 7.5px;
  background-color: white;
  z-index: 10;
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  background-color: ${({ isActive }) => (isActive ? "#effaca" : "#ececec")};
  border-radius: 7.5px;
  cursor: pointer;
  height: 32px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }
`;

const DrugInUseList = styled.ul`
  border: 1px solid #b2d23e;
  margin: 0px;
  border-radius: 7.5px;
  width: 578px;
  padding: 0;
`;
const SupplementItem = styled.li`
  background-color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  height: 37px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }
`;

const GenderList = styled.ul`
  border: 1px solid #b2d23e;
  margin: 0px;
  border-radius: 7.5px;
  width: 578px;
  height: 75px;
  padding: 0;
`;

const GListItem = styled.li`
  background-color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  height: 37px;
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

const Tag = styled.div`
  border: 1px solid #b2d23e;
  border-radius: 10px;
  padding: 8px;
  color: #b2d23e;
`;

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userPassword: "",
    userNickname: "",
    birthYear: "",
    gender: "",
    healthHashTag: [],
    drugInUse: [],
  });

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [birthdayTouched, setBirthdayTouched] = useState(false);
  const [isGenderFocused, setIsGenderFocused] = useState(false);
  const [isHashtagFocused, setIsHashtagFocused] = useState(false);

  // 이메일 중복 검사 상태
  const [emailExists, setEmailExists] = useState(false);

  const genderList = ["남성", "여성"];
  const supplementList = ["없음", "닥터 비타민D 2000IU", "밀크씨슬"];
  const hashtagList = [
    "피부건강",
    "혈당 조절",
    "기억력개선",
    "체지방 감소",
    "관절/뼈건강",
    "면역기능개선",
    "운동수행 능력",
    "혈중 중성지방 개선",
  ];

  const genderDropDownRef = useRef();
  const hashtagDropDownRef = useRef();
  const supplementDropDownRef = useRef();

  const [isOpenGender, setIsOpenGender] = useDetectClose(
    genderDropDownRef,
    false
  );
  const [isOpenHashtag, setIsOpenHashtag] = useDetectClose(
    hashtagDropDownRef,
    false
  );
  const [isOpenSupplement, setIsOpenSupplement] = useDetectClose(
    supplementDropDownRef,
    false
  );

  const handleSupplementClick = (supplement) => {
    setUserInfo((userInfo) => {
      let newdrugInUse;
      if (supplement === "없음") {
        newdrugInUse = [];
      } else {
        newdrugInUse = [...userInfo.drugInUse];
        if (newdrugInUse.includes(supplement)) {
          newdrugInUse.splice(newdrugInUse.indexOf(supplement), 1);
        } else {
          newdrugInUse.push(supplement);
        }
      }
      return { ...userInfo, drugInUse: newdrugInUse };
    });
    // setIsOpenSupplement(false); // 클릭 시 닫히는 부분을 제거
  };

  const handleSupplementInputClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setIsOpenSupplement((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        supplementDropDownRef.current &&
        !supplementDropDownRef.current.contains(event.target)
      ) {
        setIsOpenSupplement(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    if (
      isOpenSupplement &&
      supplementDropDownRef.current &&
      !supplementDropDownRef.current.contains(e.target)
    ) {
      setIsOpenSupplement(false);
    } else {
      setIsOpenSupplement(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleDropdown);
    return () => {
      document.removeEventListener("click", toggleDropdown);
    };
  }, [isOpenSupplement]);

  const checkEmailExists = async (userEmail) => {
    try {
      const response = await fetch(
        `/auth/sign-up/validation?userEmail=${userEmail}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setEmailExists(!data.success);
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));

    if (name === "userEmail") {
      setEmailTouched(true);
      checkEmailExists(value);
    }
    if (name === "userPassword") setPasswordTouched(true);
    if (name === "userNickname") setNicknameTouched(true);
    if (name === "birthYear") setBirthdayTouched(true);
  };

  const handleHashtagRemove = (hashtag) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      healthHashTag: userInfo.healthHashTag.filter((item) => item !== hashtag),
    }));
  };

  const handleHashtagClick = (hashtag) => {
    setUserInfo((userInfo) => {
      const newhealthHashTag = [...userInfo.healthHashTag];
      if (newhealthHashTag.includes(hashtag)) {
        newhealthHashTag.splice(newhealthHashTag.indexOf(hashtag), 1);
      } else if (newhealthHashTag.length < 3) {
        newhealthHashTag.push(hashtag);
      }
      return { ...userInfo, healthHashTag: newhealthHashTag };
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
    (!userInfo.userEmail.includes("@") ||
      !userInfo.userEmail.includes(".") ||
      emailExists);

  const isInvalidPassword =
    passwordTouched &&
    (userInfo.userPassword.length < 8 ||
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
  const isValidhealthHashTag =
    userInfo.healthHashTag.length >= 1 && userInfo.healthHashTag.length <= 3;

  const isValid =
    isValidEmail &&
    isValidPassword &&
    isValidNickname &&
    isValidBirthday &&
    isValidhealthHashTag;

  const navigate = useNavigate();

  const loginProcess = () => {
    fetch("/auth/sign-up", {
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
        healthHashTag: userInfo.healthHashTag,
        drugInUse: userInfo.drugInUse,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "SIGNUP SUCCESS") {
          localStorage.setItem("token", data.message);
          navigate("/medic/SignUpPage2");
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

        <Email isInvalid={isInvalidEmail}>아이디</Email>

        <UserInput2
          type="text"
          placeholder=""
          value={userInfo.userEmail}
          name="userEmail"
          isInvalid={isInvalidEmail}
        />
        <ErrorMessage
          isInvalid={isInvalidEmail}
          touched={emailTouched}
          isVisible={isInvalidEmail || !emailTouched}
        >
          {emailExists
            ? "이미 존재하는 이메일입니다."
            : "이메일 형식으로 입력해주세요."}
        </ErrorMessage>

        <Email isInvalid={isInvalidPassword}>비밀번호</Email>
        <UserInput2
          type="password"
          placeholder=""
          value={userInfo.userPassword}
          name="userPassword"
          isInvalid={isInvalidPassword}
        />

        <ErrorMessage
          isInvalid={isInvalidPassword}
          touched={passwordTouched}
          isVisible={isInvalidPassword || !passwordTouched}
        >
          영문, 숫자 포함 8자 이상 입력해주세요.
        </ErrorMessage>

        <Email isInvalid={isInvalidNickname}>닉네임</Email>
        <UserInput2
          type="nickname"
          placeholder=""
          value={userInfo.userNickname}
          name="userNickname"
          isInvalid={isInvalidNickname}
        />
        <ErrorMessage
          isInvalid={isInvalidNickname}
          touched={nicknameTouched}
          isVisible={isInvalidNickname || !nicknameTouched}
        >
          최대 4글자로 입력해주세요.
        </ErrorMessage>

        <Email isInvalid={isInvalidBirthday}>생년월일</Email>
        <UserInput2
          type="birthday"
          placeholder=""
          value={userInfo.birthYear}
          name="birthYear"
          isInvalid={isInvalidBirthday}
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
            type="text"
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

        <GEmail>건강 맞춤형 해시태그</GEmail>
        <HashtagContainer ref={hashtagDropDownRef}>
          <HashtagInput
            onFocus={() => setIsHashtagFocused(true)}
            onBlur={() => setIsHashtagFocused(false)}
            onClick={() => setIsOpenHashtag(!isOpenHashtag)}
            type="text"
            value={"해시태그"}
            readOnly
          />

          <ArrowImage src={arrow} alt="Arrow" isFocused={isHashtagFocused} />
          {isOpenHashtag && (
            <DropDownList>
              {hashtagList.map((value, index) => (
                <ListItem
                  key={index}
                  isActive={userInfo.healthHashTag.includes(value)}
                  onClick={() => handleHashtagClick(value)}
                >
                  {userInfo.healthHashTag.includes(value)
                    ? `${userInfo.healthHashTag.indexOf(value) + 1} | ${value}`
                    : value}
                </ListItem>
              ))}
            </DropDownList>
          )}
          {userInfo.healthHashTag.map((hashtag, index) => (
            <Tag
              key={index}
              style={{
                display: "inline-block",
                marginTop: "5px",
                marginRight: "14px",
              }}
            >
              <span>{hashtag}</span>
              <span
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => handleHashtagRemove(hashtag)}
              >
                X
              </span>
            </Tag>
          ))}
        </HashtagContainer>
        {userInfo.healthHashTag.length === 0 && (
          <Error>최소 1개, 최대 3개의 해시태그를 선택해주세요.</Error>
        )}
        <GEmail>복용 중인 약 혹은 건강기능식품</GEmail>
        <HashtagContainer ref={supplementDropDownRef}>
          <HashtagInput
            placeholder="없음"
            readOnly
            onClick={handleSupplementInputClick}
            value={
              userInfo.drugInUse.length > 0 ? userInfo.drugInUse.join(", ") : ""
            }
          />
          <ArrowImage src={arrow} onClick={handleSupplementInputClick} />
          {isOpenSupplement && (
            <DrugInUseList>
              {supplementList.map((supplement) => (
                <SupplementItem
                  key={supplement}
                  isActive={userInfo.drugInUse.includes(supplement)}
                  onClick={() => handleSupplementClick(supplement)}
                >
                  {supplement}
                </SupplementItem>
              ))}
            </DrugInUseList>
          )}
        </HashtagContainer>
        <TagContainer>
          {userInfo.drugInUse.map((supplement, index) => (
            <Tag
              key={index}
              onClick={() => handleSupplementClick(supplement)}
              style={{
                display: "inline-block",
                marginTop: "5px",
                marginRight: "14px",
              }}
            >
              {supplement} x
            </Tag>
          ))}
        </TagContainer>
        <SignUpButton
          onClick={() => {
            loginProcess();
          }}
          text="가입하기"
          disabled={!isValid}
        />
      </UserFrame>
    </Container>
  );
};

export default SignUpPage;
