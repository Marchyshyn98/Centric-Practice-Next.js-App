import Link from "next/link";
import type { PostType } from "../../shared/types/post.type";
import styles from "../styles/Post.module.css"
import { ButtonLink } from "./ButtonLink";

interface Props {
    post: PostType
}

export function Post({ post }: Props) {
    return (
        <div className={styles.postCard + " w-1/2 mb-[30px] px-[20px] py-[15px]"}>
            <h3>{post.id}. {post.title}</h3>
            <p className="mb-[20px]">{post.body}</p>
            <ButtonLink link={"/posts/" + post.id}>Details</ButtonLink>
        </div>
    )
}
