import React, { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "*", path: "No found" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(true)}>
        {
            open === true ? 'Open' : 'close'
        }
        <FaBars className="text-2xl"></FaBars>
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
