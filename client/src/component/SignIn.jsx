import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3055/users/signin",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error signing in:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[450px] h-[400px] flex flex-col items-center border border-purple-400">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-full">
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
            className="text-center  border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
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
        Don't have an account?{" "}
        <Link to="/signup" className="text-purple-600 hover:underline">
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
};
