import { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, addItem, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

const ShoppingList = ({ item, getItems, addItem, deleteItem }) => {
  useEffect(() => {
    getItems();
  }, []);

  const onDeleteClick = (id) => {
    console.log(id);
    deleteItem(id);
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {item.items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => onDeleteClick(id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, addItem, deleteItem })(
  ShoppingList
);
