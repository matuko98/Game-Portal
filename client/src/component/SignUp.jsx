// import { useState, useEffect } from "react";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
// import axios from "axios";

// export const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     const transformedValue =
//       name === "firstName" || name === "lastName"
//         ? capitalizeFirstLetter(value)
//         : name === "email"
//         ? value.toLowerCase()
//         : value;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: transformedValue,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     try {
//       const response = await axios.post(
//         "http://localhost:3055/users/addUser",
//         formData
//       );

//       console.log(response.data);
//     } catch (error) {
//       console.error("There was an error creating the user:", error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="bg-slate-400 flex flex-col w-[600px] h-[45vh] items-center border-[2px] border-purple-400">
//       <h1 className="text-5xl text-center font-extrabold text-white mb-12 animate-fade-in">
//         Create an Account
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="w-[500px] h-[40vh] flex-col flex justify-around "
//       >
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="first name"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-4 text-center relative bg-slate-100"
//           />
//           <FaUser className="absolute top-0 left-9 h-14" />
//         </div>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="last name"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-4  text-center relative  bg-slate-100"
//           />
//           <FaUser className="absolute top-0 left-9 h-14" />
//         </div>
//         <div className="relative">
//           <input
//             type="email"
//             placeholder="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-4  text-center relative  bg-slate-100"
//           />
//           <FaEnvelope className="absolute top-0 left-9 h-14" />
//         </div>
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-4  text-center relative  bg-slate-100"
//           />
//           <FaLock className="absolute top-0 left-9 h-14" />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
//           >
//             {showPassword ? (
//               <EyeSlashIcon className="w-5 h-5" />
//             ) : (
//               <EyeIcon className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="confirm password"
//             className="w-full p-4  text-center relative  bg-slate-100"
//           />
//           <FaLock className="absolute top-0 left-9 h-14" />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
//           >
//             {showPassword ? (
//               <EyeSlashIcon className="w-5 h-5" />
//             ) : (
//               <EyeIcon className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="cursor-pointer bg-slate-200 h-16 w-full "
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const transformedValue =
      name === "firstName" || name === "lastName"
        ? capitalizeFirstLetter(value)
        : name === "email"
        ? value.toLowerCase()
        : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: transformedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3055/users/addUser",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error creating the user:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[600px] h-auto flex flex-col items-center border border-purple-400">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-center border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <FaUser className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-center border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <FaUser className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-center border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="text-center border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <FaLock className="absolute top-3 left-3 text-gray-500" />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="text-center border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <FaLock className="absolute top-3 left-3 text-gray-500" />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white rounded-lg p-4 w-full hover:bg-purple-500 transition duration-200"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account? <Link to="/signin"> Sign In</Link>
      </p>
    </div>
  );
};
