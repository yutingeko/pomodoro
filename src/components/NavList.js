import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  li {
    padding: 20px;
    line-height: 2rem;
  }

  i {
    margin-right: 10px;
    font-size: 2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  .nav-text {
    font-size: 2rem;
  }
`;

const NavList = React.memo(({ withText = false }) => {
  const navList = [
    {
      icon: "format_list_bulleted",
      text: "to-do list",
      path: "/todo"
    },
    {
      icon: "assessment",
      text: "analytics",
      path: "/analytics"
    },
    {
      icon: "library_music",
      text: "ringtones",
      path: "/ringtones"
    }
  ];

  return (
    <List>
      {navList.map(({ path, icon, text }) => (
        <li>
          <Link to={path}>
            <i className="material-icons">{icon}</i>
            {withText && <span className="nav-text">{text.toUpperCase()}</span>}
          </Link>
        </li>
      ))}
    </List>
  );
});

export default NavList;