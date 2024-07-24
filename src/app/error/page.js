async function getData() {
    // 1 endpoint
    // const endpoint  = "http://localhoslt:3000/api/posts";
    // const res = await fetch(endpoint);

    // if (!res.ok) {
    //     throw new Error("Failed to fetch data");
    // }

    // return res.json();

    return { items: []};
}

export default async function BlogPage() {

    const data = await getData();
    const items = data && data.items ? [...data.items] : [];

    return <main>
        <h1>Blog Title</h1>
        <p>Posts:</p>
        {data && items.map((item, idx) => {
            return <li key={`post-${idx}`}>{item.title}</li>
        })}
    </main>
}