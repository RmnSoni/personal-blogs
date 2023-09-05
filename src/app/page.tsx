import Image from "next/image";
import fs from "fs";
import Link from "next/link";
import getPostSlugs from "../../helper/getPostSlugs";

export default function Home() {

  const postList = getPostSlugs();

  return (
    <main className="flex flex-col items-center justify-between p-24 m-8">
      <h1>My Blogs List</h1>
      {postList.map((post) => (
        <Link href={`/posts/${post}`}>{post}</Link>
      ))}
    </main>
  );
}
