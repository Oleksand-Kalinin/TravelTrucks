import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const TrucksPage = lazy(() => import("./pages/TrucksPage.jsx"));
const TruckDetailsPage = lazy(() => import("./pages/TruckDetailsPage.jsx"));

import "./App.css";
import TruckFeatures from "./components/TruckFeatures/TruckFeatures.jsx";
import TruckReviews from "./components/TruckReviews/TruckReviews.jsx";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<TrucksPage />} />
        <Route path="/catalog/:id" element={<TruckDetailsPage />}>
          <Route path="features" element={<TruckFeatures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
