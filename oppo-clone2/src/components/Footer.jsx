import React from 'react'
import { MdSupportAgent } from "react-icons/md";
// import "../style/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        // <div className='Footer-box bg-black'>
        //     <div className='footer-head'>
        //         <p>*The product pictures are for reference only, please refer to the actual product.</p>
        //         <p>*The UI is only for demonstration purposes, please refer to the UI design of actual product.</p>
        //         <hr style={{ marginTop: "40px" }} />
        //     </div>
        //     <div className='footer-nav' style={{ display: "flex", justifyContent: "space-between" }}>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>Smartphones</p>
        //             <p>OPPO Find X8 Pro</p>
        //             <p>OPPO Find X8</p>
        //             <p>OPPO Reno13 Pro 5G</p>
        //             <p>OPPO Reno13 5G</p>
        //             <p>OPPO Reno12 Pro 5G</p>
        //             <p>OPPO F29 Pro 5G</p>
        //             <p>OPPO F29 5G</p>
        //             <p>OPPO F27 Pro+ 5G</p>
        //             <p>OPPO K13 5G</p>
        //             <p>OPPO K12x 5G</p>
        //             <p>OPPO A5 Pro 5G</p>
        //             <p>OPPO A3 Pro 5G</p>
        //             <p>OPPO A3 5G</p>
        //             <p>OPPO A3x 5G</p>
        //             <p>See All Smartphones</p>
        //         </div>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>IoT Products</p>
        //             <p>OPPO Pad Air</p>
        //             <p>OPPO Enco Buds2</p>
        //             <p>OPPO Enco Air2 Pro</p>
        //         </div>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>Special Offers</p>
        //             <p>Education Discount</p>
        //         </div>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>Support</p>
        //             <p>Contact Us</p>
        //             <p>Service Centers & Reservation</p>
        //             <p>OPPO Update</p>
        //             <p>Terms and Conditions</p>
        //             <p>E-waste Management</p>
        //             <p>Security Response Center</p>
        //             <p>Warranty Policy</p>
        //             <p>Investor</p>
        //         </div>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>About OPPO</p>
        //             <p>OPPO Store</p>
        //             <p>Our Story</p>
        //             <p>Technology</p>
        //             <p>Newsroom</p>
        //             <p>Campaign</p>
        //             <p>Career</p>
        //             <p>ColorOS</p>
        //             <p>Store Locator</p>
        //         </div>
        //         <div className='first-footer'>
        //             <p style={{ color: "white", fontSize: "18px" }}>OPPO Community</p>
        //             <p>OPPO Community</p>
        //         </div>

        //     </div>



        //     <footer className="footer">
        //         <hr />
        //         <div className="footer-top">
        //             <span>Get Support From OPPO <span className="arrow">⌃</span></span>
        //         </div>

        //         <hr />

        //         <div className="footer-links">
        //             <a href="#">Privacy</a>
        //             <a href="#">Terms of Use</a>
        //             <a href="#">Terms of Sales</a>
        //             <a href="#">Cookies</a>
        //             <a href="#">Legal & Compliance</a>
        //             <span>Copyright © 2004-2025 OPPO. All rights reserved.</span>
        //         </div>

        //         <div className="footer-bottom">
        //             <div className="footer-social">
        //                 <span className="icon"><FaFacebook /></span>
        //                 <span className="icon"><FaXTwitter /></span>
        //                 <span className="icon"><FaInstagramSquare /></span>
        //                 <span className="icon"><FaYoutube /></span>
        //             </div>
        //             <div className="footer-region">
        //                 <a href="#">India (English)</a>
        //             </div>
        //         </div>

        //         <div className="floating-buttons">
        //             <div className="floating-icon">🤖</div>
        //             <div className="floating-icon">📋</div>
        //         </div>
        //     </footer>
        // </div>
        
         <div className="bg-black text-gray-400">
            {/* Disclaimer */}
            <div className="text-sm px-4 md:px-10 pt-12 pb-8 space-y-2">
                <p>*The product pictures are for reference only, please refer to the actual product.</p>
                <p>*The UI is only for demonstration purposes, please refer to the UI design of actual product.</p>
                <hr className="border-gray-700 mt-8" />
            </div>

            {/* Footer Navigation */}
            <div className="px-4 md:px-10 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
                {/* Smartphones */}
                <div>
                    <p className="text-white text-base mb-2">Smartphones</p>
                    {[
                        "OPPO Find X8 Pro", "OPPO Find X8", "OPPO Reno13 Pro 5G", "OPPO Reno13 5G", "OPPO Reno12 Pro 5G",
                        "OPPO F29 Pro 5G", "OPPO F29 5G", "OPPO F27 Pro+ 5G", "OPPO K13 5G", "OPPO K12x 5G",
                        "OPPO A5 Pro 5G", "OPPO A3 Pro 5G", "OPPO A3 5G", "OPPO A3x 5G", "See All Smartphones"
                    ].map(item => <p key={item} className="pb-2">{item}</p>)}
                </div>

                {/* IoT Products */}
                <div>
                    <p className="text-white text-base mb-2">IoT Products</p>
                    <p className="pb-2">OPPO Pad Air</p>
                    <p className="pb-2">OPPO Enco Buds2</p>
                    <p className="pb-2">OPPO Enco Air2 Pro</p>
                      <div>
                    <p className="text-white text-base mb-2">Special Offers</p>
                    <p className="pb-2">Education Discount</p>
                </div>
                </div>

                {/* Special Offers */}
              

                {/* Support */}
                <div>
                    <p className="text-white text-base mb-2">Support</p>
                    {[
                        "Contact Us", "Service Centers & Reservation", "OPPO Update", "Terms and Conditions",
                        "E-waste Management", "Security Response Center", "Warranty Policy", "Investor"
                    ].map(item => <p key={item} className="pb-2">{item}</p>)}
                </div>

                {/* About OPPO */}
                <div>
                    <p className="text-white text-base mb-2">About OPPO</p>
                    {[
                        "OPPO Store", "Our Story", "Technology", "Newsroom", "Campaign",
                        "Career", "ColorOS", "Store Locator"
                    ].map(item => <p key={item} className="pb-2">{item}</p>)}
                </div>

                {/* Community */}
                <div>
                    <p className="text-white text-base mb-2">OPPO Community</p>
                    <p className="pb-2">OPPO Community</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <footer className="text-sm px-4 md:px-10 pt-6 pb-20">
                <hr className="border-gray-700" />

                <div className="py-4">
                    <span className="text-white text-base">Get Support From OPPO <span className="text-lg">⌃</span></span>
                </div>

                <hr className="border-gray-700" />

                {/* Links */}
                <div className="flex flex-wrap gap-4 py-4 text-sm text-gray-400">
                    <a href="#">Privacy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Terms of Sales</a>
                    <a href="#">Cookies</a>
                    <a href="#">Legal & Compliance</a>
                    <span className="ml-auto">Copyright © 2004-2025 OPPO. All rights reserved.</span>
                </div>

                {/* Socials + Region */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <div className="flex space-x-4 text-xl text-gray-400">
                        <FaFacebook className="hover:text-white cursor-pointer" />
                        <FaXTwitter className="hover:text-white cursor-pointer" />
                        <FaInstagramSquare className="hover:text-white cursor-pointer" />
                        <FaYoutube className="hover:text-white cursor-pointer" />
                    </div>
                    <div className="mt-2 sm:mt-0">
                        <a href="#" className="text-white underline">India (English)</a>
                    </div>
                </div>
            </footer>

            {/* Floating Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                <div className="bg-gray-700 text-white p-3 rounded-full cursor-pointer">🤖</div>
                <div className="bg-gray-700 text-white p-3 rounded-full cursor-pointer">📋</div>
            </div>
        </div>
    )
}

export default Footer
