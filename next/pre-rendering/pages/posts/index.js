import Link from "next/link"

const PostList = ({posts}) => {
    return (
        <>
            <h1>List of Posts</h1>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            
                            <Link href={`/posts/${post.id}`} passHref>
                            <h2>User: {post.userId} post: {post.id} title: {post.title}</h2>
                            </Link>
                            
                            <h3></h3>
                            <hr />
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props : {posts: data}
    }
}

export default PostList