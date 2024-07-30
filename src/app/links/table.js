'use client';

import useSWR from 'swr';
import LinksCreateForm from './createForm';

const fetcher = (url) => fetch(url).then((res) => res.json());

const LinksHTMLTable = () => {
    const endpoint = "/api/links";
    const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);

    if (error) return <div>An error happened</div>;
    if (isLoading) return <div>Loading...</div>;

    const didSubmit = (newItem) => {
        mutate();
    }

    return ( 
        <>
            <LinksCreateForm didSubmit={didSubmit} />
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>URL</td>
                        <td>Short</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((link, idx) => {
                        return <tr key={`link-item-${link.id}-${idx}`}>
                            <td>{link.id}</td>
                            <td>{link.url}</td>
                            <td>{link.short}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default LinksHTMLTable;