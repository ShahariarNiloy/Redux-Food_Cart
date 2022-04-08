import React from "react";
import "./style.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo";

function Banner({ handleScrollMenu }: any) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious Food For Cravings</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={bannerImg} alt="bannerImage" className="header-img" />
    </header>
  );
}

export default Banner;
