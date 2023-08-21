import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="hidden md:flex items-center justify-between py-8 px-2 md:px-40">
      <a href="/">
        <img
          src="./assets/logo.png"
          alt="logo"
          className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
        />
      </a>
      <nav>
        <section className="menu flex">
          <div
            className="space-y-2"
            onClick={() => setIsNavbarOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavbarOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavbarOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/page1">Page 1</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/page2">Page 2</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/page3">Page 3</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
