import { MainLayout } from "@/layouts/MainLayout";
import React from "react";

const About = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-black">About Us</h1>
            <p className="mt-4 text-black">This is the About page content.</p>
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
