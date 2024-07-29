const getDomain = () => {
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
    const domain = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL : "localhost:3000";
    
    const url = `${protocol}://${domain}`;
    return url;
}
 
export default getDomain;