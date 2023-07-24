import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Admission from "../pages/admission/Admission";
import College from "../pages/college/College";
import MyCollege from "../pages/myCollege/MyCollege";
import Profile from "../pages/profile/Profile";
import CollegeDetailsPage from "../pages/college/CollegeDetailsPage";
import Login from "../pages/authPage/Login";
import Registration from "../pages/authPage/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <College />,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetailsPage />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-college",
        element: <MyCollege />,
      },
      {
        path : "/profile",
        element: <Profile />,
      },
      {
        path : "/login",
        element: <Login />,
      },
      {
        path : "/register",
        element: <Registration/>,
      },
    ],
  },
]);

export default router;
