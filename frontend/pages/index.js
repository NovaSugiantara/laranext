import { MainLayout } from "@/layouts/MainLayout";
import axios from "@/lib/axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";


const Home = ({articles}) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            {/* map articles */}
            <div className="flex flex-col gap-2 p-5">
            {articles.map((article) => (
                <div className="p-2 bg-slate-400 rounded-lg" key={article.id}>
                    <h1 className="text-black text-sm">{ article.attributes.title }</h1>
                    <hr />
                    <p className="text-black text-xs">{ article.attributes.body }</p>

                    <Link href={`/articles/${article.id}`} legacyBehavior>
                        <a className="text-xs text-indigo-500">Read More</a>
                    </Link>
                </div>
            ))}
            </div>
        </>
    );
};

export default Home;

export async function getStaticProps(){
    const response = await axios.get("api/v1/articles");
    const articles = response.data.data;

    return {
        props:{
            articles: articles
        },
    }
}

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
