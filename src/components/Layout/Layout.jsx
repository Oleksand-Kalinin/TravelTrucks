import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../Loader/Loader.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
