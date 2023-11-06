import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const MainLayout = ({ children }) => {
    return (
        <div className="antialiased bg-blue-50">
            <div>
                <div>
                    <div className="max-h">
                        <Nav />
                    </div>
                </div>
            </div>
            <div className="mt-6 sm:mt-0 sm:py-12 bg-white min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};
