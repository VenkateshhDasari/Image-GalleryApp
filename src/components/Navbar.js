import { useState } from 'react';
import '../index.css'

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navbarBgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const navbarTextColor = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <nav className={`flex items-center justify-between flex-wrap ${navbarBgColor} p-6`}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <h1 className={`${navbarTextColor} text-xl font-bold ml-2`}>Image Gallery</h1>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <form action="/" method="get">
            
          </form>
        </div>
        <div className="text-sm lg:flex-grow lg:ml-10">
          <ul className="flex flex-wrap justify-center lg:justify-end">
            <li className="mr-3">
              <a href="/" className={`${navbarTextColor} block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold hover:text-gray-600 mr-4`}>Explore</a>
            </li>
            <li className="mr-3">
              <a href="/" className={`${navbarTextColor} block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold hover:text-gray-600 mr-4`}>Collection</a>
            </li>
            <li className="mr-3">
              <a href="/" className={`${navbarTextColor} block mt-4 lg:inline-block lg:mt-0 text-lg font-semibold hover:text-gray-600`}>Community</a>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={toggleDarkMode} className="ml-3 p-2 text-white bg-gray-900 rounded-full focus:outline-none">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>

  );
}
