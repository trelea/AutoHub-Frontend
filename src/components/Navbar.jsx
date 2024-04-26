import { useState } from "react";
import logo from "../assets/logo.png"
import { IoPersonAdd } from "react-icons/io5";

export const Navbar = () => {
    const [] = useState()
    return (
        <div className="navbar bg-base-100 flex justify-center pb-0">

            <div className="flex flex-col w-[1080px]">
                
                <div className="flex w-full justify-between items-center">
                    <div className="">
                        <a className="">
                            <img className="h-20" src={logo} alt="" />
                        </a>
                    </div>


                    <div className="hidden md:flex md:gap-6">
                        <button className="btn btn-outline btn-primary rounded-full px-8">Info</button>
                        <button className="btn btn-active btn-primary rounded-full px-8">Primary</button>
                        <select className="select select-primary w-full max-w-xs rounded-full">
                            <option disabled selected>Select language</option>
                            <option>English</option>
                            <option>Romanian</option>
                            <option>Russian</option>
                        </select>
                        
                    </div>                

                    <div className="md:hidden flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div> 
                </div>

                <div className="hidden md:flex md:w-full md:justify-start mt-2">
                    <ul className="flex">
                        <li className="border-b-2 border-primary p-2"><a href="" className="text-md font-semibold px-1 lg:px-2">Home</a></li>
                        <li className="p-2"><a href="" className="text-md font-semibold px-1 lg:px-2">Find Cars</a></li>
                        <li className="p-2"><a href="" className="text-md font-semibold px-1 lg:px-2">Auctions</a></li>
                        <li className="p-2"><a href="" className="text-md font-semibold px-1 lg:px-2">Sell</a></li>
                    </ul>
                </div>
                
            </div>

        </div>
    )
}