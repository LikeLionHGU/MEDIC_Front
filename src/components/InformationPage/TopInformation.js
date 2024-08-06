import React, { useEffect, useState } from "react";
import styled from "styled-components";
import warning from "../../img/warning.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 71px;
  width: 1169.999px;
  margin-bottom: 66.27px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Line = styled.hr`
  border: none;
  border-top: 4px solid #b2d23e;
  width: 566px;
  margin-bottom: 37px;
`;

const ProductImg = styled.img`
  border-radius: 10px;
  width: 499px;
  height: 527.727px;
  margin-right: 100px;
`;

const ProductDetails = styled.div``;

const Div = styled.div`
  display: flex;
  width: 566px;
  justify-content: center;
`;

const BuyBtn = styled.button`
  border-radius: 10px;
  width: 270px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  border: 1px solid #b2d23e;
  color: white;
  background: #b2d23e;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  font-family: "Pretendard-Regular";
  &:hover {
    border: 1px solid #99b82c;
    background: #99b82c;
  }
`;

const Quantity = styled.div`
  margin-top: 7px;
  border-top: 0.4px solid black;
  border-bottom: 0.4px solid black;
  height: 95px;
  display: flex;
  width: 570px;
  justify-content: space-between;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-style: normal;
  font-family: "Pretendard-Regular";
  font-weight: 300;
  line-height: 200%;
  margin-top: 15px;
`;

const FixedData = styled.div`
  width: 300px;
`;

const FluidData = styled.div`
  width: 266px;
`;

const Name = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 700;
  height: 40px;
  margin-bottom: 5.14px;
`;

const Name2 = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 700;
  color: #8c8c8c;
  height: 40px;
  margin-bottom: 5.14px;
`;

const Name3 = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: rgba(228, 93, 93, 1);
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const WarningIcon = styled.img`
  margin-right: 2px;
`;

const Fluid = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  margin-bottom: 5.14px;
  display: flex;
`;

const Fluid2 = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  color: #8c8c8c;
  margin-bottom: 5.14px;
  text-decoration: line-through;
`;

const Tag = styled.div`
  border-radius: 10px;
  border: 1px solid #b2d23e;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 600;
  color: #b2d23e;
  display: flex;
  height: 33px;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
  align-items: center;
`;

const TotalPrice = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  font-family: "Pretendard-Regular";
  display: flex;
  max-width: 150px;
`;

const Quantity2 = styled.div`
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-left: 3px;
`;

const QuantityControl = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;
  line-height: 200%;
  width: 299px;
`;

const QuantityInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 130px;
  width: 100px;
`;

const QuantityInput = styled.input`
  border-radius: 4px;
  width: 46px;
  height: 28px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: "Pretendard-Regular";
  padding-right: 20px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const QuantityArrows = styled.div`
  display: flex;
  position: absolute;
  right: 32px;
  top: 2.2px;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid #ccc;
  height: 29px;
  width: 19px;
`;

const ArrowButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-right: 179px;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid #ccc;
  }

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const ArrowUp = styled(ArrowButton)`
  &::before {
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #000 transparent;
  }
`;

const ArrowDown = styled(ArrowButton)`
  &::before {
    border-width: 4px 4px 0 4px;
    border-color: #000 transparent transparent transparent;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  width: 100%;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 500;
  justify-content: space-evenly;
`;

const TopInformation = ({ productId }) => {
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/api/api/products/${productId}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const totalPrice = productData ? productData.salePrice * quantity : 0;

  const handleBuyClick = () => {
    alert("구매가 완료되었습니다!");
  };

  const handleGiftClick = () => {
    alert("선물하기가 완료되었습니다!");
  };

  return (
    <Container>
      {productData ? (
        <>
          <Content>
            <ProductImg
              src={`/api/product/${productData.imageUrl}`}
              alt={productData.name}
            />
            <ProductDetails>
              <Line />
              <Div>
                <FixedData>
                  <Name>제품명</Name>
                  <Name>제조사명</Name>
                  <Name2>정상가</Name2>
                  <Name>판매가</Name>
                  <Name>건강 해시태그</Name>
                  <Name3>
                    <WarningIcon src={warning} alt="Warning" />
                    수량을 선택해주세요.
                  </Name3>
                </FixedData>
                <FluidData>
                  <Fluid>{productData.name}</Fluid>
                  <Fluid>{productData.manufacturer}</Fluid>
                  <Fluid2>{productData.normalPrice.toLocaleString()}원</Fluid2>
                  <Fluid style={{ marginBottom: "5.14px", height: "33px" }}>
                    {productData.salePrice.toLocaleString()}원
                  </Fluid>
                  <Fluid>
                    {productData.tag.split(",").map((tag, index) => (
                      <Tag key={index} style={{ marginRight: "5px" }}>
                        #{tag.replace(/_/g, "")}
                      </Tag>
                    ))}
                  </Fluid>
                </FluidData>
              </Div>
              <Quantity>
                <ProductName>{productData.name}</ProductName>
                <QuantityControl>
                  <QuantityInputWrapper>
                    <QuantityInput
                      type="number"
                      value={quantity}
                      onChange={handleChange}
                      min="1"
                    />
                    <QuantityArrows>
                      <ArrowUp onClick={handleIncrease} />
                      <ArrowDown onClick={handleDecrease} />
                    </QuantityArrows>
                  </QuantityInputWrapper>
                  <TotalPrice>{totalPrice.toLocaleString()}</TotalPrice>
                </QuantityControl>
              </Quantity>
              <TotalAmount>
                <ProductName style={{ marginLeft: "323px" }}>
                  총 상품 금액 (수량):
                </ProductName>
                <TotalPrice style={{ marginTop: "22px" }}>
                  {totalPrice.toLocaleString()}
                  <Quantity2>({quantity}개)</Quantity2>
                </TotalPrice>
              </TotalAmount>
              <Div>
                <BuyBtn
                  style={{ marginRight: "10px" }}
                  onClick={handleBuyClick}
                >
                  구매하기
                </BuyBtn>
                <BuyBtn onClick={handleGiftClick}>선물하기</BuyBtn>
              </Div>
            </ProductDetails>
          </Content>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default TopInformation;
