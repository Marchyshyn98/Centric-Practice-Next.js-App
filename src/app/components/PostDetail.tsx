import type { PostType } from "../../shared/types/post.type";
import type { Comment } from "@/shared/types/comment.interface";
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
            <div>
                <h3>Comments:</h3>
                {comments.map((comment: Comment) => {
                    return (
                        <div key={comment.id} className="bg-(--bg-card) rounded-md w-2/3 mx-0 my-5 p-5">
                            <h5>{comment.name}</h5>
                            <Link href={"mailto:" + comment.email} className="underline font-[600] inline-block mb-4">{comment.email}</Link>
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
