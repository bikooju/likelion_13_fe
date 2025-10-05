import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router";

const NAME_KEY = "profile.name";
const PHOTO_KEY = "profile.photo";

export default function AccountHome() {
  const [name, setName] = useState("사용자");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem(NAME_KEY);
    const savedPhoto = localStorage.getItem(PHOTO_KEY);
    if (savedName) setName(savedName);
    if (savedPhoto) setPhoto(savedPhoto);
  }, []);

  return (
    <Container>
      <Profile>
        <img
          src={photo || "https://placehold.co/120x120?text=Profile"}
          alt="profile"
        />
        <div>
          <h3>{name}</h3>
          <p>프로필 기본 정보</p>
          <StyledLink to="/account/settings">이름 변경하기</StyledLink>
        </div>
      </Profile>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 4px 0;
    color: #666;
  }
`;

const StyledLink = styled(Link)`
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
