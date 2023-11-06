import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <div className="bg-blue-500">
            <div className="max-w-xl px-8 mx-auto">
                <Nav />
            </div>
            <div className="max-w-xl mx-auto mt-8">{children}</div>
        </div>
    );
};

export default Layout;
