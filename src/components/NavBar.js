import React from "react";
import { nanoid } from 'nanoid';



function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
    {links.map((link) => <a href={'#'+link} key = {nanoid(5)}>{link}</a>)}
    </nav>);
}

export default NavBar;
