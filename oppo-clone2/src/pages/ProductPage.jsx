// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { CiSearch } from 'react-icons/ci'
// import Productcard from '../components/Productcard'
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

// function ProductPage() {
//     const [product, setproduct] = useState([]);
//     const [category,setcategory]=useState(null)
//     const [series,setseries]=useState(null);
//     const [battery,setbattery]=useState(null);
//     const [memory,setmemory]=useState(null);
//     // const [support,setsupport]=useState(null);
//     const [search,setsearch]=useState("");
//     const [page,setpage]=useState(1)

//     // console.log(search)
//     const Getdatafromserver = () => {
//         axios.get("http://localhost:3000/products",{
//             params:{
//                  category,
//                  series,
//                  battery,
//                  memory,
//                  q:search,
//                  _limit:6,
//                  _page:page
//             }
//         })
//             .then((res) => {
//                 setproduct(res.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         Getdatafromserver();
//     }, [category,series,battery,memory,search,page])
//     return (
//         <div className='product-main pt-[8%]' >
//             <div className='flex text- items-center border border-gray-500 mx-auto rounded-3xl w-[55%]'>
//                 <CiSearch className='ms-8' />  <input type="text" onChange={(e)=>setsearch(e.target.value)} className=' outline-none p-3 ' placeholder='Search oppo.com' />
//             </div>

//             <div className="main-pr flex">
//                 <div className="Left-side h-full m-[60px] border border-gray">
//                     <div className="logo-filter p-5 flex ">
//                         <div>
//                             <p className='ps-6 '>#Filter by</p>
//                         </div>
//                         <p className='ps-[100px]'>Reset @</p>

//                     </div>
//                     <hr className='border-t-gray-300' />

//                     {/* Category */}
//                     <div className="category pt-2 pb-4 pr-10 pl-10">
//                         <p className='text-lg font-medium'>Category</p>
//                         <div className="filter-box ">
//                             <div className='mt-2 p-3 flex justify-between'>
//                                 <p>Smartphones</p>
//                                 <div>
//                                     <input type="radio" value="smartphones" onChange={(e)=>setcategory(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className='p-3 flex justify-between'>
//                                 <p>Audio</p>
//                                 <div>
//                                     <input type="radio" value="audio" onChange={(e)=>setcategory(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className=' p-3 flex justify-between'>
//                                 <p>Wearables</p>
//                                 <div>
//                                     <input type="radio" onChange={(e)=>setcategory(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className='p-3 flex justify-between'>
//                                 <p>Accessories</p>
//                                 <div>
//                                     <input type="radio" value="accessories" onChange={(e)=>setcategory(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className='p-3 flex justify-between'>
//                                 <p>Tablets</p>
//                                 <div>
//                                     <input type="radio" value="tablets" onChange={(e)=>setcategory(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <hr className='border-t-gray-300' />

//                     {/* porduct */}
//                     <div className=' pt-2 pb-4 pr-10 pl-10'>
//                         <p className='text-lg font-medium'>Product Series</p>
//                         <div className="filter-box ">
//                             <div className='mt-2 p-3 flex justify-between'>
//                                 <p>Find N Series</p>
//                                 <div>
//                                     <input type="radio" value="Find N Series" onChange={(e)=>setseries(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className='p-3 flex justify-between'>
//                                 <p>Reno Series</p>
//                                 <div>
//                                     <input type="radio" value="Reno Series" onChange={(e)=>setseries(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className=' p-3 flex justify-between'>
//                                 <p>A Series</p>
//                                 <div>
//                                     <input type="radio" value="A Series" onChange={(e)=>setseries(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className=' p-3 flex justify-between'>
//                                 <p>K Series</p>
//                                 <div>
//                                     <input type="radio" value="K Series" onChange={(e)=>setseries(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                             <div className=' p-3 flex justify-between'>
//                                 <p>F Series</p>
//                                 <div>
//                                     <input type="radio" value="F Series" onChange={(e)=>setseries(e.target.value)} className='' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-t-gray-300' />
//                     {/* specification */}
//                     <div className=' pt-2 pb-4 pr-10 pl-10'>
//                         <p className='text-lg font-medium'>Specification</p>

//                         <div className=' p-3 mt-2 '>
//                             <p>Battery</p>
//                             <div className='pt-3'>
//                                 <ul className='ps-5  text-gray-500'>
//                                     <li className='pb-2' value='4000-4400mAh' onClick={(e)=>setbattery(e.target.value)}>4000-4400mAh</li>
//                                     <li className='pb-2' value='4400-4800mAh' onClick={(e)=>setbattery(e.target.value)}>4400-4800mAh</li>
//                                     <li className='pb-2' value='4800-5000mAh' onClick={(e)=>setbattery(e.target.value)}>4800-5000mAh</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className=' ps-3 mt-2 '>
//                             <p>Memory</p>
//                             <div className='pt-3'>
//                                 <ul className='ps-5  text-gray-500'>
//                                     <li className='pb-2' value='6GB 128GB' onClick={(e)=>setmemory(e.target.value)}>6GB+128GB</li>
//                                     <li className='pb-2' value='8GB 128GB' onClick={(e)=>setmemory(e.target.value)}>8GB+128GB</li>
//                                     <li className='pb-2' value='8GB 256GB' onClick={(e)=>setmemory(e.target.value)}>8GB+256GB</li>
//                                     <li className='pb-2' value='12GB 256GB' onClick={(e)=>setmemory(e.target.value)}>12GB+256GB</li>
//                                     <li className='pb-2'>Other</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className=' ps-3 mt-2 '>
//                             <p>Support 5G</p>
//                             <div className='pt-3'>
//                                 <ul className='ps-5  text-gray-500'>
//                                     <li className='pb-2' value='5G' >5G</li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div className='Right-side grid grid-cols-2 gap-5 ms-0 m-[60px] ' >
//                     {product.map((product) => (
//                         <Productcard product={product} />
//                     ))}

//                 </div>
//             </div>
//                     <div className='Pagechanger flex justify-center items-center mb-8 gap-6'>
//                       <button disabled={page==0}> <FaLongArrowAltLeft size={50} onClick={(e)=>setpage(page-1)} className='border-2 p-2 border-black rounded-3xl' /></button> <p className='text-3xl'>{page}</p>
//                       <button disabled={page==6}><FaLongArrowAltRight onClick={(e)=>setpage(page+1)} size={50} className='border-2 p-2 border-black rounded-3xl' /></button>
//                     </div>
//         </div>
//     )
// }

// export default ProductPage


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Productcard from '../components/Productcard'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { useSearchParams } from 'react-router-dom';

function ProductPage() {
    const [searchParams,setsearchParams]=useSearchParams();
        // const [seriesParams,setseriesParams]=useSearchParams();
    const [product, setproduct] = useState([]);
    const [category, setcategory] = useState(null)
    const [series, setseries] = useState(null);
    const [battery, setbattery] = useState(null);
    const [memory, setmemory] = useState(null);
    const [search, setsearch] = useState("");
    const [page, setpage] = useState(1)
    //   console.log(category)

    const Getdatafromserver = () => {
        axios.get("http://localhost:3000/products", {
            params: {
                category:searchParams.getAll("category"),
                series:searchParams.getAll("series"),
                battery,
                memory,
                q: search,
                _limit: 6,
                _page: page
            }
        })
            .then((res) => {
                setproduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        Getdatafromserver();
    }, [battery, memory, search, page,searchParams])

    return (
        <div className=' px-4 sm:pt-[10%] sm:px-6 md:px-10 lg:px-16 xl:px-20'>

            <div className='flex items-center border border-gray-500 mx-auto rounded-3xl w-full max-w-2xl'>
                <CiSearch className='ms-4' />
                <input type="text" onChange={(e) => setsearch(e.target.value)} className='outline-none p-3 w-full' placeholder='Search oppo.com' />
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-10">
               <Sidebar />

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 w-full lg:w-3/4'>
                    {product.map((product, index) => (
                        <Productcard key={index} product={product} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center mt-10 mb-10 gap-6'>
                <button disabled={page === 1} onClick={() => setpage(page - 1)} className='disabled:opacity-40'>
                    <FaLongArrowAltLeft size={40} className='border-2 p-2 border-black rounded-3xl' />
                </button>
                <p className='text-2xl'>{page}</p>
                <button disabled={page === 6} onClick={() => setpage(page + 1)} className='disabled:opacity-40'>
                    <FaLongArrowAltRight size={40} className='border-2 p-2 border-black rounded-3xl' />
                </button>
            </div>
        </div>
    )
}

export default ProductPage;
