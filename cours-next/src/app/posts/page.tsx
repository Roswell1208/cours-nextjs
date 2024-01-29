import PostsList from '@/components/PostsList';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Liste des posts',
  description: 'Liste des posts',
}

const getData = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await posts.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
}

const PostsPage = async () => {
    const posts = await getData();

    return (
        <div>
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPage;