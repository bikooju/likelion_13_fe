import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import data from "./data";
import { useState } from "react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 검색 결과
  const result = Object.keys(data)
    .filter((query) => query.includes(searchParams.get("query")))
    .flatMap((query) => data[query]);

  console.log(result);

  // 검색
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value.trim());
  }

  const navigate = useNavigate();

  return (
    <Layout>
      <Input
        type="search"
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?query=${input}`);
          }
        }}
      />
      <Message>검색 결과: {result.length}건</Message>
      <Results>
        {result.map((result) => (
          <Result key={result.id}>
            <Title>{result.title}</Title>
            <Content>{result.content}</Content>
          </Result>
        ))}
      </Results>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
`;

const Message = styled.span`
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  all: unset;
  width: 32rem;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  font-size: 1rem;
`;

const Results = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

const Result = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 30px;
  transition: transform 250ms ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.025);
  }
`;

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.span`
  font-weight: 500;
`;

export default Search;
