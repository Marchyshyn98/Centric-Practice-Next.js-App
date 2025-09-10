import { getCommentsById, getPostById } from "@/app/(server)/api";
import { ButtonLink } from "@/app/components/ButtonLink";
import { PostDetail } from "@/app/components/PostDetail";

interface PostPageProps {
    params: {
        id: string;
    };
}

export default async function PostDetails({ params }: PostPageProps) {
    const postId = await params.id;

    const post = await getPostById(postId);

    const comments = await getCommentsById(postId);

    return (
        <div className="pt-[30px]">
            <ButtonLink link="/posts">Back</ButtonLink>
            <h1 className="mt-[30px]">Post #{postId}</h1>
            <PostDetail post={post} comments={comments} />
        </div>
    )
}
