import { Layout } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  CreateSalesPage,
  CustomerPage,
  DashBoardPage,
  EmployeesPage,
  ItemsPage,
  ProfilePage,
  PurchasePage,
  ReportsPage,
  SalesPage,
  SettingsPage,
} from "./pages";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Add more routes as needed */}
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoardPage />} />
            <Route path="items" element={<ItemsPage />} />
            <Route path="customers" element={<CustomerPage />} />
            <Route path="employees" element={<EmployeesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="purchases" element={<PurchasePage />} />
            <Route path="/sales">
              <Route index element={<SalesPage />} />
              <Route path="create" element={<CreateSalesPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
