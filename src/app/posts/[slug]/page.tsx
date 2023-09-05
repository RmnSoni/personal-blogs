import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent= (slug:string)=>{
    const folder = "markdown/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult= matter(content)
    return matterResult
}

export default function BlogPost({params}: any){

    const slug = params.slug
    const post = getPostContent(slug)

    return (
        <div >
            <h1>{post.data.title}</h1>
            <p>{post.data.date}</p>
            <article className='prose'>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    )
}