// App.jsx
import React, { Suspense } from "react";
import { lazy } from "react";
import SidebarLayout from "../src/AppLayout/SideBarLayout";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { paths } from "./Constants/constant";
// Import the OfferPopupProvider
import { OfferPopupProvider } from "./conext/OfferPopupContext";

const Home = lazy(async () => import("../src/pages/Home"));
const AboutUs = lazy(async () => import("../src/pages/AboutUs"));
const CourseDetail = lazy(async () => import("../src/pages/CourseDetail"));
const Courses = lazy(async () => import("../src/pages/Courses"));

const router = () => {
  return createBrowserRouter([
    {
      path: paths.default,
      element: (
        <OfferPopupProvider>
          {" "}
          {/* Wrap the RouterProvider with OfferPopupProvider */}
          <SidebarLayout />
        </OfferPopupProvider>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={paths.home} />,
        },
        {
          path: paths.home,
          element: <Home />,
        },
        {
          path: paths.aboutUs,
          element: <AboutUs />,
        },
        {
          path: paths.courses,
          element: <Courses />,
        },
        {
          path: paths.course_detail,
          element: <CourseDetail />,
        },
      ],
    },
  ]);
};

function App() {
  return (
    <Suspense>
      <RouterProvider router={router()} />
    </Suspense>
  );
}

export default App;
