import FormComment from "@/components/FormComment"

export default function Post({ post, comments }: { post: {title: string, body: string}, comments: [] }) {
    return (
        <div style={{ margin: '50px' }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <FormComment />

            <h2>Comments</h2>
            <ul>
                {comments.map((comment: {id: number, name: string, email: string, body: string}) => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}