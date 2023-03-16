import Link from "next/link";

const ProductList = ({productId = 4}) => {
    const handleClick = () => {

    }


  return (
    <div>
      <Link href="/">
        <span>Home</span>
      </Link>

      <Link href="/product/1">
        <h1>Product1</h1>
      </Link>

      <Link href="/product/2">
        <h1>Product2</h1>
      </Link>
      <Link href='/product/3'>
        <h1>Product3</h1>
      </Link>
      <Link href={`/product/${productId}`}>
        <h1>Product{productId}</h1>
      </Link>

      
    </div>
  );
};

export default ProductList;
