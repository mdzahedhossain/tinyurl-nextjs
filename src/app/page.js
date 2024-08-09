import Image from "next/image";
import { getSessionUser } from "./lib/sessions";

export default async function Home() {
  const user = await getSessionUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Something is coming</div>
    </main>
  );
}
