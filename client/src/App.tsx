import { ItemsPage } from "./pages/items";
import { OrderPage } from "./pages/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/items" element={<ItemsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
