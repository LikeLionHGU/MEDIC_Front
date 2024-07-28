import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../img/Frame 15537.svg";
import mark from "../../img/Frame 15533.svg";
import search from "../../img/search.svg";
import img2 from "../../img/Frame 15538.svg";
import Modal2 from "./Modal2";

const Img1 = styled.img`
  width: 1169.999px;
  margin-bottom: 59px;
  height: 63px;
`;

const Mark = styled.img`
  width: 569.76px;
  height: auto;
  margin-bottom: 62px;
`;

const Pharmacist = styled.button`
  display: inline-flex;
  height: 33px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid #616625;
  background-color: transparent;
  margin-bottom: 40px;
  color: #616625;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const SearchIcon = styled.img``;

const ProductDetailContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 63px;
`;

const Img2 = styled.img`
  width: 1170px;
  height: 63px;
`;

const ProductDetailText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  color: white;
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const TableContainer = styled.div`
  width: 1170px;
  overflow: hidden;
  margin-bottom: 186px;
`;

const Table = styled.table`
  width: 1170px;
  border-collapse: collapse;
  font-family: "Pretendard-Regular";
`;

const TableRow = styled.tr`
  border-bottom: 0.4px solid black;
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: center;
  color: #616625;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  &:first-child {
    font-weight: bold;
    border-right: 0.4px solid black;
    width: 30%;
  }
`;

const TableCell2 = styled.td`
  padding: 15px;
  text-align: left;
  color: black;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  white-space: pre-line;
  &:first-child {
    font-weight: bold;
    border-right: 0.4px solid black;
    width: 30%;
  }
`;

const Detail = () => {
  const [data] = useState({
    manufacturerName: "콜마비앤에이치(주)음성공장",
    productName: "관절엔 콘드로이친 1200",
    reportNumber: "200600200031905",
    registrationDate: "20201203",
    expirationDate: "제조일로부터 2년",
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
  });
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await fetch(`/products/detail/${productId}`);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching product data:", error);
  //     }
  //   };

  //   fetchProductData();
  // }, [productId]);

  const handlePharmacistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Img1 src={img1} alt="Detail Image" />
      <Mark src={mark} alt="Mark" />
      <Pharmacist onClick={handlePharmacistClick}>
        약사 소견 보러가기
        <SearchIcon src={search} alt="search" />
      </Pharmacist>
      <ProductDetailContainer>
        <Img2 src={img2} alt="Detail Image" />
        <ProductDetailText>제품 상세정보</ProductDetailText>
      </ProductDetailContainer>
      <TableContainer>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>제조사명</TableCell>
              <TableCell2>{data.manufacturerName}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>제품명</TableCell>
              <TableCell2>{data.productName}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>신고번호</TableCell>
              <TableCell2>{data.reportNumber}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>등록일자</TableCell>
              <TableCell2>{data.registrationDate}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>유통기한</TableCell>
              <TableCell2>{data.expirationDate}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>섭취량/섭취 방법</TableCell>
              <TableCell2>{data.intakeMethod}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>섭취 시 주의사항</TableCell>
              <TableCell2>
                {data.precautions.map((precaution, index) => (
                  <div key={index}>{precaution}</div>
                ))}
              </TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>기능성 내용</TableCell>
              <TableCell2>{data.functionalContent}</TableCell2>
            </TableRow>
            <TableRow>
              <TableCell>기타 원료</TableCell>
              <TableCell2>
                {data.otherIngredients.map((ingredient, index) => (
                  <div key={index}>{ingredient}</div>
                ))}
              </TableCell2>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
      {showModal && <Modal2 onClose={handleCloseModal} />}
    </>
  );
};

export default Detail;
