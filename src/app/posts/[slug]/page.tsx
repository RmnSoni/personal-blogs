import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent= (slug:string)=>{
    const folder = "markdown/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    return content
}

export default function BlogPost({params}: any){

    const slug = params.slug
    const content = getPostContent(slug)

    return (
        <div >
            <h1>BlogPost for slug url : {slug}</h1>
            <Markdown>
                {content}
            </Markdown>
        </div>
    )
}