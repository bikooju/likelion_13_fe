import "./profile.css";

export default function Profile({ name, introduction, viewCount }) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>이름: {name}</p>
      <p>소개: {introduction}</p>
      <p>조회수: {viewCount}</p>
    </div>
  );
}
