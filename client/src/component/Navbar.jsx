// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/img/gamePortal.jpg";

// const loggedInLinks = [
//   { name: "Home", path: "/" },
//   { name: "Blog", path: "/Blog" },
//   { name: "About", path: "/About" },
//   { name: "Tic-Tac-Toe", path: "/Tic-Tac-Toe" },
//   { name: "Memory Game", path: "/Memory-Game" },
//   { name: "Hangman", path: "/Hangman" },
// ];

// const loggedOutLinks = [
//   { name: "Home", path: "/" },
//   { name: "Blog", path: "/Blog" },
//   { name: "About", path: "/About" },
// ];

// export const Navbar = () => {
//   const [user, setUser] = useState(false); // Simulating logged-in state
//   const [dropdown, setDropdown] = useState(false); // Toggle dropdown

//   const toggleDropdown = () => setDropdown(!dropdown);

//   return (
//     <div className="w-full h-[7vh] bg-purple-500 flex">
//       <nav className="flex w-full h-[7vh]">
//         <div className="flex w-[20%] justify-evenly items-center">
//           <h1 className="text-4xl">Game Portal</h1>
//         </div>
//         <div className="flex w-[50%] justify-center items-center ml-5">
//           <ul className="flex justify-center space-x-10">
//             {(user ? loggedInLinks : loggedOutLinks).map((link, index) => (
//               <li
//                 key={index}
//                 className="relative group hover:text-[white] [transition:0.3s]"
//               >
//                 <Link to={link.path}>{link.name}</Link>
//                 <span className="absolute w-0 h-[2px] bg-white left-0 right-0 mx-auto bottom-[-5px] opacity-0 group-hover:opacity-100 group-hover:w-[50px] transition-all duration-300 ease-in-out"></span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="relative ml-auto mr-4">
//           {user ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-purple-700 text-white px-4 py-2 rounded"
//               >
//                 Welcome, {user.name}
//               </button>
//               {dropdown && (
//                 <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link to={`/profile/${user.id}`}>Profile</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link to="/dashboard">Games Dashboard</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <button onClick={() => setUser(false)}>Log out</button>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           ) : (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-purple-700 text-white px-4 py-2 rounded mt-4 mr-7"
//               >
//                 Join Us
//               </button>
//               {dropdown && (
//                 <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link to="/signup">Sign up</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link to="/signin">Sign in</Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/img/gamePortal.jpg";

const loggedInLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/Blog" },
  { name: "About", path: "/About" },
  { name: "Tic-Tac-Toe", path: "/Tic-Tac-Toe" },
  { name: "Memory Game", path: "/Memory-Game" },
  { name: "Hangman", path: "/Hangman" },
];

const loggedOutLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/Blog" },
  { name: "About", path: "/About" },
];

export const Navbar = () => {
  const [user, setUser] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <div className="w-full h-[8vh] bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md">
      <nav className="flex justify-between items-center h-full px-8">
        {/* Logo or Brand Name */}
        <div className="flex items-center">
          <img src={logo} alt="Game Portal" className="h-10 w-10 mr-4" />
          <h1 className="text-3xl font-bold text-white">Game Portal</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <ul className="flex items-center space-x-8">
            {(user ? loggedInLinks : loggedOutLinks).map((link, index) => (
              <li
                key={index}
                className="relative group text-white hover:text-gray-300 transition-all duration-200"
              >
                <Link to={link.path} className="text-lg font-medium">
                  {link.name}
                </Link>
                <span className="absolute w-0 h-[2px] bg-white left-0 right-0 mx-auto bottom-[-5px] opacity-0 group-hover:opacity-100 group-hover:w-[50px] transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Authentication/Dropdown */}
        <div className="relative">
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-all duration-200"
              >
                Welcome, {user.name}
              </button>
              {dropdown && (
                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      to={`/profile/${user.id}`}
                      className="block text-gray-800"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/dashboard" className="block text-gray-800">
                      Games Dashboard
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button
                      onClick={() => setUser(false)}
                      className="w-full text-left text-gray-800"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-all duration-200"
              >
                Join Us
              </button>
              {dropdown && (
                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-[1]">
                  <li className="px-5 py-2 font-medium hover:bg-gray-100">
                    <Link to="/signup" className="block text-gray-800">
                      Sign up
                    </Link>
                  </li>
                  <li className="px-5 py-2 font-medium hover:bg-gray-100">
                    <Link to="/signin" className="block text-gray-800">
                      Sign in
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
