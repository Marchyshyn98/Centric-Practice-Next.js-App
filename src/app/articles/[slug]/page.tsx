import { getArticle, getAllArticles } from "@lib/api";
import type { Article } from "@/shared/types/article.type";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/app/components/ButtonLink";

type ArticlePageProps = {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Article> {
    const allArticles = await getAllArticles();

    return allArticles.map((article: Article) => ({
        slug: article.slug
    }))
}

export default async function Article({ params }: ArticlePageProps) {
    const { slug } = await params;

    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    // console.log(article)

    const { title, articleImage, summary, details } = article[0];

    return (
        <div className="px-0 py-15 w-full md:w-3/4">
            <div className="mb-[30px]">
                <ButtonLink link="/articles">Back</ButtonLink>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="max-w-[900px]">{summary}</p>
            <div className="space-y-8 lg:space-y-10">
                <Image
                    className="w-full md:w-1/2 overflow-hidden rounded-xl object-cover mx-0 my-10"
                    src={articleImage.url}
                    alt={slug}
                    width="650"
                    height="365"
                />
                <div className="space-y-4 md:space-y-6">
                    <div className="prose prose-invert">{documentToReactComponents(details.json)}</div>
                </div>
            </div>
        </div>
    )
}
