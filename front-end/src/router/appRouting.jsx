import { Route, Routes } from "react-router-dom";
import { appRoute } from "./router";
import { systemRoute } from "./systemRouter";
import DefaultLayout from "component/utils/defaultLayout";
import DefaultLayoutSystem from "component/utils/deflautLayoutSystem";

const AppRouting = () => {
  return (
    <Routes>
      {appRoute.map((route, index) => {
        const Component = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayout>
                <Component />
              </DefaultLayout>
            }
          />
        );
      })}

      {systemRoute.map((route, index) => {
        const Component = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayoutSystem>
                <Component />
              </DefaultLayoutSystem>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouting;
