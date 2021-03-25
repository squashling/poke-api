import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <ul>
        {props.navItems.map((item, i) => (
          <li key={i} onClick={() => props.changeView(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
