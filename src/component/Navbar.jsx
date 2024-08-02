import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate()
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

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    Cookies.remove('accessToken', { expires: 0 });
    alert('Berhasil melakukan logout');
    // dispatch(reset());
    navigate('/');
  };
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
          <li onClick={()=>navigate('/')} className="cursor-pointer">Home</li>
          <li onClick={()=>navigate('/leaderboard')} className="cursor-pointer">Scores</li>
          <li onClick={()=>navigate('/aktivitas')} className="cursor-pointer">aktivitas</li>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleToggle} />
      )}
            <div className={`fixed top-0 left-0 h-full bg-white shadow-md z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <ul className="mt-16 space-y-2 p-4">
                <li onClick={() => navigate('/')} className="cursor-pointer">Home</li>
                <li onClick={() => navigate('/leaderboard')} className="cursor-pointer">Scores</li>
                <li onClick={() => navigate('/aktivitas')} className="cursor-pointer">Aktivitas</li>
                <li onClick={handleLogout} className="cursor-pointer">Logout</li>
              </ul>
            </div>
 
        </div>
      </div>
    </nav>
  );
};
