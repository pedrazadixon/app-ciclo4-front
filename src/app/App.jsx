import React from "react";
import "sass/app.css";
import AppRouter from "router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = function () {
  return (
    <div id="App">
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
      <AppRouter />
    </div>
  );
};

export default App;
