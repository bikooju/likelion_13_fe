import { Routes, Route } from "react-router-dom";
import RootLayout from "../src/layouts/RootLayout";
import MyLayout from "../src/layouts/MyLayout";
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";

import AccountHome from "../pages/AccountHome.jsx";
import AccountSettings from "../pages/AccountSettings.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* 사이트 기본 레이아웃 */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>

      {/* /account 섹션 전용 레이아웃 */}
      <Route path="/account" element={<MyLayout />}>
        <Route index element={<AccountHome />} />
        <Route path="settings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
