import "@styles/globals.scss";
import Header from "@components/Header/Header";
import SearchResults from "@components/SearchResults/SearchResults";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ProductDetails />} />
      </Routes>
    </main>
  );
}

export default App;
