import Link from "next/link";
import Image from "next/image";
import type { BlogItem } from "@/shared/types/blogTypes";
import styles from "../styles/PostCard.module.css"

interface Props {
    singlePost: BlogItem
}

export function PostCard({ singlePost }: Props) {
    const { slug, title, date, image } = singlePost.fields;

    return (
        <div className="lg:w-1/4 md:w-1/3 m-[20px]">
            <Link className={styles.postCard + " group block"} href={`/blog/${slug}`}>
                <div className="min-h-[340px]">
                    <Image className="rounded" src={'https:' + image.fields.file.url} alt={slug} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height}></Image>
                </div>
                <div className="p-[15px]">
                    <h4 className="mt-[15px] font-extrabold text-xl group-hover:text-blue-500 transition-colors">{title}</h4>
                    <span>
                        Posted on {" "}
                        {
                            new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        }
                    </span>
                </div>
            </Link>
        </div>
    )
}
