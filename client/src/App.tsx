import { Layout } from "./components/layout/layout";
import { CustomerPage } from "./pages/Customers";
import { ItemsPage } from "./pages/items";
import { OrderPage } from "./pages/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeesPage } from "./pages/Employees/employeesPage";
import { SettingsPage } from "./pages/Settings";
import { ProfilePage } from "./pages/profile";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Add more routes as needed */}
          <Route path="/" element={<Layout />}>
            <Route index element={<OrderPage />} />
            <Route path="items" element={<ItemsPage />} />
            <Route path="customers" element={<CustomerPage />} />
            <Route path="employees" element={<EmployeesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
