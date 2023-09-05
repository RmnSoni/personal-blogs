import Link from "next/link";
import { PostMetaData } from "../../helper/getPostMetaData";

export default function BlogCard(post:PostMetaData){


    return (
        <div className="p-4 rounded-md m-4 border border-slate-800">
                <p>{post.date}</p>
                <Link href={`/posts/${post.slug}`} className="blog-card-title">{post.title}</Link>
                <p className="blog-card-description">{post.description}</p>
        </div>
    )


}