import Post from "@/components/Post";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Liste des commentaires pour un post',
  description: 'Liste des commentaires pour un post',
}

const getData = async (id: number) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const data = await post.json();
    const comments = await postComments.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { post: data, comments };
}

const PostPage = async ({ params }: {params: {id: number}}) => {
    const { post, comments } = await getData(params.id);

    return (
        <div>
            <Post post={post} comments={comments} />
        </div>
    )
}

export default PostPage;