import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";

let router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  // children: [
  //   // Outlet이라는 것을 또 작성해줘야 해서 굳이 필요 없을것 같다.
  //   { path: "", element: <Home /> },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  // ],
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
//
// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//
