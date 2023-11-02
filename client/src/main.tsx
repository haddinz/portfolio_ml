import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Model_Iris from "./pages/models/model_iris.tsx";
import Page from "./pages/main.tsx";
import Model_Diabetes from "./pages/models/model_diabetes.tsx";
import Model_Room from "./pages/models/model_room.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Page />} />
      <Route path="/page/models/model_iris" element={<Model_Iris />} />
      <Route path="/page/models/model_diabetes" element={<Model_Diabetes />} />
      <Route path="/page/models/model_room" element={<Model_Room />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
