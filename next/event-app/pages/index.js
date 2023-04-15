import { getFeaturedEvents } from "@/dummy-data"

const HomePage = () => {
  const  featuredEvents = getFeaturedEvents()

  return (
    <div className="">
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage