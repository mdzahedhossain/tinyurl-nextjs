import { getLinks } from "@/app/lib/db";


const LinksHTMLTable = async () => {
    const linksResponse = await getLinks();

    return (
        <div>
            <table>
                <tbody>
                    {linksResponse && linksResponse.map((link, idx) => {
                        return <tr key={`link-item-${link.id}-${idx}`}>
                            <td>{link.id}</td>
                            <td>{link.url}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
}
 
export default LinksHTMLTable;