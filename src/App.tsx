import React from "react";
import Theme from "./Theme";
import { AppRoutes } from "./Routes/routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { AppRoutesAdmin } from "./Admin/Routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <Theme>
        <AppRoutes />
        <ToastContainer autoClose={3000} />
        <AppRoutesAdmin />
      </Theme>
    </Provider>
  );
}

export default App;
