import React, { lazy, useState } from "react";
// import Loader from "@/components/molecules/Loader";
const NavBar = lazy(async () => import("../components/TopBar"));
const BottomAppBarMenu = lazy(async () => import("../components/BottomBar"));
// import useCustomNavigation from "@/utils/hooks/useCustomNavigation";
import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import OfferPopup from "../components/Offers/OfferPopUp";

const SidebarLayout = ({ children, enableStrictMode = true }) => {
  const [min, setmin] = useState(1);
  //   useCustomNavigation();

  return enableStrictMode ? (
    <StrictMode>
      <NavBar />
      <OfferPopup
        timeIntervalInMinuit={min}
        onClose={() => setmin(min + 3)}
        header="Special Offer!"
        description="Get 20% off on your first purchase. Don't miss this opportunity!"
      />
      {children}
      {/* <Loader /> */}
      <Outlet />
      <BottomAppBarMenu />
    </StrictMode>
  ) : (
    <>
      <NavBar />
      {children}
      {/* <Loader /> */}

      <Outlet />
    </>
  );
};

export default SidebarLayout;
