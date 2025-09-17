import { Document } from "@contentful/rich-text-types";

export type Article = {
    sys: {
        id: string
    },
    title: string,
    slug: string,
    summary: string,
    date: Date,
    details: Document,
    articleImage: {
        url: string
    },
    authorName: string,
    categoryName: string
}