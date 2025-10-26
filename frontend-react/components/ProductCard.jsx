import { useNavigate } from "react-router";
import styled from "styled-components";

export default function ProductCard({ id, name, price, image, subtype, type }) {
  const nav = useNavigate();
  return (
    <Card onClick={() => nav(`/${type}/${id}`)}>
      <ProductImage src={image} alt={name} />

      {subtype && <Subtype>{subtype}</Subtype>}
      <ProductName>{name}</ProductName>
      <ProductPrice>{price?.toLocaleString()}원</ProductPrice>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  width: 240px;
  margin: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const Subtype = styled.p`
  margin: 8px 0 2px;
  font-size: 0.9rem;
  color: #666;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0 5px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
