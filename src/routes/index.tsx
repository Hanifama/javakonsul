import React from "react";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ServicePage from "../pages/Services";
import PortfolioPage from "../pages/Portfolio";
import GaleryPage from "../pages/Galery";
import ContactPage from "../pages/Contact";
import DetailPortfolioPage from "../pages/DetailPortfolio";
import ServiceDetailPage from "../pages/ServicesDetailPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PortfolioManagement from "../pages/ManagementPortfolio";
import GaleryManagement from "../pages/ManagementGalery";
import UserManagement from "../pages/ManagementUsers";
import SettingsPage from "../pages/SettingsPage";
import ServiceManagement from "../pages/ManagementService";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const routes: AppRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicePage /> },
  { path: "/services/:slug", element: <ServiceDetailPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/portfolio/:id", element: <DetailPortfolioPage /> },
  { path: "/article", element: <GaleryPage /> },
  { path: "/contact", element: <ContactPage /> },

  { path: "/login", element: <LoginPage /> },

  { path: "/dashboard", element: <DashboardPage /> },

  { path: "/dashboard/layanan", element: <ServiceManagement /> },
  { path: "/dashboard/portfolio", element: <PortfolioManagement /> },
  { path: "/dashboard/galeri", element: <GaleryManagement /> },
  { path: "/dashboard/users", element: <UserManagement /> },
  { path: "/dashboard/settings", element: <SettingsPage /> },
];

export default routes;
