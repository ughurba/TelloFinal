import React from "react";
import Theme from "./Theme";
import { AppRoutes } from "./Routes/routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <AppRoutes />
      </Theme>
    </Provider>
  );
}

export default App;
