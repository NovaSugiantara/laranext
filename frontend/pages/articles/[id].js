import { MainLayout } from '@/layouts/MainLayout';
import axios from '@/lib/axios';
import Head from 'next/head';
import React from 'react'

const Article = ({article}) => {
    return (
        <>
            <Head>
                <title>{article.attributes.title}</title>
            </Head>

            {/* map articles */}
            <div className="flex flex-col gap-2 p-5">
                <div className="p-2 bg-slate-400 rounded-lg">
                    <h1 className="text-black text-sm">{ article.attributes.title }</h1>
                    <hr />
                    <p className="text-black text-xs">{ article.attributes.body }</p>
                </div>
            </div>
        </>
    );
}

export default Article;

export async function getStaticPaths(){
    const response = await axios.get("api/v1/articles");

    return {
        fallback: false,
        paths: response.data.data.map(article=>({
            params:{id:article.id}
        }))
    }
}

export async function getStaticProps({params}){
    const response = await axios.get(`api/v1/articles/${params.id}`);
    const article = response.data.articles;

    return {
        props:{
            article: article
        },
    }
}

Article.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
