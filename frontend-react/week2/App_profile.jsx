import Profile from "./profile.jsx";

function App() {
  // 여러 명의 데이터 전달
  const profiles = [
    {
      name: "주현준",
      introduction: "안녕하세요. 주현준입니다.",
      viewCount: 1500,
    },
    {
      name: "문재연",
      introduction: "안녕하세요. 문재연입니다.",
      viewCount: 2000,
    },
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          name={profile.name}
          introduction={profile.introduction}
          viewCount={profile.viewCount}
        />
      ))}
    </>
  );
}

export default App;
