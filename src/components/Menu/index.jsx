import PropTypes from "prop-types";
import MenuItem from "../MenuItem";

const Menu = ({ menuName, menuItems }) => {
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menuItems">
        {menuItems.map((item) => (
          <MenuItem key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
};


Menu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number.isRequired,
      itemPrice: PropTypes.string.isRequired,
      itemName: PropTypes.string.isRequired,
      itemDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;

