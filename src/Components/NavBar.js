import React from "react";

const NavBar = () => {
  const navBar = [
    { name: "Home", url: "/" },
    { name: "About Me", url: "about" },
    { name: "Work Experiences", url: "experiences" },
    { name: "Achievements", url: "achievements" },
    { name: "Contact Me", url: "contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-gray-800">
      <div className="mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <a href="/">LBZ</a>
          </div>
          <ul className="flex space-x-4">
            {navBar.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.url}`}
                  className="text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
