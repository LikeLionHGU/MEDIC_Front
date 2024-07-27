import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../../img/1.png";
import warning from "../../img/warning.png";

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
`;

const dummyProductData = {
  productId: "550e8400-e29b-41d4-a716-446655440000",
  manufacturingCompany: "콜마비앤에이치(주)음성공장",
  name: "관절엔 콘드로이친 1200",
  originalPrice: 297000,
  salePrice: 171520,
  healthTags: ["관절/뼈건강"],
  reportNumber: "200600200031905",
  registrationDate: "20201203",
  expirationDate: "제조일로부터 2년",
  intakeAmount: "1일 1회, 1회 2정을 물과 함께 섭취하십시오.",
  intakeMethod: "1일 1회, 1회 2정을 물과 함께 섭취하십시오.",
  precautions: [
    "특이체질, 알레르기 체질의 경우에는 간혹 개인에 따라 과민반응을 나타낼 수 있으므로 원료를 확인한 후 섭취하십시오.",
    "유통기한이 경과된 제품은 섭취하지 마십시오.",
    "영·유아, 어린이, 임산부 및 수유부는 섭취에 주의할 것",
    "이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것",
    "특정질환(알레르기 체질 등)이 있는 분은 섭취에 주의할 것",
    "수술 전후 또는 항응고제, 항혈소판제, 비스테로이드계 항염증약 복용자는 섭취 전 전문의와 상담할 것",
    "천식이 있는 사람은 섭취 전 전문의와 상담할 것",
  ],
  functionalContent: "비타민 C 함유",
  otherIngredients: [
    "해조칼슘",
    "쌀겨추출분말",
    "유산균혼합분말",
    "건조효모(비타민D)",
    "건조효모(아연함유)",
    "건조효모(셀렌함유)",
  ],
};

const TopInformation = ({ productId }) => {
  const [productData, setProductData] = useState(dummyProductData);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/products/detail/${productId}`);
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

  const totalPrice = productData.salePrice * quantity;

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
            <ProductImg src={img1} alt={productData.name} />
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
                  <Fluid>{productData.manufacturingCompany}</Fluid>
                  <Fluid2>
                    {productData.originalPrice.toLocaleString()}원
                  </Fluid2>
                  <Fluid style={{ marginBottom: "5.14px", height: "33px" }}>
                    {productData.salePrice.toLocaleString()}원
                  </Fluid>
                  <Fluid>
                    {productData.healthTags.map((tag, index) => (
                      <Tag key={index} style={{ marginRight: "5px" }}>
                        {tag}
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
                <TotalPrice style={{ marginTop: "22px", marginLeft: "4px" }}>
                  {totalPrice.toLocaleString()}원
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
