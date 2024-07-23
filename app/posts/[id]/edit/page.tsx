import { updatePost } from "@/app/actions/post";
import PostForm from "@/components/post-form";
import { fetchPostsById } from "@/db/queries/post";

interface PostsEditProps {
    params: {
        id: string;
    };
}

export default async function PostsEdit({ params }: PostsEditProps) {
    const { id } = params;
    const post = await fetchPostsById(id)
    const updateAction = updatePost.bind(null, id)
    return (
        <main className="flex min-h-screen flex-col items-start p-24">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <PostForm formAction={updateAction} initialData={{ title: post?.title ?? '', content: post?.content ?? '' }} />
            </div>
        </main>
    )
}