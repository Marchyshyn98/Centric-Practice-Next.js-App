import { Document } from "@contentful/rich-text-types";
import type { Author } from "./Author.type";
import type { Video } from "./Video.type";

export type BlogItem = {
    fields: {
        title: string,
        slug: string,
        date: Date,
        content: Document,
        image: {
            fields: {
                file: {
                    details: {
                        image: {
                            width: number,
                            height: number
                        }
                    }
                    url: string
                }
            }
        },
        author: Author,
        video: Video
    }
}

export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems
}

export type BlogPageProps = {
    params: Promise<{ slug: string }>;
}