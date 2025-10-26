import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductDetail } from "../api/productApi";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);

  async function fetchDetail() {
    try {
      const data = await getProductDetail(type, Number(id));
      console.log("BASE =", import.meta.env.VITE_API_BASE_URL);
      setItem(data);
    } catch (error) {
      console.error("상품 상세 조회 실패:", error);
    }
  }

  useEffect(() => {
    fetchDetail();
  }, [type, id]);

  if (!item) return <p>불러오는 중...</p>;

  return (
    <Wrapper>
      <Image src={item.image} alt={item.name} />
      <Info>
        <h2>{item.name}</h2>
        <p>색상: {item.color}</p>
        <p>사이즈: {item.size}</p>
        <p>성별: {item.gender}</p>
        <p>가격 : {item.price.toLocaleString()}원</p>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
