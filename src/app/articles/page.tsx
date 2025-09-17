import { getAllArticles } from "@lib/api"
import type { Article } from "@/shared/types/article.type";
import Image from "next/image";
import Link from "next/link";

export default async function Articles() {
    const articles = await getAllArticles();

    // console.log(articles);

    return (
        <div className="px-0 py-15">
            <div className="space-y-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tighter mb-5 sm:text-5xl">
                        Welcome to our Knowledge Base
                    </h1>
                    <p>
                        Discover our latest articles and stay up to date with the newest
                        technologies, features, and trends.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-5 flex-col lg:flex-row mt-10">
                    {articles.map((article: Article) => {
                        return (
                            <article key={article.sys.id} className="w-full lg:w-1/3 rounded-md bg-(--bg-card)">
                                <Image
                                    className="w-[300px] m-auto"
                                    src={article.articleImage.url}
                                    width="350"
                                    height="263"
                                    alt={article.slug}
                                />
                                <div className="flex-1 p-6">
                                    <Link href={`/articles/${article.slug}`}>
                                        <h3 className="text-2xl font-bold leading-tight">{article.title}</h3>
                                    </Link>
                                    <div className="inline-block rounded-full bg-(--bg-card) px-3 py-1 mb-2 text-sm font-semibold">
                                        {article.categoryName}
                                    </div>
                                    <p className="max-w-none mb-2 text-sm">
                                        {article.summary}
                                    </p>
                                    <p className="max-w-none mt-2 mb-2 text-sm font-bold">Written by: {article.authorName}</p>
                                    <div className="flex justify-end">
                                        <Link
                                            className="inline-flex h-10 items-center justify-center text-sm font-medium"
                                            href={`/articles/${article.slug}`}>
                                            Read More →
                                        </Link>
                                    </div>
                                </div>

                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
