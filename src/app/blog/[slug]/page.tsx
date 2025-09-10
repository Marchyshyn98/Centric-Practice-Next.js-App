import type { BlogPageProps } from "@/shared/types/blogTypes";
import type { BlogItem } from "@/shared/types/blogTypes";
import { client } from "@lib/contentful/client";
import { Author } from "@/app/components/Author";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Video } from "@/app/components/Video";
import { BlogMainContent } from "@/app/components/BlogMainContent";

const fetchBlogPost = async (slug: string): Promise<BlogItem> => {
    const queryOptions = {
        content_type: "blogPost",
        "fields.slug[match]": slug
    };

    const queryResult = await client.getEntries(queryOptions);

    return queryResult.items[0] as unknown as BlogItem;
}

export default async function BlogDetail({ params }: BlogPageProps) {
    const { slug } = await params;

    const blogPost = await fetchBlogPost(slug);

    console.log(blogPost)

    const { title, date, content, author, video } = blogPost.fields;

    return (
        <div className="min-h-screen p-24">
            <div className="mb-[30px]">
                <ButtonLink link="/blog">Back</ButtonLink>
            </div>
            <div className="max-w-2xl">
                <BlogMainContent blogContent={blogPost} />
                <Video video={video} />
                <Author author={author} />
            </div>
        </div>
    )
}
