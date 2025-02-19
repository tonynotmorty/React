import React from "react";
import { useState, useEffect } from "react";
export default function Banner() {
  
const [theme, setTheme] = useState("light");

useEffect(() => { 
	if(window.matchMedia(('(prefers-color-scheme: dark)').matches)){
	 setTheme('light');
	}
	else{
	  setTheme('dark'); 
	}
	}, [])



useEffect(() => {
	if (theme === "dark") {
	    document.documentElement.classList.add("dark");
	} else { 
	    document.documentElement.classList.remove("dark");
  }
} ,[theme]); 

const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
};


  return (

    <div className="w-full bg-blue-500 flex flex-col py-[30px] justify-center items-center dark:bg-slate-800">
       <div className ="w-full flex justify-end">
       <button className="flex border-0 py-1 px-3 ml-[1350px rounded text-base mt-4 md:mt-0
                focus:outline-none
                bg-gray-100
                hover:bg-gray-50
                hover:text-orange-500
                dark:bg-slate-600
                dark:text-slate-400
                dark:hover:bg-slate-700
                dark:hover:text-yellow-300
                " onClick ={handleThemeSwitch} 
                type="button">
                {/* 라이트 모드 */}
                <svg xmlns="http://www.w3.org/2000/svg"
                        className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                  {/* 다크모드 */}
                  <svg xmlns="http://www.w3.org/2000/svg"
                     className="visible dark:visible dark:h-5 dark:w-5 h-0 w-0"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                </button>
                </div>
                
      <h1 className="text-[48px] font-bold dark:text-slate-50">
        <a href="/">Miyu Blog</a>
      </h1>
      <p className="text-[14px] font-bold mt-3 dark:text-slate-50">
        씹덕 기질이 있으시면 제 블로그를 자주 와주세용
      </p>
    </div>
  );
}
