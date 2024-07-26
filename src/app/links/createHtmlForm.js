

const LinksCreateHtmlForm = () => {

    return ( 
        <>
            <form action="/api/links" method="POST">
                <input type="text" name="url" placeholder="Your url to shorten" defaultValue="https://github.com/mdzahedhossain/tinyurl-nextjs" />
                <button type="submit">Shorten</button>
            </form>
        </>
     );
}
 
export default LinksCreateHtmlForm;