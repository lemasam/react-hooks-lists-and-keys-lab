import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const navLinks = links.map((link) =>(
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return (
    <div>
      <nav>{navLinks}</nav>;
    </div>
  );
}

export default NavBar;
