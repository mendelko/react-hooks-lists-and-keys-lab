import React from "react";

function Urls(props){
  return <a href={{link: props.link}}>{props.link}</a>
}

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksArr = links.map(link => {
    return <Urls key={link} link={link} />
  });

  return <nav>
    {linksArr}
  </nav>;
}

export default NavBar;
