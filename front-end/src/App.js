import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { refreshLoginUser } from "redux/createAsyncThunk/userThunk";
import AppRouter from "router/appRouter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshLoginUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <AppRouter />
      </Router>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default App;
