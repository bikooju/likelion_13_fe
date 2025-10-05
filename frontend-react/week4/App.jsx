import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value.trim());
  }

  const navigate = useNavigate();

  return (
    <>
      <Input
        type="search"
        placeholder="검색어를 입력하세요"
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?query=${input}`);
          }
        }}
      />
    </>
  );
}

const Input = styled.input`
  all: unset;
  margin-top: 25px;
  width: 32rem;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  font-size: 1rem;
`;
export default App;
