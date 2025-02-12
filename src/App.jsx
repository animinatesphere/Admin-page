import { Route, Routes } from "react-router";
import "./App.css";
// import AdinPage from "./pages/AdinPages";
import AdminPages from "./pages/AdminPages";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPages />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
