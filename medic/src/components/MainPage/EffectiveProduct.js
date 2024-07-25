import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";

// 더미 데이터
const dummyUser = {
  nickname: "건강이",
};

const dummyProducts = [
  {
    productId: "1",
    name: "맥스컷 다이어트 부스터3",
    originalPrice: 59000,
    discountPrice: 40000,
    healthTags: ["#체중조절"],
    imageUrl: img1,
  },
  {
    productId: "2",
    name: "오늘은 잇",
    originalPrice: 42000,
    discountPrice: 32000,
    healthTags: ["#면역기능개선", "#기억력개선"],
    imageUrl: img2,
  },
  {
    productId: "3",
    name: "절대강자 바나바 퍼펙트케어",
    originalPrice: 32000,
    discountPrice: 22000,
    healthTags: ["#간기능개선"],
    imageUrl: img3,
  },
];

const Modal = styled.div`
  position: fixed;
  top: 130px;
  right: 62px;
  width: 177px;
  max-height: 434px;
  background-color: rgba(52, 52, 52, 0.7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Title = styled.div`
  font-family: "KIMM_Light";
  font-size: 9.34px;
  color: white;
`;

const Subtitle = styled.div`
  font-family: "KIMM_Light";
  font-size: 9.34px;
  color: white;
  margin-top: 4px;
  width: 120.5px;
`;

const User = styled.div`
  font-family: "KIMM_Light";
  font-size: 9.34px;
  color: #b2d23e;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20.82px;
  margin-right: 23px;

  &:hover {
    color: #ccc;
  }
`;

const ProductContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7.5px;
    background-color: #b2d23e;
  }

  &::-webkit-scrollbar-track {
    border-radius: 14px;
    background: none;
  }
`;

const Product = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 120.48px;
  height: 132.62px;
  border-radius: 14.01px;
`;

const ProductName = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  align-items: center;
  font-size: 8.41px;
  font-weight: 600;
  color: white;
  margin-top: 5px;
`;

const ProductDetails = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 9.34px;
  color: #8c8c8c;
  margin: 0;
  text-decoration: line-through;
`;

const ProductDiscountPrice = styled.p`
  font-family: "Pretendard-Regular";
  margin-top: 3px;
  margin-bottom: 0px;
  font-size: 10.27px;
  font-weight: bold;
  color: white;
`;

const Tag = styled.span`
  font-family: "Pretendard-Regular";
  font-weight: 600;
  display: inline-block;
  background-color: transparent;
  color: #b2d23e;
  border: 1px solid #b2d23e;
  border-radius: 4.67px;
  padding: 3px;
  margin-top: 5px;
  font-family: "Pretendard-Regular";
  font-size: 6.54px;
  margin-right: 5px;
  margin-bottom: 14px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const EffectiveProduct = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  const handleProductClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <Modal id="modal">
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <Header>
        <TitleContainer>
          <User>{dummyUser.nickname}</User>
          <Title>님이 복용중인 제품과</Title>
        </TitleContainer>
        <Subtitle>효과적인 추천 상품</Subtitle>
      </Header>
      <ProductContainer>
        {dummyProducts.map((product, index) => (
          <Product
            key={index}
            onClick={() => handleProductClick(product.productId)}
          >
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDetails>
              <ProductPrice>
                {product.originalPrice.toLocaleString()}원
              </ProductPrice>
              <ProductDiscountPrice>
                {product.discountPrice.toLocaleString()}원
              </ProductDiscountPrice>
              <TagContainer>
                {product.healthTags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagContainer>
            </ProductDetails>
          </Product>
        ))}
      </ProductContainer>
    </Modal>
  );
};

export default EffectiveProduct;