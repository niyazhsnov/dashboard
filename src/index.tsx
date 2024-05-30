import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceProductsPage from "./pages/e-commerce/products";
import AdminListPage from "./pages/admins/admin_list";
import UserListPage from "./pages/users/list";
import UniversityListPage from './pages/university/list';
import PrivateRoutes from "./utils/PrivateRoutes";
const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(

  <Flowbite theme={{ theme }}>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<DashboardPage />} />
          <Route
            path="/categories"
            element={<EcommerceProductsPage />}
          />
          <Route path="/users/list" element={<UserListPage />} />
          <Route path="/university/list" element={<UniversityListPage />} />
          <Route path="/admins/list" element={<AdminListPage />} />
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </Flowbite>

);
