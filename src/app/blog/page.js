import getDomain from "@/lib/getDomain";
import BlogCard from "./card";

// fetch caching option
// force-cache is default
// revalidate: n seconds
// no-store

async function getData() {
    const domain = getDomain();
    // 1 endpoint
    const endpoint  = `${domain}/api/posts`;
    //const res = await fetch(endpoint, {next: {  revalidate: 10 }});
    const res = await fetch(endpoint, {cache: 'no-store'});

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    if(res.headers.get('content-type') !== 'application/json') {
        return {items: []};
    }

    return res.json();

    //return {items: []};
}

export default async function BlogPage() {

    const data = await getData();
    const items = data && data.items ? [...data.items] : [];

    return <main>
        <h1>Blog Title</h1>
        <p>Posts:</p>
        {data && items.map((item, idx) => {
            return <BlogCard key={`post-${idx}`} title={item.title} />
        })}
    </main>
}