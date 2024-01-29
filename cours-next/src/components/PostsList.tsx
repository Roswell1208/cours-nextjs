export default function PostsList({ posts }: { posts: [] }) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: {id: number, title: string, body: string}) => (
                    <li key={post.id} style={{ margin: '50px' }}>
                        <a href={`/posts/${post.id}`}><h3>{post.title}</h3></a>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}