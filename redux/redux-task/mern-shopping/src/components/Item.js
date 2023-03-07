const Item = ({item, onDelete}) => {
    const handleDeleteClick = () => {
        onDelete(item)
    }
    return (
        <li>
            {item} <button onClick={handleDeleteClick}>Delete</button>
        </li>
    )
}

export default Item