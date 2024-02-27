
import "./App.css"
import Footer from "./comonents/Footer/Footer";
import Header from "./comonents/Header/Header";
import { Routes, Route } from "react-router-dom";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from '../src/pages/AllSalesPage/index.jsx'
import CartPage from "./pages/CartPage/index.jsx"
import MainPage from "./pages/MainPage/Index.jsx"
import NotFoundPage from "./pages/NotFoundPage/index.jsx"
import PagesCategories from "./pages/PagesCategories/PagesCategories.jsx"
import ProductsByCategori from "./pages/ProductsByCategori/index.jsx"
import SingleProductsPage from "./pages/SingleProductsPage/index.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/sale" element={<AllSalesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/categories" element={<PagesCategories />} />
        <Route path="/categories/:id" element={<ProductsByCategori />} />
        <Route path="/products/:product_id" element={<SingleProductsPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;