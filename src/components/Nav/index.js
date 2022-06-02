import React from 'react';

function Nav() {

    const categories = [
        {
          name: "Portfolio",
          description:
            "A collection of some of my favorite projects that I have worked on",
        },
        {
          name: "Resume",
          description: "Click to view my resume",
        }
      ];

  return (
    <header>
    <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;