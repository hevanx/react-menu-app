import PropTypes from "prop-types";
import Menu from "../Menu";

const MenuApp = ({ data }) => {
  return (
    <div className="App">
      {data.map((menu, index) => (
        <Menu key={index} menuName={menu.menuName} menuItems={menu.menuItems} />
      ))}
    </div>
  );
};


MenuApp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      menuName: PropTypes.string.isRequired,
      menuItems: PropTypes.arrayOf(
        PropTypes.shape({
          itemId: PropTypes.number.isRequired,
          itemPrice: PropTypes.string.isRequired,
          itemName: PropTypes.string.isRequired,
          itemDescription: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MenuApp;
