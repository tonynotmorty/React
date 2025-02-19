import React from "react";

export default function Header() {
  return (
    <header className="w-full mb-1 text-white">
      {/*<DarkModeToggleButton/>*/}
      <nav className="bg-[#333333] py-1 flex justify-start dark:bg-slate-800">
        <ul className="flex justify-around min-w-[300px] max-w-[600px]">
          <li>
            <a href="#"> Prologue </a>
          </li>
          <li>
            <a href="#"> Blog </a>
          </li>
          <li>
            <a href="#"> Post </a>
          </li>
          <li>
            <a href="#"> Post2 </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
