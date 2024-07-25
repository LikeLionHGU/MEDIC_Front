import React from "react";
import styled from "styled-components";
import img from "../../img/Rectangle 5171.png";
import product1 from "../../img/product1.png";
import product2 from "../../img/product2.png";
import product3 from "../../img/product3.png";
import cart from "../../img/cart.png";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 707px; /* 요소들 사이의 간격 조정 */
`;

const ProductContainer = styled.div`
  margin-bottom: 112px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 1300px;
`;

const ProductCard = styled.div`
  position: relative;
  width: 337px;
  height: 389px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  font-family: "KIMM_Light";
  font-size: 25px;
  padding-left: 37px;
  padding-bottom: 24px;
  box-sizing: border-box; /* 추가 */
`;

const ProductTitle = styled.div`
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  margin-bottom: 10px;
`;

const ProductFeature = styled.div``;

const Title = styled.div`
  font-family: "KIMM_Light";
  color: black;
  font-size: 22px;
  width: 1170px;
  text-align: start;
  margin-bottom: 12px;
  margin-top: 67px;
`;

const Subtitle = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  color: black;
  text-align: start;
`;

const GoContainer = styled.button`
  display: flex;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #8c8c8c;
  width: 150px;
  height: 33px;
  justify-content: center;
  border-radius: 10px;
  margin-left: 30px;
  background-color: transparent;
`;

const Img = styled.img`
  margin-left: 8px;
`;

const products = [
  {
    productId: 1,
    image: product1,
    title: "베타글루칸",
    price: "32,000원",
    feature: "기억력 개선",
  },
  {
    productId: 2,
    image: product2,
    title: "기억력플러스",
    price: "30,000원",
    feature: "집중력 향상",
  },
  {
    productId: 3,
    image: product3,
    title: "더 좋은 면역",
    price: "28,000원",
    feature: "면역력 증진",
  },
];

const BestProducts = () => {
  const navigate = useNavigate();

  const goAllProduct = () => {
    navigate("/Medic/AllProductPage");
  };

  const handleProductClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <>
      <Title>#BEST 추천 상품</Title>
      <Div>
        <Subtitle>BEST 추천 상품을 만나볼 수 있어요</Subtitle>
        <GoContainer onClick={goAllProduct}>
          전체 제품 보러가기
          <Img src={cart} alt="cart icon" />
        </GoContainer>
      </Div>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            onClick={() => handleProductClick(product.productId)}
          >
            <img src={product.image} alt={product.title} />
            <Overlay className="overlay">
              <ProductTitle>#{product.title}</ProductTitle>
              <ProductPrice>#{product.price}</ProductPrice>
              <ProductFeature>#{product.feature}</ProductFeature>
            </Overlay>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
};

export default BestProducts;
