import { useRouter } from "next/router"

const EventDetails = () => {
    const router = useRouter()

    return (
        <div className="">
            <h1>event details {router.query.eventId}</h1>
        </div> 
    )
}

export default EventDetails