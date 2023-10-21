import "@styles/globals.scss";
import Header from "@components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "@pages/SearchPage";
import ProductPage from "@pages/ProductPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/items" element={<SearchPage />} />
        <Route path="/items/:id" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
