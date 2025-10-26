import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function AccountSettings() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("account::name") || "");
    setPhoto(localStorage.getItem("account::photo") || "");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("account::name", name.trim() || "사용자");
    localStorage.setItem("account::photo", photo.trim());
    navigate("/account");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>표시 이름</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />

      <label>프로필 이미지 URL</label>
      <input
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="https://example.com/image.jpg"
      />

      <Preview>
        <img
          src={photo || "https://placehold.co/64x64?text=Img"}
          alt="preview"
        />
        <span>{name || "미리보기 이름"}</span>
      </Preview>

      <button type="submit">저장하기</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  label {
    font-weight: 600;
  }

  input {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #005fcc;
    }
  }
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
