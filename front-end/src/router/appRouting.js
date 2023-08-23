import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { appRoute } from "./router";
import { DefaultLayout } from "../component/utils";


const AppRouting = () => {
  return (
    <Routes>
      {appRoute.map((route) => {
        const Component = route.component;
        const Layout = route.layout === null ? Fragment : DefaultLayout;
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouting;
