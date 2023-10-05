import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import macos from "@/public/images/macos.jpg";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>} </h1>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
      <Image
        width={200}
        height={200}
        src={macos}
        alt="Macos"
        // fill
        // style={{ objectFit: "contain" }}
        // className="object-cover"
        // sizes="(max-width: 480) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={50}
        priority
      ></Image>
    </main>
  );
}
