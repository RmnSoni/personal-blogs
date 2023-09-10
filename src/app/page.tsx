import Image from "next/image";
import fs from "fs";
import Link from "next/link";
import getPostSlugs, { PostMetaData } from "../../helper/getPostMetaData";
import BlogCard from "../components/BlogCard";
import getPostMetada from "../../helper/getPostMetaData";
import MouseGradient from "../components/MouseGradient";

export default function Home() {
  const postList = getPostMetada();
  const blogList = postList.map((post: PostMetaData) => (
    <BlogCard key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {blogList}
    </div>
  );
}
