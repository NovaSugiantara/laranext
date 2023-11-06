import { MainLayout } from "@/layouts/MainLayout";
import React from "react";

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-black">Home Page</h1>
            <p className="mt-4 text-black">This is the Home page content.</p>
        </div>
    );
};

export default Home;

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
