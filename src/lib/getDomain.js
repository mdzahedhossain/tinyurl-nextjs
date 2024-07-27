const getDomain = () => {
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
    const domain = process.env.NEXT_PUBLIC_VERCEL_URL === "production" ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000";
    
    const url = `${protocol}://${domain}`;
    console.log(url);

    return url;
}
 
export default getDomain;