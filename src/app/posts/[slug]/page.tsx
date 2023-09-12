import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import getPostMetada from '../../../../helper/getPostMetaData';

const getPostContent= (slug:string)=>{
    const folder = "markdown/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult= matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetada();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };


export default function BlogPost({params}: any){

    const slug = params.slug
    const post = getPostContent(slug)

    return (
        <div className='p-6'>
            <div className='text-center' >
            <h1 className=' text-3xl text-slate-800 dark:text-teal-500 font-bold'>{post.data.title}</h1>
            <p className='text-slate-500'>{post.data.date}</p>
            </div>
            <article className='prose max-w-none md:prose-lg prose-slate dark:prose-invert'>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    )
}