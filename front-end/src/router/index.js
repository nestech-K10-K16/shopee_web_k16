import React from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTE } from "./mainRoute";
import { DefaultLayout } from "../component/utils";

const AppRoute = () => {
  return (
    <div className="App">
      <Routes>
        {APP_ROUTE.map((element) => {
          const Component = element.Component;
          const Layout = DefaultLayout;
          const id = element.RouteID;
          return (
            <Route
              key={id}
              path={element.Path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default AppRoute;
