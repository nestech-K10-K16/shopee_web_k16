import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { appRoute } from "./router";
import { Error } from "components";
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
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouting;
