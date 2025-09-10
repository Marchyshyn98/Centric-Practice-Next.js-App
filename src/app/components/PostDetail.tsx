import type { PostType } from "../../shared/types/post.type";
import type { Comment } from "@/shared/types/comment.interface";
import styles from "../styles/PostDetail.module.css"
import Link from "next/link";

interface Props {
    post: PostType,
    comments: Comment[]
}

export function PostDetail({ post, comments }: Props) {

    return (
        <div>
            <h3>{post.title}</h3>
            <p className="mb-[50px]">{post.body}</p>
            <div className={styles.postComments}>
                <h3>Comments:</h3>
                {comments.map((comment: Comment) => {
                    return (
                        <div key={comment.id} className={styles.commentBox + " w-2/3 mx-0 my-[20px] px-[10px] py-[15px]"}>
                            <h5>{comment.name}</h5>
                            <Link href={"mailto:" + comment.email} className={styles.commentEmail + " mb-[15px]"}>{comment.email}</Link>
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
