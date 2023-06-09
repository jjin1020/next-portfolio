import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({repo}) {

    console.log(repo)

    return (
        <>
            <Layout>
                <Head>
                    <title>
                    포트폴리오
                    </title>
                    <meta name="description" content='포트폴리오'></meta>
                    <link rel="icon" href='/favicon.ico'></link>
                </Head>
                <h1>총 프로젝트 : {repo.results.length}</h1>
        
                {repo.results.map((prj) => (
                    <ProjectItem key={prj.id} data={prj}></ProjectItem>
                ))}
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };
      

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const repo = await res.json();

    // const projectNames = repo.results.map(prj => (prj.properties.name.title[0].plain_text))
    
    return { props: { repo } };
  };
   