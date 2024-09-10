import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-slate-900">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">Mini Blog</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog/create" className="text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {menu && (
          <div className="mobile-menu md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blogs/create"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
