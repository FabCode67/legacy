import { createPost } from "@/app/actions/post";
import PostForm from "@/components/post-form"
import { title } from "process";

export default function PostsCreate() {
    return (
        <main className="flex min-h-screen flex-col items-start p-24">
            <div className="mb-32 text-center lg:max-w-5xl lg:mb-0 lg:grid-cols-4 lg:text-left">
                <PostForm formAction={createPost} initialData={{ title:'', content:''}} />
            </div>
        </main>
    )
}
