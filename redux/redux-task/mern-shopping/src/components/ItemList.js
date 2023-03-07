import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ItemList;
