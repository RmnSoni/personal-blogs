import Link from "next/link";
import { PostMetaData } from "../../helper/getPostMetaData";

export default function BlogCard(post:PostMetaData){


    return (
        <div className=" group p-4 rounded-md border border-slate-500 hover:bg-slate-200 ">
                <p className=" text-sm text-slate-600">{post.date}</p>
                <Link href={`/posts/${post.slug}`} className=" text-lg hover:text-slate-700 text-teal-700 font-semibold group-hover:font-black ">{post.title}</Link>
                <p className="blog-card-description">{post.description}</p>
        </div>
    )


}