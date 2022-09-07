import React from "react";
import Theme from "./Theme";
import { AppRoutes } from "./Routes/routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { AppRoutesAdmin } from "./Admin/Routes/routes";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <AppRoutes />
        <AppRoutesAdmin />
      </Theme>
    </Provider>
  );
}

export default App;
