import EventItem from "./EvetItem"

const EventList = (props) => {
    const {items} = props

    return (
        <ul>
            {items.map(event => <EventItem/>)}
        </ul>
    )
}
 
export default EventList