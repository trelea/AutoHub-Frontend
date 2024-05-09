import { useState } from "react";
import logo from "../assets/logo.png"
import { IoPersonAdd } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { IoEarthOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { LoginModal } from "./LoginModal";


export const Navbar = () => {
    const [panel, setPanel] = useState(false)
    const [login, setLogin] = useState(false)

    console.log(window.location.pathname)

    const previewPanel = () => {
        setPanel(!panel)
        if (!panel) document.body.classList.add('overflow-hidden')
        if (panel) document.body.classList.remove('overflow-hidden')
    }

    return (
        <>
            <div className="navbar bg-base-100 flex justify-center pb-0 border-b border-gray-300">
                <div className="flex flex-col w-[1280px] md:px-2">
                    
                    <div className="flex w-full justify-between items-center" >
                        <div className="">
                            <a className="" href="/">
                                <img className="h-20" src={logo} alt="" />
                            </a>
                        </div>


                        <div className="hidden md:flex md:gap-6">
                            <button 
                                className="btn btn-outline btn-primary rounded-full px-8"
                                onClick={() => setLogin(true)}>Login</button>

                            <Link 
                                to={'/register'}
                                reloadDocument
                                preventScrollReset>
                                <button className="btn btn-active btn-primary rounded-full p-0 px-8">
                                    <div className="flex gap-2">
                                        <h1>Register</h1>
                                        <IoPersonAdd />    
                                    </div> 
                                    
                                </button>
                            </Link>

                            <select className="select select-primary w-full max-w-xs rounded-full">
                                <option disabled selected hidden>Select language</option>
                                <option>English</option>
                                <option>Romanian</option>
                                <option>Russian</option>
                            </select>
                            
                        </div>                

                        <div className="md:hidden flex-none">
                            <button className="btn btn-square btn-ghost" onClick={() => previewPanel()}>
                                {
                                    panel ? <IoMdClose fontSize={'1rem'}/> : <RxHamburgerMenu fontSize={'1rem'}/>
                                }
                            </button>
                        </div> 
                    </div>

                    <div className="hidden md:flex md:w-full md:justify-start mt-2">
                        <ul className="flex">
                            <Link to={'/'} reloadDocument>
                                <li 
                                    className={`text-md font-semibold px-4 pb-1 ${(window.location.pathname === '/') ? 
                                        'border-b-4 border-primary' : 
                                        'hover:border-b-4 hover:pb-1 hover:border-primary' }`}>Home</li>
                            </Link>
                            
                            <Link to={'/findcar/advanced'} reloadDocument>
                                <li 
                                    className={`text-md font-semibold px-4 pb-1 ${(window.location.pathname === '/findcar/advanced') ? 
                                        'border-b-4 border-primary' : 
                                        'hover:border-b-4 hover:pb-1 hover:border-primary' }`}>Find Cars</li>
                            </Link>

                            <Link to={'/auctions?page=1&limit=20'} reloadDocument>
                                <li 
                                    className={`text-md font-semibold px-4 pb-1 ${((window.location.pathname === '/auctions') || (window.location.pathname === '/car/info')) ? 
                                        'border-b-4 border-primary' : 
                                        'hover:border-b-4 hover:pb-1 hover:border-primary' }`}>Auctions</li>
                            </Link>

                            <Link to={'/'} reloadDocument>
                                <li 
                                    className={`text-md font-semibold px-4 pb-1 ${(window.location.pathname === '') ? 
                                        'border-b-4 border-primary' : 
                                        'hover:border-b-4 hover:pb-1 hover:border-primary' }`}>Sell</li>
                            </Link>
                            
                        </ul>
                    </div>
                    
                    <div className={`${panel ? 'flex' : 'hidden'} md:hidden flex-col gap-80 fixed h-screen w-screen bg-white z-50 mt-20 border-t border-gray-200`}>
                        <ul className="flex flex-col text-lg font-normal">
                                
                            <Link to={'/'} reloadDocument>
                                <li className="py-4 px-4 border-b hover:border-l-4 hover:border-l-primary hover:pl-3 hover:bg-gray-200">Home</li>
                            </Link>

                            <Link to={'/findcar/advanced'} reloadDocument>
                                <li className="py-4 px-4 border-b hover:border-l-4 hover:border-l-primary hover:pl-3 hover:bg-gray-200">Find Cars</li>
                            </Link>

                            <Link to={'/auctions?page=1&limit=20'} reloadDocument>
                                <li className="py-4 px-4 border-b hover:border-l-4 hover:border-l-primary hover:pl-3 hover:bg-gray-200">Auctions</li>
                            </Link>

                            <Link to={'/'} reloadDocument>
                                <li className="py-4 px-4 border-b hover:border-l-4 hover:border-l-primary hover:pl-3 hover:bg-gray-200">Sell</li>
                            </Link>

                            <li className="py-4 px-4 border-b hover:border-l-4 hover:border-l-primary hover:pl-3 hover:bg-gray-200 flex justify-between items-center gap-4">
                                <IoEarthOutline fontSize={'2rem'} />
                                <select className="select select-bordered w-full">
                                    <option disabled selected hidden>Select language</option>
                                    <option>English</option>
                                    <option>Romanian</option>
                                    <option>Russian</option>
                                </select>
                            </li>

                        </ul>
                        <div className="w-full flex justify-between px-3 gap-4">
                            <button 
                                className="btn btn-outline btn-primary flex-1 rounded-full"
                                onClick={() => {
                                    setLogin(true)
                                    setPanel(false)
                                    
                                }}>
                                Login
                            </button>
                            <button className="btn btn-primary flex flex-1 rounded-full">
                                <Link
                                to={'/register'}
                                reloadDocument
                                preventScrollReset
                                className="flex gap-1">
                                    <h1>Register</h1>
                                    <IoPersonAdd />
                                </Link>
                                
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            
            { login && <LoginModal setLogin={setLogin} />}
        </>
        
    )
}