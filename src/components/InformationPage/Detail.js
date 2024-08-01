import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1170px;
  margin: auto;
  padding: 20px;
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

const Detail = ({ productId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/products/${productId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <Container>
      {data ? (
        <TableContainer>
          <Table>
            <tbody>
              <TableRow>
                <TableCell>제조사명</TableCell>
                <TableCell2>{data.manufacturer}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>제품명</TableCell>
                <TableCell2>{data.name}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>신고번호</TableCell>
                <TableCell2>{data.reportNumber}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>등록일자</TableCell>
                <TableCell2>{data.registerDate}</TableCell2>
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
                <TableCell2>{data.ingestPrecaution}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>기능성 내용</TableCell>
                <TableCell2>{data.functionallyContents || "N/A"}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>기타 원료</TableCell>
                <TableCell2>{data.otherMaterials}</TableCell2>
              </TableRow>
            </tbody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Detail;
