import "./item.css"

const Item = ({ item, onDelete }) => {
    const handleDeleteClick = () => {
      onDelete(item);
    };
  
    return (
      <li className="item">
        {item} <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  };
  
  export default Item;