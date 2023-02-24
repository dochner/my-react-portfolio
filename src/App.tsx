import React, { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import NProgress from "nprogress";

import "./App.css";

const LazyLoad = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <></>;
};

function App() {
  return (
    <>
      <Suspense fallback={<LazyLoad />}>{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
