import { useState } from "react";

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 동작(페이지 새로고침) 막음
    const text = value.trim();
    if (!text) return;
    onInsert(text); // 부모 컴포넌트로 전달
    setValue(""); // 입력창 초기화
  };

  return (
    <form className="insert" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="addButton">
        추가
      </button>
    </form>
  );
}
