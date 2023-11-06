import { MainLayout } from "@/layouts/MainLayout";
import React from "react";

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-black">Dashboard Page</h1>
            <p className="mt-4 text-black">This is the Dashboard page content.</p>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
