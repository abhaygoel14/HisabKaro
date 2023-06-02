import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/man.png";

export default function Profile({ setViewProfile }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const userDetails=JSON.parse(localStorage.getItem("userDetails"))
    setUser(userDetails)
  }, []);

  
  return (
    <div
      className="lg:flex  hidden justify-end mt-4 items-center mr-10 cursor-pointer w-fit ml-auto hover:scale-110 duration-100 ease-out"
      onMouseEnter={() => {
        setViewProfile("block");
      }}
      onMouseLeave={() => {
        setViewProfile("hidden");
      }}
    >
      <h1 className="text-white mr-4 text-lg font-semibold">Hi, {user?.name}</h1>
      <img src={avatar} alt="user" className="h-10 bg-mj-black rounded-full" />
    </div>
  );
}
