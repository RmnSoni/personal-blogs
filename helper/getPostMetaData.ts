import fs from "fs";
import matter from "gray-matter";

  export interface PostMetaData {
    title: string;
    description: string;
    date: string;
    slug: string;
  }

  const getPostMetada = (): PostMetaData[] => {
    const folder = "markdown/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((filename) => {
      const fileContent = fs.readFileSync(`${folder}${filename}`, "utf-8");
      const matterResult = matter(fileContent);
      return {
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        slug: filename.replace(".md", ""),
      };
    });
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
  };

export default getPostMetada;
