import React from "react";
import { List } from "../Food/MenuList";
import Items from "../Component/Items";
import "../css/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="title">Our Menu</h1>
      <div className="list">
        {List.map((menuItem, key) => {
          return (
            <Items
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;