import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>
        Pre-rendering
      </h1>
      <Link href='/users'>
          <span>Users</span>
      </Link>
      <br />
      <Link href='/posts'>
        <span>Posts</span>
      </Link>
    </>
  )
}

export default Home 