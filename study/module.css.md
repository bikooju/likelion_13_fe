좋습니다 👍 이번엔 **예시 코드**를 곁들여서 이해하기 쉽게 정리해드릴게요.

---

# 📌 module.css 공부 정리

## 1) module.css의 개념과 사용법

### 개념

- `module.css`는 CSS를 **컴포넌트 단위**로 사용하게 해주는 방식이다.
- 클래스 이름이 자동으로 `고유 값`으로 바뀌어서 **전역 충돌이 나지 않는다.**

👉 **예시:**

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
}
```

```jsx
// Button.jsx
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.button}>버튼</button>;
}
```

📌 여기서 `.button`은 빌드되면 `Button_button__1a2b3c` 같은 이름으로 바뀜 → 다른 파일과 절대 충돌하지 않음.

---

## 2) module.css의 장단점

### 장점

1. **클래스 충돌 없음**

   - 기존 CSS는 같은 이름을 쓰면 스타일이 덮어씌워졌지만, module.css는 자동으로 구분된다.
   - 예: `Header.module.css`의 `.title`과 `Footer.module.css`의 `.title`은 서로 영향 없음.

2. **배우기 쉽다**

   - 기존 CSS 문법 그대로 사용 → 초보자도 빠르게 적응 가능.

3. **성능이 좋다**

   - 빌드 시점에 미리 처리되므로, 실행 중 성능 부담이 적음.

### 단점

1. **상태별 스타일링이 불편**

   - 예: 버튼을 클릭했을 때 스타일을 바꾸려면 JS에서 `className`을 조건부로 바꿔야 함.

   👉 **예시**

   ```jsx
   <button className={isActive ? styles.active : styles.button}>버튼</button>
   ```

2. **테마 전환 어려움**

   - 다크모드/라이트모드처럼 전체적으로 바뀌는 스타일은 CSS 변수나 전역 전략을 써야 함.

---

## 3) styled-components vs. module.css 비교

| 비교 항목     | module.css                   | styled-components                        |
| ------------- | ---------------------------- | ---------------------------------------- |
| 스타일 적용   | CSS 파일에 작성              | JS 안에 작성                             |
| 스코프        | 파일 단위 (자동 고유 클래스) | 컴포넌트 단위                            |
| 동적 스타일   | 조건부 className으로 처리    | props를 바로 사용 가능                   |
| 성능          | 빌드 타임 처리 (빠름)        | 런타임 처리 (조금 더 무거움)             |
| 배우기 난이도 | 쉬움 (그냥 CSS 느낌)         | 조금 더 배워야 함 (JS + CSS 섞어서 사용) |
| 테마 지원     | CSS 변수 필요                | ThemeProvider로 손쉽게 지원              |

👉 **예시 비교**

- **module.css**

```jsx
// Button.module.css
.button { background: gray; }
.active { background: green; }
```

```jsx
// Button.jsx
<button className={isActive ? styles.active : styles.button}>버튼</button>
```

- **styled-components**

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.active ? "green" : "gray")};
`;

<Button active={true}>버튼</Button>;
```

---

## ✅ 정리

- **module.css**:
  → "CSS 파일을 안전하게, 컴포넌트 단위로 관리"
  → 배우기 쉽고, 충돌 없음.

- **styled-components**:
  → "JS 안에서 props 기반으로 동적 스타일"
  → 테마, 상태 변화 많은 프로젝트에 유리.

---
