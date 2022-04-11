import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import NewWord from "./pages/NewWord";
import NotFound from "./pages/NotFound";
import store from "./store/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="new-word" element={<NewWord />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
