import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    console.log('placing order')
    router.push('/product')
  }

  return (
    <>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <span>Blog</span>
      </Link>
      <br />
      <Link href='/product'>
        <span>products</span>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
