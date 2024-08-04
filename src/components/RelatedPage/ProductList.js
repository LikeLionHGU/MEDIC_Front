import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../../img/Baguni.png";

const Container = styled.div`
  margin-bottom: 102px;
  margin-top: 65px;
  width: 1190px;
`;

const ProductGrid = styled.div`
  width: 1169px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ProductCard = styled.div`
  text-align: center;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
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
  border-radius: 30px;
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
  margin-left: 12px;
  margin-bottom: 43px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
  margin-left: 13px;
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
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { state } = useLocation();
  const tag = state ? state.tag : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("태그로 제품을 가져옵니다:", tag);
        const response = await fetch(
          `/api/api/products?tags=${encodeURIComponent(tag)}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("가져온 제품 데이터:", data);
        setProducts(data);
      } catch (error) {
        console.error("제품을 가져오는 중 오류 발생:", error);
        setProducts([]);
      }
    };

    if (tag) {
      fetchProducts();
    }
  }, [tag]);

  return (
    <Container>
      <ProductGrid>
        {Array.isArray(products) &&
          products.map((product, index) => (
            <ProductCard
              key={product.id}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => navigate(`/Medic/InformationPage/${product.id}`)}
            >
              <ImageWrapper>
                <ProductImage
                  src={`/api/product/${product.imageUrl}`}
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
                <Original>{product.normalPrice.toLocaleString()}원</Original>
                <Discount>{product.salePrice.toLocaleString()}원</Discount>
              </Product>
              <TagContainer>
                {product.tag &&
                  product.tag
                    .split(",")
                    .map((tag, tagIndex) => (
                      <Tag key={tagIndex}>#{tag.replace(/_/g, "")}</Tag>
                    ))}
              </TagContainer>
            </ProductCard>
          ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductList;
