import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import { appRoute } from "./router";

const AppRouting = () => {
  return (
    <Routes>
      {appRoute.map((route, index) => {
        const Component = route.component;
        const Layout = route.layout === null ? Fragment : DefaultLayout;
        return (
          <Route
            id={route.id}
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
