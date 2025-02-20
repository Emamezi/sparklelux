import { Route, Routes } from "react-router-dom";
import "./shop.style.scss";
import CategoriesPreview from "../categories-preview.component.jsx/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
