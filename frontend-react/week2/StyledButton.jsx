import { styled } from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.background};
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const ButtonCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: ${(props) => props.background || "white"};
  color: ${(props) => props.color};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function StyledButton() {
  return (
    <ButtonDiv>
      <ButtonCard background="skyblue" color="white">
        <h2>강조 카드</h2>
        <p>강조 스타일이 적용된 카드입니다.</p>
        <Button background="blue">강조 버튼</Button>
      </ButtonCard>
      <ButtonCard color="black">
        <h2>기본 카드</h2>
        <p>기본 스타일이 적용된 카드입니다.</p>
        <Button background="gray">기본 버튼</Button>
      </ButtonCard>
    </ButtonDiv>
  );
}

export default StyledButton;
