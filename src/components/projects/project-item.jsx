import Image from "next/image";

export default function ProjectItem({data}) {

    const title = data.properties.name.title[0].plain_text;
    const description = data.properties.description.rich_text[0].plain_text;
    const cover = data.cover.external.url;

    return (
        <div className="flex flex-col m-3 bg-slate-400 rounded-xl">
            <Image 
                className="rounded-t-xl"
                src={cover} 
                width={500}
                height={200}
                alt=""
                quality={100}
                />
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}

// 2시간 15분