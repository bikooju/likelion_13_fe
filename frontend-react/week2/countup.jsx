import { useState } from "react";

function CountUp() {
  const [time, setTime] = useState(1);

  function handleClick() {
    setTime(time + 1);
  }
  return (
    <>
      <span>현재 시간: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </>
  );
}

export default CountUp;
