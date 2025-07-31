import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Smartphonescard from '../components/Smartphonescard'

function Smartphones() {
  const [data, setdata] = useState([])

  const getDataFromServer = () => {
    axios.get(" http://localhost:3000/smartphones")
      .then((res) => {
        setdata(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getDataFromServer();
  }, [])
  return (
    <>
      <div className="smartphone-mainBox pt-[7%]">
        <h1 className='pt-[8%] sm:pt-0 text-center text-2xl font-medium'>
          Latest Smartphone Models
        </h1>
        <div className="row-smartphone ">
          <p className='text-center pt-3 text-lg text-gray-500'>Explore the latest models available from OPPO India. </p>
          <div className="divide-box text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6 ps-[20px] pe-[20px] mt-[50px]">
            {data.map((smart) => (
              <Smartphonescard smart={smart} />
            ))
            }
          </div>

        </div>
      </div>

    </>
  )
}

export default Smartphones
