import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default AppLayout;
