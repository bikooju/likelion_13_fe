import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Bar>
      <Logo to="/">SHOP</Logo>
    </Bar>
  );
}

const Bar = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled(Link)`
  font-weight: 800;
  font-size: 1.25rem;
  text-decoration: none;
  color: #111;
`;
