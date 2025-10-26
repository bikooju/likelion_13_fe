import { Route, Routes } from "react-router-dom";
import Header from "../components/HeaderLogo";
import Home from "../pages/ShoppingHome";
import ProductDetail from "../pages/ProductDetail";

export default function ShopRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
