import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>Navigation</header>
      <main>
        <Suspense fallback={"<Loader />"}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
