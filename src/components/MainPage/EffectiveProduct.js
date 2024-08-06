import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = styled.div`
  position: fixed;
  top: 100px;
  right: 62px;
  width: 198px;
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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 14px;
  width: 100%;
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-family: "KIMM_Light";
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: white;
  word-wrap: break-word;
  text-align: left;
  padding: 0px 23px;
`;

const User = styled.span`
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
  width: 151.711px;
  height: 151.711px;
  border-radius: 14.01px;
`;

const ProductName = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  align-items: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  font-size: 11px;
  font-style: normal;
  line-height: normal;
  font-weight: 600;
  color: #8c8c8c;
  margin: 0;
  text-decoration: line-through;
`;

const ProductDiscountPrice = styled.p`
  font-family: "Pretendard-Regular";
  margin-top: 3px;
  margin-bottom: 0px;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
`;

const Tag = styled.span`
  font-family: "Pretendard-Regular";
  display: inline-block;
  background-color: transparent;
  color: #b2d23e;
  border: 1px solid #b2d23e;
  border-radius: 6.48px;
  padding: 5.696px 8.545px;
  margin-top: 5px;
  font-family: "Pretendard-Regular";
  font-size: 9.968px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const EffectiveProduct = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/api/products/recommend`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response Data: ", data);
        setUserName(data.userName);
        setRecommendedProducts(data.recommendedProducts);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  const handleProductClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <Modal id="modal">
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <Header>
        <TitleContainer>
          <Title>
            <User>{userName}</User>님이 복용중인 제품과 효과적인 추천 상품
          </Title>
        </TitleContainer>
      </Header>
      <ProductContainer>
        {recommendedProducts.map((product, index) => (
          <Product key={index} onClick={() => handleProductClick(product.id)}>
            <ProductImage
              src={`api/product/${product.imageUrl}`}
              alt={product.name}
            />
            <ProductName>{product.name}</ProductName>
            <ProductDetails>
              <ProductPrice>
                {product.normalPrice.toLocaleString()}원
              </ProductPrice>
              <ProductDiscountPrice>
                {product.salePrice.toLocaleString()}원
              </ProductDiscountPrice>
              <TagContainer>
                {product.tag.split(",").map((tag, tagIndex) => (
                  <Tag key={tagIndex}>#{tag.replace(/_/g, "")}</Tag>
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
