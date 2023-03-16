import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <span>Blog</span>
      </Link>
      <Link href='/product'>
        <span>products</span>
      </Link>
    </>
  );
};

export default Home;
