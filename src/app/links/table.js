'use client';

import useSWR from 'swr';
import LinksCreateForm from './createForm';
import { Table } from "flowbite-react";

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

            <Table>
                <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>URL</Table.HeadCell>
                <Table.HeadCell>SHORT LINK</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {data && data.map((link, idx) => {
                    return <Table.Row key={`link-item-${link.id}-${idx}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{link.id}</Table.Cell>
                        <Table.Cell>{link.url}</Table.Cell>
                        <Table.Cell>tinyurl-nextjs.com/{link.short}</Table.Cell>
                    </Table.Row>
                })}
                </Table.Body>
            </Table>
        </>
     );
}
 
export default LinksHTMLTable;