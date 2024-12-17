import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={"<HomePage />"} />
        <Route path="/catalog" element={"<TrucksPage />"} />
        <Route path="/catalog/:id" element={"<TruckDetailsPage />"}>
          <Route path="features" element={"<TruckFeatures />"} />
          <Route path="reviews" element={"<TruckReviews />"} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
