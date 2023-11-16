import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoute, publicRoute } from "./router";
import { DefaultLayout } from "component/utils";
import { useSelector } from "react-redux";
import { Error } from "pages";

const AppRouter = () => {
  const { userToken } = useSelector((state) => state.userSlice);

  const layout = (route) => {
    let layout = DefaultLayout;
    if (route.layout === null) {
      layout = Fragment;
    } else if (route.layout) {
      layout = route.layout;
    }
    return layout;
  };

  const component = (route, index) => {
    const Layout = layout(route);
    const Component = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Component />
          </Layout>
        }
      />
    );
  };

  return (
    <Routes>
      {publicRoute.map((route, index) => {
        return component(route, index);
      })}
      {userToken.data &&
        privateRoute.map((route, index) => {
          return route.role === undefined && component(route, index);
        })}
      {userToken.data?.Role === 0 &&
        privateRoute.map((route, index) => {
          return route.role === 0 && component(route, index);
        })}
      <Route path="*" element={<Error />} />;
    </Routes>
  );
};

export default AppRouter;
