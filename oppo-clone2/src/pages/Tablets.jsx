import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Smartphonescard from '../components/Smartphonescard'

function Tablets() {
  const [tabdata, settabdata] = useState([])

  const getDataFromServer = () => {
    axios.get("http://localhost:3000/tablet")
      .then((res) => {
        settabdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDataFromServer();
  }, [])
  return (

    <div className="tab-box pt-[7%]">
      <h1 className='pt-12 sm:pt-0 text-center text-2xl font-medium'>Latest OPPO Tablets</h1>
      <p className='text-center pt-3 text-lg text-gray-500'>Explore the latest tablets from OPPO India.</p>
      <div className="divide-box mt-12 grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4 
        2xl:grid-cols-5 
        gap-6 sm:ps-12 ">
        {tabdata.map((smart) => (
          <Smartphonescard smart={smart} />
        ))
        }
      </div>
    </div>
  )
}

export default Tablets
