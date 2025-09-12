import type { PostType } from "../../shared/types/post.type";
import { ButtonLink } from "./ButtonLink";

interface Props {
    post: PostType
}

export function Post({ post }: Props) {
    return (
        <div className="bg-(--bg-card) rounded-md w-full lg:w-1/2 mb-8 px-5 pt-2 pb-7">
            <h3 className="mb-4">{post.id}. {post.title}</h3>
            <p className="mb-6">{post.body}</p>
            <ButtonLink link={"/posts/" + post.id}>Details</ButtonLink>
        </div>
    )
}
