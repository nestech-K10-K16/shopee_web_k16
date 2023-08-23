import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoute } from "./router";
import PageWrapper from "../components/common/wrapper/PageWrapper";

const AppRouting = () => {
  return (
    <Routes>
      {appRoute.map((route) => {
        const Component = route.component;
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <PageWrapper>
                <Component />
              </PageWrapper>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouting;
