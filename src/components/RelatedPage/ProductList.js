import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../../img/Baguni.png";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";
import img6 from "../../img/6.png";
import img7 from "../../img/7.png";
import img8 from "../../img/8.png";
import img9 from "../../img/9.png";
import img10 from "../../img/10.png";
import img11 from "../../img/11.png";
import img12 from "../../img/12.png";

const dummyProducts = [
  {
    productId: "550e8400-e29b-41d4-a716-446655440000",
    productName: "닥터에스더 면역엔 베타글루칸",
    originalPrice: 60000,
    salePrice: 32000,
    healthHashTag: "면역기능 개선",
    imageUrl: img1,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440001",
    productName: "생생기억력플러스",
    originalPrice: 50000,
    salePrice: 48000,
    healthHashTag: "기억력 개선",
    imageUrl: img2,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440002",
    productName: "더좋은 면역 베타글루칸",
    originalPrice: 40000,
    salePrice: 30000,
    healthHashTag: "면역기능 개선",
    imageUrl: img3,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440003",
    productName: "한달이면 반나바 퍼펙트케어",
    originalPrice: 30000,
    salePrice: 22000,
    healthHashTag: "간기능 개선",
    imageUrl: img4,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440004",
    productName: "반다요",
    originalPrice: 32000,
    salePrice: 21000,
    healthHashTag: "체중조절",
    imageUrl: img5,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440005",
    productName: "맥스컷 다이어트 부스터3.1",
    originalPrice: 50000,
    salePrice: 40000,
    healthHashTag: "체중조절",
    imageUrl: img6,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440006",
    productName: "콜레스테롤원 콜레스타",
    originalPrice: 50000,
    salePrice: 32000,
    healthHashTag: "간기능 개선",
    imageUrl: img7,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440007",
    productName: "오늘은 것",
    originalPrice: 42000,
    salePrice: 32000,
    healthHashTag: "체중조절",
    imageUrl: img8,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440008",
    productName: "콜레스펌",
    originalPrice: 22000,
    salePrice: 12000,
    healthHashTag: "간기능 개선",
    imageUrl: img9,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440009",
    productName: "베아제닉 혈당 밸런스",
    originalPrice: 60000,
    salePrice: 32000,
    healthHashTag: "혈당조절",
    imageUrl: img10,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440010",
    productName: "브리오 혈당 밸런스 알파",
    originalPrice: 42000,
    salePrice: 32000,
    healthHashTag: "혈당조절",
    imageUrl: img11,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440011",
    productName: "당 편한 세상",
    originalPrice: 22000,
    salePrice: 15000,
    healthHashTag: "혈당조절",
    imageUrl: img12,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440012",
    productName: "활기찬 하루",
    originalPrice: 45000,
    salePrice: 35000,
    healthHashTag: "운동 수행 능력",
    imageUrl: img3,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440013",
    productName: "피부 생기 가득",
    originalPrice: 30000,
    salePrice: 25000,
    healthHashTag: "피부 건강",
    imageUrl: img4,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440014",
    productName: "관절 튼튼",
    originalPrice: 55000,
    salePrice: 45000,
    healthHashTag: "관절/뼈 건강",
    imageUrl: img5,
  },
];

const Container = styled.div`
  margin-bottom: 102px;
  margin-top: 65px;
`;

const SectionTitle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 24px;
  margin-bottom: 20px;
  color: #3e82d2;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
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

const ProductList = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { state } = useLocation();
  const sectionTitle = state ? state.sectionTitle : null;
  const navigate = useNavigate();

  const filteredProducts = sectionTitle
    ? dummyProducts.filter((product) => product.healthHashTag === sectionTitle)
    : dummyProducts;

  const handleCardClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <Container>
      <ProductGrid>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.productId}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleCardClick(product.productId)}
          >
            <ImageWrapper>
              <ProductImage
                src={product.imageUrl}
                alt={product.productName}
                style={{
                  transform:
                    hoveredProduct === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <BaguniImage src={Baguni} alt="Baguni" />
            </ImageWrapper>
            <Product>
              <Name hover={hoveredProduct === index}>
                {product.productName}
              </Name>
              <Original>{product.originalPrice.toLocaleString()}원</Original>
              <Discount>{product.salePrice.toLocaleString()}원</Discount>
            </Product>
            <TagContainer>
              <Tag>{product.healthHashTag}</Tag>
            </TagContainer>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductList;
