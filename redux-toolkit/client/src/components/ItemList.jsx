import Item from "./Item";
import "./itemList.css";

const ItemList = ({ items, onDelete }) => {

    return (
      <ul className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item} onDelete={onDelete} />
        ))}
      </ul>
    );
  };
  
  export default ItemList;