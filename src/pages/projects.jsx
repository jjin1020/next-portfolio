import Layout from "@/components/layout";
import Head from "next/head";

export default function Projects() {
    return (
        <>
            <Head>
                <title>
                포트폴리오
                </title>
                <meta name="description" content='포트폴리오'></meta>
                <link rel="icon" href='/favicon.ico'></link>
            </Head>
            <Layout>
                <h1>프로젝트입니다.</h1>
            </Layout>
        </>
    )
}