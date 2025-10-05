import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function RootLayout() {
  return (
    <Layout>
      <Navbar />
      <Content>
        {/*<Outlet />에 현재 경로와 매핑된 자식 라우트가 들어옴 ex. / -> <App />*/}
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

const Content = styled.main`
  min-height: calc(
    100vh - 60px - 2rem
  ); // 최소 높이: 전체 높이 - 네비바 높이 - 푸터 높이
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RootLayout;
