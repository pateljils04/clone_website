import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";

// import "../style/Navbar.css"
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <div style={{ position:"fixed", width:"100%",padding: "0px 24px",paddingBottom:"10px", display: "flex", justifyContent: "space-between",zIndex:"10",backgroundColor:"white" }}>
        //     <div style={{ padding: "0px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        //         <div className="logo">
        //             <Link to="/" className='font-serif'>oppo</Link>
        //         </div>
        //         <div className='Nav-Link'>
        //             <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/smartphones">Smartphones</Link>
        //             <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/tablets">Tablets</Link>
        //             <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/audio">Audio</Link>
        //             <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/accessories">Accessories</Link>
        //             <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/product">OPPO Products</Link>
        //             {/* <Link className='hover:text-black hover:border-b-2 hover:border-black hover:py-5 ' to="/about">About OPPO</Link> */}
        //         </div>
        //     </div>

        //     <div style={{display: "flex", justifyContent: "space-between",alignItems:"center" }}>

        //         <div style={{ marginTop: "10px", padding: "18px", border: "1px solid black", display: "flex", height: "30px", alignItems: "center", borderRadius: "25px", justifyContent: "space-between" }}>
        //             <CiSearch />  <input placeholder='Search OPPO.com' type="text" style={{ outline: "none", border: "none", paddingLeft: "3px", display: "inline-block" }} />
        //         </div>
        //         <div style={{ marginTop: "10px",padding:"0px 10px", display:"flex"  }}>
        //             <FaRegUserCircle size={20} className='me-4' />
        //            <Link to="/cart"><RiShoppingBag4Line size={20} /></Link> 
        //         </div>
        //     </div>

        // </div>

        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-4 py-2 md:px-6 xl:px-12">
            <div className="flex items-center justify-between">
                {/* Logo & Nav Links (desktop) */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-black text-2xl sm:text-[35px] font-serif">oppo</Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-4 text-gray-600 font-medium text-sm xl:text-base ">
                        <Link className="hover:text-black  py-2" to="/smartphones">Smartphones</Link>
                        <Link className="hover:text-black  py-2" to="/tablets">Tablets</Link>
                        <Link className="hover:text-black  py-2" to="/audio">Audio</Link>
                        <Link className="hover:text-black  py-2" to="/accessories">Accessories</Link>
                        <Link className="hover:text-black  py-2" to="/product">OPPO Products</Link>
                    </div>
                </div>

                {/* Search & Icons */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar for md+ */}
                    <div className="hidden sm:flex items-center border border-black rounded-full px-4 py-1">
                        <CiSearch />
                        <input
                            type="text"
                            placeholder="Search OPPO.com"
                            className="outline-none border-none bg-transparent text-sm ml-2 w-[100px] md:w-[140px]"
                        />
                    </div>

                    {/* Icons */}
                    <FaRegUserCircle size={20} />
                    <Link to="/cart">
                        <RiShoppingBag4Line size={20} />
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden focus:outline-none"
                    >
                        {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-2 space-y-2 text-gray-700 text-sm font-medium">
                    <Link to="/smartphones" className="pt-4 pb-2 block hover:text-black">Smartphones</Link>
                    <Link to="/tablets" className="pb-2 block hover:text-black">Tablets</Link>
                    <Link to="/audio" className="pb-2 block hover:text-black">Audio</Link>
                    <Link to="/accessories" className="pb-2 block hover:text-black">Accessories</Link>
                    <Link to="/product" className="pb-2 block hover:text-black">OPPO Products</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar