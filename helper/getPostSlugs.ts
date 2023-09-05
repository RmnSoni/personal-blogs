import fs from 'fs';

const getPostSlugs = () => {
    const folder = "markdown/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    const postSlugs= markdownPosts.map((post) => post.replace(".md",""))
  
    return postSlugs;
  }

export default getPostSlugs;