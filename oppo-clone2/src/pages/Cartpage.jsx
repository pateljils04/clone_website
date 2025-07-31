import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeadset, FaTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";


function Cartpage() {
    const [cart, setcart] = useState([])

    const getDataFromServer = () => {
        axios.get("http://localhost:3000/cart")
            .then((res) => {
                setcart(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handelRemove = (id) => {
        axios.delete(`http://localhost:3000/cart/${id}`)
            .then((res) => {
                getDataFromServer()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handelUpdateQty = async (id, BtnType) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/cart/${id}`)
            const updateQty = BtnType == "INCREMENT" ? data.quantity + 1 : data.quantity - 1
            try {
                const res = await axios.patch(`http://localhost:3000/cart/${id}`, { quantity: updateQty })
                // console.log(res.data)
                getDataFromServer();
            } catch (error) {
                console.log(error)

            }
        } catch (error) {
            console.log(error)
        }
    }

    let totalprice = 0;
    cart.forEach((el) => totalprice += Number(el.price.replace(/[^0-9.]/g, '')) * el.quantity)
    // console.log(totalprice)

    useEffect(() => {
        getDataFromServer()
    }, [])

    return (
        <>
            <div className=" min-h-screen bg-white pt-[70px] sm:pt-[69px] md:p-[70px] text-black">
                <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Your Cart({cart.length})</h1>

                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* LEFT - Product List */}
                    <div className="flex-1 space-y-8 ">
                        {cart.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 gap-4">
                                <img src={item.image} alt={item.title} className="mx-auto sm:mx-0" height={100} width={100} />
                                <div className="flex-1 mx-auto sm:mx-0">
                                    <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
                                    <div className="flex justify-center sm:justify-normal items-center gap-2 mt-3">
                                        <button onClick={() => handelUpdateQty(item.id, "DECREMENT")} disabled={item.quantity == 1} className=" w-8 h-8 border rounded-full flex items-center justify-center"><FaMinus /></button>
                                        <span className="mx-2 text-lg font-semibold">{item.quantity}</span>
                                        <button onClick={() => handelUpdateQty(item.id, "INCREMENT")} className="w-8 h-8 border rounded-full flex items-center justify-center"><FaPlus /></button>
                                    </div>

                                </div>
                                <div className="mx-auto sm:mx-0 flex flex-col items-end gap-2">
                                    <p className="text-lg font-semibold">{item.price.toLocaleString()}</p>
                                    <button onClick={() => handelRemove(item.id)} className="text-gray-400 hover:text-red-500"><FaTrashAlt size={20} className='me-4 sm:me-0' /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT - Summary */}
                    <div className="w-full lg:w-[30%] bg-gray-50 p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-center sm:text-justify text-xl font-semibold mb-4">Total</h3>


                            <div className="flex justify-between items-center mb-6">
                                <span className="mx-auto sm:mx-0 text-xl font-semibold text-green-600">₹{totalprice}</span>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full text-lg mb-2">
                                Check out
                            </button>
                            <p className="text-center text-sm text-gray-500">Apply your coupon at checkout.</p>

                            <div className="mt-10 text-center text-sm text-gray-600 flex justify-center items-center gap-2 mb-1">
                                <FaHeadset />
                                <span>Any questions?</span>
                            </div>
                            <p className=' text-center text-sm text-gray-600'>
                                Contact us via <a href="#" className="text-blue-600 underline">Online Customer Service</a> or call <span className="font-medium">18001037733</span>.
                            </p>
                        </div>

                        {/* Support Section */}
                        {/* <div className="mt-6 text-center text-sm text-gray-600">
                            <div className="flex justify-center items-center gap-2 mb-1">
                                <FaHeadset />
                                <span>Any questions?</span>
                            </div>
                            <p>
                                Contact us via <a href="#" className="text-blue-600 underline">Online Customer Service</a> or call <span className="font-medium">18001037733</span>.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartpage
