import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiForward30Line } from 'react-icons/ri'
import { TbShieldLock } from 'react-icons/tb'
import { VscTools } from 'react-icons/vsc'
import { useParams } from 'react-router-dom'

function Description() {
     const [desc, setdesc] = useState({})
    const {id}=useParams()
    const [mainImage, setMainImage] = useState(desc.image);
    // console.log(id)

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setdesc(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const handleCart=async()=>{
    try {
      const {data}= await axios.get(`http://localhost:3000/cart`)
      // console.log(data)
      const cartData=data.find((el)=>el.id==id)
      // console.log(cartData)
      if(!cartData){
        await axios.post(`http://localhost:3000/cart`,{...desc,quantity:1})
        .then((res)=>{
          alert("product added successfully");
        }).catch((err)=>{
          console.log(err)
        })
      }
      else{
        alert("Product is already in Cart")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFromServer();
  }, [])



  return (
    <>
      <div className="pt-[7%] max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-[whitesmoke] flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <img
              src={mainImage || desc.image} height={250} width={250}
              alt="OPPO A5 Pro 5G"
              className="rounded-lg mx-auto pt-10 "
            />
          
          </div>
     {/* {Thumbnail}  */}
          <div className="flex mt-4 pb-10 space-x-2">
            {desc?.sliderImg?.map((i,index) => (
              <div
                key={index} onClick={() => setMainImage(i)}
                className="border-2 border-gray-300 p-1 rounded-md hover:border-black"
              >
                <img
                  src={i}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-12 h-16 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">{desc.title}</h1>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-4 text-sm">
            Point Benefits →
          </button>

          <p className='text-gray-700 mb-2'>{desc.description}</p>

          <div className="mb-2 text-xl font-bold text-black">
            {desc.price} <span className="line-through text-gray-400 ml-2">₹21,999</span>
          </div>

          <p className="text-gray-700 mb-2">
            Or from ₹2,000/mo. with no cost EMI.{" "}
            <span className="text-blue-600 cursor-pointer">Check EMI options</span>
          </p>

          <p className="text-gray-700 mb-4">
            Instant discount up to ₹1,200.{" "}
            <span className="text-blue-600 cursor-pointer">Learn more</span>
          </p>

          <div className="bg-orange-50 p-4 rounded-lg mb-4 border border-orange-200">
            <p className="text-gray-800 font-medium">Buy with Exchange</p>
            <p className="text-sm text-gray-600">Get a new phone at a lower price</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-700">
                Exchange to save up to <strong>₹44,000</strong>
              </span>
              <button className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                Exchange
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button onClick={handleCart} className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-full font-medium">
              Add to cart
            </button>
            <button className="flex-1 bg-green-500 text-white px-6 py-3 rounded-full font-medium">
              Check Now
            </button>
          </div>
        </div>
      </div>


      <div className="mt-12 bg-gray-50 py-6 px-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div>
            <div className="flex justify-center mb-2">
              <span className="text-3xl"><RiForward30Line /></span>
            </div>
            <p className="text-sm font-medium">15 to 30 days exchange window<br />for any quality issues</p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Exchange and return policy →
            </a>
          </div>

          <div>
            <div className="flex justify-center mb-2">
              <span className="text-3xl"><VscTools /></span>
            </div>
            <p className="text-sm font-medium">6-12 months<br />authorized Warranty</p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              OPPO Warranty Policy →
            </a>
          </div>

  
          <div>
            <div className="flex justify-center mb-2">
              <span className="text-3xl"><TbShieldLock /></span>
            </div>
            <p className="text-sm font-medium">Secure and various<br />payment methods</p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description
