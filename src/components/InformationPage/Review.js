import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import star from "../../img/star.svg";
import good from "../../img/good.svg";

const Container = styled.div`
  width: 1170px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
  border-bottom: 3px solid #8c8c8c;
`;

const Title2 = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
`;

const Header = styled.div`
  align-items: center;
  padding: 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  margin-top: 22px;
`;

const Star = styled.img`
  margin-right: 5px;
  width: 35px;
  height: 35px;
`;

const Star2 = styled.img`
  margin-right: 1px;
  width: 20px;
  height: 20px;
`;

const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterButton = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 12px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.active ? "#b2d23e" : "#8c8c8c")};
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 29px;

  &:hover {
    border: 1px solid #b2d23e;
  }
`;

const Age = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 19.5px;
  margin-left: 48px;
`;

const FilterDropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 318px;
  height: 188px;
  background: white;
  border: 1px solid #b2d23e;
  border-radius: 7.5px;
  z-index: 1000;
`;

const FilterOptionRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 14px;
`;

const FilterOption = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 7.5px 9px;
  height: 14px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#effaca" : "#ececec")};
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: #effaca;
  }
  margin: 0 5px;
`;

const CompleteButton = styled.button`
  display: flex;
  justify-content: center;
  width: 245px;
  padding: 7.5px 9px;
  margin-left: 37px;
  margin-top: 14px;
  align-items: center;
  gap: 7.5px;
  border-radius: 7.5px;
  background: var(--Primary, #b2d23e);
  border: none;
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "Pretendard-Regular";
`;

const ReviewList = styled.div`
  margin-top: 20px;
`;

const Div = styled.div`
  display: flex;
`;

const ReviewItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  display: flex;
`;

const ReviewerInfo = styled.div`
  flex: 0.8;
  display: flex;
  font-family: "Pretendard-Regular";
  flex-direction: column;
  justify-content: center;
`;

const ReviewerDetail = styled.div`
  font-family: "Pretendard-Regular";
  margin-bottom: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  margin-bottom: 12px;
`;

const ReviewerDetail2 = styled.div`
  font-family: "Pretendard-Regular";
  margin-right: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewContent = styled.div`
  flex: 3;
  margin-right: 20px;
  line-height: 1.5;
  border-left: 1px solid #8c8c8c;
  border-right: 1px solid #8c8c8c;
  padding-left: 30px;
  height: 238px;
`;

const LikeButton = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LikeIcon = styled.img``;

const StarRating = styled.div`
  display: flex;
`;

// 닉네임을 세 번째 글자부터 *로 마스킹하는 함수
const maskNickname = (nickname) => {
  if (nickname.length < 3) return nickname;
  return nickname.substring(0, 2) + "*".repeat(nickname.length - 2);
};

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [appliedAgeGroup, setAppliedAgeGroup] = useState(null);
  const [sortByLikes, setSortByLikes] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    // Fetch reviews from API
    // const fetchReviews = async () => {
    //   try {
    //     const response = await axios.get(
    //       `/products/detail/${productId}/reviews`
    //     );
    //     setReviews(response.data.filteredReviews);
    //   } catch (error) {
    //     console.error("Error fetching reviews:", error);
    //   }
    // };
    // fetchReviews();

    // Using dummy data for now
    setReviews([
      {
        nickname: "건강한삶",
        gender: "여성",
        ageGroup: 30,
        rating: 5,
        reviewContent: "정말 효과가 좋아요!",
        purchaseDate: "2023-01-10",
        reviewDate: "2023-01-15",
        likes: 15,
      },
      {
        nickname: "활기찬청춘",
        gender: "남성",
        ageGroup: 40,
        rating: 4,
        reviewContent: "약간의 효과는 있는 것 같아요.",
        purchaseDate: "2023-02-05",
        reviewDate: "2023-02-10",
        likes: 8,
      },
      {
        nickname: "리얼핵",
        gender: "여성",
        ageGroup: 60,
        rating: 3,
        reviewContent: "아직은 잘 모르겠어요.",
        purchaseDate: "2023-03-12",
        reviewDate: "2023-03-20",
        likes: 5,
      },
      {
        nickname: "운동매니아",
        gender: "남성",
        ageGroup: 20,
        rating: 4,
        reviewContent: "운동 후에 먹으면 좋습니다.",
        purchaseDate: "2023-04-01",
        reviewDate: "2023-04-07",
        likes: 10,
      },
      {
        nickname: "건강챙기기",
        gender: "여성",
        ageGroup: 50,
        rating: 5,
        reviewContent: "꾸준히 먹어야 효과를 볼 수 있는 것 같아요.",
        purchaseDate: "2023-05-18",
        reviewDate: "2023-05-25",
        likes: 20,
      },
    ]);
  }, [productId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
    setActiveButton("filter");
  };

  const sortReviewsByLikes = () => {
    if (sortByLikes) {
      setSortByLikes(false);
      setActiveButton(null);
    } else {
      setSortByLikes(true);
      setActiveButton("likes");
    }
  };

  const selectAgeGroup = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
  };

  const applyFilter = () => {
    setAppliedAgeGroup(selectedAgeGroup);
    setFilterOpen(false);
    setActiveButton(null);
  };

  const filteredReviews = reviews.filter((review) => {
    if (appliedAgeGroup && appliedAgeGroup !== "전체") {
      return review.ageGroup === appliedAgeGroup;
    }
    return true;
  });

  const sortedReviews = sortByLikes
    ? [...filteredReviews].sort((a, b) => b.likes - a.likes)
    : filteredReviews;

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Container>
      <Title>REVIEW ({reviews.length})</Title>
      <Header>
        <Rating>
          <Star src={star} alt="star" />
          <Title2>{averageRating.toFixed(1)}</Title2>
        </Rating>

        <FilterButton
          active={activeButton === "likes"}
          onClick={sortReviewsByLikes}
        >
          추천 많은 순
        </FilterButton>
        <FilterContainer>
          <FilterButton
            active={activeButton === "filter"}
            onClick={toggleFilter}
          >
            연령대
          </FilterButton>
          {filterOpen && (
            <FilterDropdown ref={filterDropdownRef}>
              <Age>연령대</Age>
              <FilterOptionRow>
                <FilterOption
                  isActive={selectedAgeGroup === "전체"}
                  onClick={() => selectAgeGroup("전체")}
                >
                  전체
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 10}
                  onClick={() => selectAgeGroup(10)}
                >
                  10대 이하
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 20}
                  onClick={() => selectAgeGroup(20)}
                >
                  20대
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 30}
                  onClick={() => selectAgeGroup(30)}
                >
                  30대
                </FilterOption>
              </FilterOptionRow>
              <FilterOptionRow>
                <FilterOption
                  isActive={selectedAgeGroup === 40}
                  onClick={() => selectAgeGroup(40)}
                >
                  40대
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 50}
                  onClick={() => selectAgeGroup(50)}
                >
                  50대
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 60}
                  onClick={() => selectAgeGroup(60)}
                >
                  60대
                </FilterOption>
                <FilterOption
                  isActive={selectedAgeGroup === 70}
                  onClick={() => selectAgeGroup(70)}
                >
                  70대 이상
                </FilterOption>
              </FilterOptionRow>
              <CompleteButton onClick={applyFilter}>완료</CompleteButton>
            </FilterDropdown>
          )}
        </FilterContainer>
      </Header>
      {sortedReviews.map((review, index) => (
        <ReviewList key={index}>
          <ReviewItem>
            <ReviewerInfo>
              <ReviewerDetail>
                {maskNickname(review.nickname)}
                <ReviewerDetail2>님</ReviewerDetail2>
              </ReviewerDetail>
              <ReviewerDetail>
                성별 |&nbsp;<ReviewerDetail2>{review.gender}</ReviewerDetail2>
              </ReviewerDetail>
              <ReviewerDetail>
                연령대 |&nbsp;
                <ReviewerDetail2>{review.ageGroup}대</ReviewerDetail2>
              </ReviewerDetail>
              <ReviewerDetail>
                별점 |&nbsp;
                <StarRating>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star2 key={i} src={star} alt="star" />
                  ))}
                </StarRating>
              </ReviewerDetail>
            </ReviewerInfo>
            <ReviewContent>
              <ReviewerDetail style={{ marginBottom: "31.87px" }}>
                제품명 | {review.productName}
              </ReviewerDetail>
              <ReviewerDetail2 style={{ marginBottom: "78.13px" }}>
                {review.reviewContent}
              </ReviewerDetail2>
              <Div>
                <ReviewerDetail>
                  제품 구매일 |&nbsp;
                  <ReviewerDetail2 style={{ marginRight: "56px" }}>
                    {review.purchaseDate}
                  </ReviewerDetail2>
                </ReviewerDetail>
                <ReviewerDetail>
                  후기 작성일 |&nbsp;
                  <ReviewerDetail2>{review.reviewDate}</ReviewerDetail2>
                </ReviewerDetail>
              </Div>
            </ReviewContent>
            <LikeButton>
              <LikeIcon src={good}></LikeIcon>
              {review.likes}
            </LikeButton>
          </ReviewItem>
        </ReviewList>
      ))}
    </Container>
  );
};

export default Review;
