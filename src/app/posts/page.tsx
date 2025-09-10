import { PostType } from "@/shared/types/post.type";
import { getPosts } from "../(server)/api";
import { Post } from "../components/Post";

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="pt-[50px]">
            {posts.map((post: PostType) => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </div>
    )
}
