"use client";
import Link from "next/link";
import React, { useState } from "react";

function LoginPage() {
    
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleLogin = () => {}

  return (
    <div className="flex flex-col justify-center text-center px-4 gap-4 ">
      <h2>Login to like and comment on the posts. </h2>
      <input
        className="  rounded-md p-2 mx-auto my-2 
      bg-slate-100 dark:bg-slate-800 bg-opacity-100 
    shadow-md shadow-teal-200 dark:shadow-teal-800"
        type="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        className="  rounded-md p-2 mx-auto my-2 
        bg-slate-100 dark:bg-slate-800 bg-opacity-100 
      shadow-md shadow-teal-100 dark:shadow-teal-800"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <button className="mx-auto  rounded-md px-2 py-1
       bg-slate-100
       dark:bg-slate-800 
       border border-transparent hover:border-inherit
      hover:shadow-md shadow-teal-100 dark:shadow-teal-800"
      onClick={handleLogin}>
        Login
      </button>

        <Link
          href="/signup"
          className="hover:font-semibold dark:hover:text-teal-400 hover:text-teal-700"
        >
          Create an account
        </Link>
    </div>
  );
}

export default LoginPage;
