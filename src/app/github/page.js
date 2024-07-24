'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const GithubProfile = () => {
    const myGithubProfile = "https://api.github.com/repos/mdzahedhossain/tinyurl-nextjs";
    const { data, error, isLoading } = useSWR(myGithubProfile, fetcher);

    if (error) return <div>An error happened</div>;
    if (isLoading) return <div>Loading...</div>;
    return ( 
        <div>
            <h1>{data.name}</h1>
            <h1>{data.description}</h1>
            <strong>👁️{data.subscribers_count}</strong>{" "}
            <strong>✨{data.stargazers_count}</strong>{" "}
            <strong>🍴{data.forks_count}</strong>
        </div>
     );
}
 
export default GithubProfile;