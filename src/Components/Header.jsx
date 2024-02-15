import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  console.log();
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
  }, [location]);
  return (
    <>
      <header onClick={() => menu && setMenu(false)}>
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="https://icons4web.com/wp-content/uploads/2017/10/Movie-golden-icon-161909.jpg"
            alt=""
          />
          <h1>CineScore</h1>
        </div>

        <Search styles={"searchNav"} />

        <i
          class={menu ? "ri-menu-4-line" : "ri-menu-3-line"}
          onClick={() => setMenu((prev) => !prev)}
        ></i>
      </header>
      {menu && (
        <nav>
          <Search styles={"phoneNav"} />
          {/* <button>Home</button> */}
        </nav>
      )}
    </>
  );
}

export default Header;
