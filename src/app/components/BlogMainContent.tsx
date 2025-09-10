import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { BlogItem } from "@/shared/types/blogTypes";

interface Props {
    blogContent: BlogItem
}

export function BlogMainContent({blogContent}: Props) {
    return (
        <div>
            <h1 className="font-extrabold text-3xl mb-2">{blogContent.fields.title}</h1>
            <p className="mb-6 text-slate-400 ">
                Posted on{" "}
                {new Date(blogContent.fields.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <div className="[&>p]:mb-8 [&>h3]:font-extrabold">
                {documentToReactComponents(blogContent.fields.content)}
            </div>
        </div>
    )
}
