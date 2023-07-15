import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import { appRoute, DEFAULT_PATHNAME } from "./router";

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
      <Route
        path={DEFAULT_PATHNAME}
        element={
          <DefaultLayout>
            <DefaultLayout />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default AppRouting;
