import Link from "next/link";
import { PostMetaData } from "../../helper/getPostMetaData";

export default function BlogCard(post: PostMetaData) {
  return (
    <div className=" group p-4 rounded-md dark:shadow-teal-950 dark:hover:shadow-teal-800 hover:shadow-xl shadow-md dark:bg-slate-800 ">
      <p className=" text-sm dark:text-slate-400 text-slate-600">{post.date}</p>
      <Link
        href={`/posts/${post.slug}`}
        className=" text-lg text-teal-700 dark:text-teal-400 
         hover:text-slate-700 dark:hover:text-slate-400
        font-semibold group-hover:font-black "
      >
        {post.title}
      </Link>
      <p>{post.description}</p>
    </div>
  );
}
