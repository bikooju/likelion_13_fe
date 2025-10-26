import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productApi";

export default function Home() {
  const [itemType, setItemType] = useState("shoes");
  const [sort, setSort] = useState("asc");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchList() {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts({
        type: itemType,
        sort: "latest",
      });
      setItems(data.slice(0, 10)); // TOp10 유지
    } catch (error) {
      console.error("상품 목록 조회 실패:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, [itemType]);

  // 가격순 정렬
  const sorted = useMemo(() => {
    const copy = [...items];
    copy.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
    return copy;
  }, [sort, items]);

  return (
    <Wrapper>
      <Top>
        <Title>Top 10</Title>
        <Label>
          상품 유형
          <Select
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="shoes">신발</option>
            <option value="clothes">의류</option>
          </Select>
        </Label>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">낮은 가격순</option>
          <option value="desc">높은 가격순</option>
        </Select>
      </Top>

      {loading && <Msg>불러오는 중...</Msg>}
      {error && <Msg style={{ color: "crimson" }}>{error}</Msg>}

      <ProductList>
        {sorted.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            subtype={item.type}
            type={itemType}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Select = styled.select`
  border: 1px solid #ddd;
  background: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  gap: 6px;
  align-items: center;
`;
const Msg = styled.p`
  padding: 16px 0;
`;
