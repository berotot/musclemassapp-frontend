import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="mb-[75px]">
      <div
        className={`flex   w-full fixed top-0 left-0 z-50 bg-[#F5F7F8]  justify-between items-center p-4   ${
          scroll ? "shadow-md" : ""
        }`}
      >
        <div>
          <img
            className="h-[45px]"
            src={`${process.env.PUBLIC_URL}/Logo.png`}
            alt="logo"
          />
        </div>
        <ul className="sm:flex hidden gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Scores</li>
          <li className="cursor-pointer">Login</li>
        </ul>
        <div className="sm:hidden relative">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            <img
              className="h-[45px]"
              src={`${process.env.PUBLIC_URL}/Menu.png`}
              alt="Menu"
            />
          </div>
          {menuOpen && (
            <ul className="absolute top-full right-0 bg-white shadow-md rounded-md mt-2 p-4 space-y-2">
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Home
              </li>
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Scores
              </li>
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Login
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
