import { BlogQueryResult } from "@/shared/types/blogTypes";
import { client } from "@lib/contentful/client"
import { PostCard } from "../components/PostCard";

const getBlogEntries = async ():Promise<BlogQueryResult> => {
    const entries = await client.getEntries({ content_type: "blogPost" });

    return entries as unknown as BlogQueryResult;
}

export default async function BlogPage() {
    const blogEntries = await getBlogEntries();
    // console.log('Blog entries: ' + blogEntries.items);

    return (
        <div className="flex p-24 gap-y-8">
            {blogEntries.items.map((singlePost) => {
                return <PostCard key={singlePost.fields.slug} singlePost={singlePost} />
            })}
        </div>
    )
}


