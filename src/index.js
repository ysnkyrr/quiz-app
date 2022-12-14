import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";
import { createContext } from "react";
import Store, { MainContext } from "./store";
import { initialState } from "./store/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Store>
    <BrowserRouter basename={"/quiz"}>
      <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </React.StrictMode>
    </BrowserRouter>
  </Store>
);
