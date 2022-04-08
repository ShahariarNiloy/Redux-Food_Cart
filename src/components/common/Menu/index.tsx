import React, { forwardRef } from "react";
import MenuItem from "./MenuItem";
import "./styles.css";

const Menu = forwardRef(({ list }: any, ref) => {
  return (
    <main ref={ref as any}>
      {list.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  );
});

export default Menu;
