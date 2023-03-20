const Post = ({post}) => {
    return (
        <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const {params} = context
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    console.log(res)
    const data = await res.json()

    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const postIds = posts.map((post) => post.id);
  
    const paths = postIds.map((id) => ({ params: { postId: `${id}` } }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  

export default Post