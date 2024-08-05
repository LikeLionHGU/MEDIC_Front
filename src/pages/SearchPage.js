import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../img/Baguni.png";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img12 from "../img/12.png";
import img13 from "../img/13.png";
import img14 from "../img/14.png";
import img15 from "../img/15.png";
import img16 from "../img/16.png";
import img17 from "../img/17.png";
import img18 from "../img/18.png";
import img19 from "../img/19.png";
import img20 from "../img/20.png";
import img21 from "../img/21.png";
import img22 from "../img/22.png";
import img23 from "../img/23.png";

import Header from "../components/MainPage/Header";

const dummyProducts = [
  {
    productId: "1",
    name: "관절스타",
    manufacturer: "네이처스헬스",
    originalPrice: 45700,
    discountPrice: 45600,
    healthTags: ["#관절뼈건강"],
    reviewCount: 0,
    imageUrl: img1,
  },
  {
    productId: "2",
    name: "관절엔 까마귀쪽",
    manufacturer: "뉴트리라이프",
    originalPrice: 33600,
    discountPrice: 31500,
    healthTags: ["#관절뼈건강"],
    reviewCount: 0,
    imageUrl: img2,
  },
  {
    productId: "3",
    name: "뼈엔 엠비피MBP",
    manufacturer: "에코헬스코리아",
    originalPrice: 25000,
    discountPrice: 23300,
    healthTags: ["#관절뼈건강"],
    reviewCount: 0,
    imageUrl: img3,
  },
  {
    productId: "4",
    name: "젬무브 생생 기억력 플러스",
    manufacturer: "헬스포유",
    originalPrice: 33000,
    discountPrice: 27000,
    healthTags: ["#기억력개선"],
    reviewCount: 0,
    imageUrl: img4,
  },
  {
    productId: "5",
    name: "기억력홍삼",
    manufacturer: "뉴트리헬스",
    originalPrice: 53900,
    discountPrice: 23000,
    healthTags: ["#기억력개선"],
    reviewCount: 0,
    imageUrl: img5,
  },
  {
    productId: "6",
    name: "10대를 위한 기억력 업(UP) 홍삼",
    manufacturer: "헬스어드밴스",
    originalPrice: 43900,
    discountPrice: 33000,
    healthTags: ["#기억력개선"],
    reviewCount: 0,
    imageUrl: img6,
  },
  {
    productId: "7",
    name: "밸런스업 자몽맛",
    manufacturer: "네이처프로텍트",
    originalPrice: 50700,
    discountPrice: 41200,
    healthTags: ["#혈당조절"],
    reviewCount: 0,
    imageUrl: img7,
  },
  {
    productId: "8",
    name: "베어헬스 혈당 밸런스",
    manufacturer: "엘리트헬스",
    originalPrice: 32700,
    discountPrice: 29900,
    healthTags: ["#혈당조절"],
    reviewCount: 0,
    imageUrl: img8,
  },
  {
    productId: "9",
    name: "콜레스테롤엔 콜레스타",
    manufacturer: "더헬스컴퍼니",
    originalPrice: 33700,
    discountPrice: 29900,
    healthTags: ["#혈당조절"],
    reviewCount: 0,
    imageUrl: img9,
  },
  {
    productId: "10",
    name: "다비이컷 다이어트 보조제",
    manufacturer: "바이오웰니스",
    originalPrice: 126000,
    discountPrice: 64500,
    healthTags: ["#체지방감소"],
    reviewCount: 0,
    imageUrl: img10,
  },
  {
    productId: "11",
    name: "레몬 버베나 다이어트",
    manufacturer: "웰니스 헬스케어",
    originalPrice: 67800,
    discountPrice: 51000,
    healthTags: ["#체지방감소"],
    reviewCount: 0,
    imageUrl: img11,
  },
  {
    productId: "12",
    name: "베러다운핏",
    manufacturer: "(주)알피바이오",
    originalPrice: 50000,
    discountPrice: 19800,
    healthTags: ["#체지방감소"],
    reviewCount: 0,
    imageUrl: img12,
  },
  {
    productId: "13",
    name: "에버비타민 이너부스터샷",
    manufacturer: "그린바이오솔루션",
    originalPrice: 62800,
    discountPrice: 45800,
    healthTags: ["#피부건강"],
    reviewCount: 0,
    imageUrl: img13,
  },
  {
    productId: "14",
    name: "뷰티스틱 히알루C",
    manufacturer: "헬스엔라이프",
    originalPrice: 47500,
    discountPrice: 34500,
    healthTags: ["#피부건강"],
    reviewCount: 0,
    imageUrl: img14,
  },
  {
    productId: "15",
    name: "올인원 우먼팩",
    manufacturer: "헬스테크놀로지스",
    originalPrice: 49500,
    discountPrice: 32700,
    healthTags: ["#피부건강"],
    reviewCount: 0,
    imageUrl: img15,
  },
  {
    productId: "16",
    name: "익스트림 김종국 올인원 패키지",
    manufacturer: "헬스파라다이스",
    originalPrice: 51700,
    discountPrice: 50660,
    healthTags: ["#운동수행능력"],
    reviewCount: 0,
    imageUrl: img16,
  },
  {
    productId: "17",
    name: "헬시오리진스 내추럴 유비퀴놀",
    manufacturer: "헬스솔루션즈",
    originalPrice: 127330,
    discountPrice: 91670,
    healthTags: ["#운동수행능력"],
    reviewCount: 0,
    imageUrl: img17,
  },
  {
    productId: "18",
    name: "뉴트리원 루테인 지아잔틴",
    manufacturer: "바이오에디션",
    originalPrice: 42900,
    discountPrice: 42470,
    healthTags: ["#운동수행능력"],
    reviewCount: 0,
    imageUrl: img18,
  },
  {
    productId: "19",
    name: "제일 면역엔 베타글루칸",
    manufacturer: "뉴트라웰",
    originalPrice: 55600,
    discountPrice: 33700,
    healthTags: ["#면역기능개선"],
    reviewCount: 0,
    imageUrl: img19,
  },
  {
    productId: "20",
    name: "닥터에스더 면역엔 베타글루칸",
    manufacturer: "에코헬스케어",
    originalPrice: 60000,
    discountPrice: 32000,
    healthTags: ["#면역기능개선"],
    reviewCount: 0,
    imageUrl: img20,
  },
  {
    productId: "21",
    name: "센트룸 프로바이오 면역케어",
    manufacturer: "콜마비앤에이치(주)음성공장",
    originalPrice: 31900,
    discountPrice: 30300,
    healthTags: ["#면역기능개선"],
    reviewCount: 0,
    imageUrl: img21,
  },
  {
    productId: "22",
    name: "콜레스타 LDL HDL",
    manufacturer: "바이오헬스 연구소",
    originalPrice: 214500,
    discountPrice: 141000,
    healthTags: ["#혈중중성지방개선"],
    reviewCount: 0,
    imageUrl: img22,
  },
  {
    productId: "23",
    name: "헬퓨 E데이펙",
    manufacturer: "헬퓨 헬스케어",
    originalPrice: 67500,
    discountPrice: 54000,
    healthTags: ["#혈중중성지방개선"],
    reviewCount: 0,
    imageUrl: img23,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  margin-bottom: 80px;
`;

const ProductCard = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const ButtonContatiner = styled.div`
  width: 1235px;
`;
const Button1 = styled.button`
  margin-top: 96px;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  border-right: 1px solid black;
  background-color: transparent;
  color: #8c8c8c;
  margin-left: 10px;

  &:focus {
    color: black;
  }

  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  border-right: 1px solid black;
  background-color: transparent;
  color: #8c8c8c;

  &:focus {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const Button2 = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  background-color: transparent;
  color: #8c8c8c;
  &:focus {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 30px;
  transition: border-radius 0.3s ease-in-out;

  &:hover {
    border-radius: 30px;
  }
`;

const ProductImage = styled.img`
  height: auto;
  width: 269px;
  height: 284px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const BaguniImage = styled.img`
  position: absolute;
  bottom: 17px;
  right: 17px;
  width: 30px;
  height: 30px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: transparent;
  color: #b2d23e;
  border: 1.3px solid #b2d23e;
  border-radius: 10px;
  padding: 5px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  margin-right: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
`;

const Name = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  padding-bottom: 2px;
  padding-top: 10px;
  color: ${(props) => (props.hover ? "#3e82d2" : "inherit")};
`;

const Original = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  text-decoration: line-through;
  color: #8c8c8c;
  padding-bottom: 2px;
`;

const Discount = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const SearchPage = ({ searchOption, onSearchOptionChange }) => {
  const [products, setProducts] = useState(dummyProducts);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilter = (criteria) => {
    let sortedProducts = [...products];

    switch (criteria) {
      case "review":
        sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "highPrice":
        sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "lowPrice":
        sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  const handleCardClick = (productId) => {
    navigate(`/Medic/SearchInformationPage/${productId}`);
  };

  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  const searchQuery = getQueryParams().get("query") || "";

  const filteredProducts = products.filter((product) => {
    if (searchOption === "제품") {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchOption === "기능") {
      return product.healthTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return false;
  });

  return (
    <>
      <Header onSearchOptionChange={onSearchOptionChange} />
      <ButtonContatiner>
        <Button1 onClick={() => handleFilter("review")}>리뷰 많은순</Button1>
        <Button onClick={() => handleFilter("highPrice")}>가격 높은순</Button>
        <Button2 onClick={() => handleFilter("lowPrice")}>가격 낮은순</Button2>
      </ButtonContatiner>
      <Container>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleCardClick(product.productId)}
          >
            <ImageWrapper>
              <ProductImage
                src={product.imageUrl}
                alt={product.name}
                style={{
                  transform:
                    hoveredProduct === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <BaguniImage src={Baguni} alt="Baguni" />
            </ImageWrapper>
            <Product>
              <Name hover={hoveredProduct === index}>{product.name}</Name>
              <Original>
                {product.originalPrice
                  ? product.originalPrice.toLocaleString()
                  : "N/A"}
                원
              </Original>
              <Discount>
                {product.discountPrice
                  ? product.discountPrice.toLocaleString()
                  : "N/A"}
                원
              </Discount>
            </Product>
            <TagContainer>
              {product.healthTags &&
                product.healthTags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
            </TagContainer>
          </ProductCard>
        ))}
      </Container>
    </>
  );
};

export default SearchPage;
