import React, { useRef } from "react";
import CartCount from "../../components/common/CartCount";

import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Footer from "../../components/Footer";
import Banner from "../../components/Home/Banner";

function Home() {
  const menuRef = useRef<HTMLElement>();
  const handleScrollMenu = () => {
    const node = menuRef.current as any;
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCount />
    </div>
  );
}

export default Home;
