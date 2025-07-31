import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Sidebar() {
    const [searchParams, setsearchParams] = useSearchParams();
    const [category, setcategory] = useState(searchParams.getAll("category"))
    const [series, setseries] = useState(searchParams.getAll("series"))
    const [battery, setbattery] = useState(null);
    const [memory, setmemory] = useState(null);


    const handelchange = (e) => {
        const { value } = e.target;
        let newarray = [...category];

        if (newarray.includes(value)) {
            newarray = newarray.filter((el) => el != value);

        } else {
            newarray.push(value);
        }
        setcategory(newarray);
    };

    const handelSeries = (e) => {
        const { value } = e.target;
        let newarray = [...series];

        if (newarray.includes(value)) {
            newarray = newarray.filter((el) => el != value);

        } else {
            newarray.push(value);
        }
        setseries(newarray);
    };
    useEffect(() => {
        const params = {};

        if (category.length > 0) params.category = category;
        if (series.length > 0) params.series = series;

        setsearchParams(params);
    }, [category, series])

    const handleReset = () => {
        setcategory([]);
        setseries([]);
        setbattery(null);
        setmemory(null);
        setsearchParams({});
    };


    return (
        <div className="h-full lg:w-1/4 border p-4 rounded-md text-sm">
            <div className="flex justify-between items-center mb-4">
                <p className='font-medium'>#Filter by</p>
                <p className=' cursor-pointer' onClick={handleReset}>Reset</p>
            </div>
            <hr className='border-t-gray-300 mb-4' />

            <div className="mb-6">
                <p className='text-base font-semibold mb-2'>Category</p>
                {['Smartphones', 'Audio', 'Wearables', 'Accessories', 'Tablets'].map((item) => (
                    <div key={item} className='flex justify-between py-2'>
                        <p>{item}</p>
                        <input type="checkbox" value={item.toLowerCase()} checked={category.includes(item.toLowerCase())} onChange={handelchange} />
                    </div>
                ))}
            </div>
            <hr className='border-t-gray-300 mb-4' />
            {category == "smartphones" ? <div className='sub-smartphone'>
                <div className="mb-6">
                    <p className='text-base font-semibold mb-2'>Product Series</p>
                    {['Find N Series', 'Reno Series', 'A Series', 'K Series', 'F Series'].map((item) => (
                        <div key={item} className='flex justify-between py-2'>
                            <p>{item}</p>
                            <input type="checkbox" value={item} checked={series.includes(item)} onChange={handelSeries} />
                        </div>
                    ))}
                </div>
                <hr className='border-t-gray-300 mb-4' />

                <div className="mb-6">
                    <p className='text-base font-semibold mb-2'>Battery</p>
                    {['4000-4400mAh', '4400-4800mAh', '4800-5000mAh'].map((item) => (
                        <li key={item} className='cursor-pointer py-1 ps-4 text-gray-600' value={item} onClick={(e) => setbattery(e.target.value)}>{item}</li>
                    ))}
                </div>

                <div className="mb-6">
                    <p className='text-base font-semibold mb-2'>Memory</p>
                    {['6GB+128GB', '8GB+128GB', '8GB+256GB', '12GB+256GB', 'Other'].map((item) => (
                        <li key={item} className='cursor-pointer py-1 ps-4 text-gray-600' value={item} onClick={(e) => setmemory(e.target.value)}>{item}</li>
                    ))}
                </div>

                <div className="mb-6">
                    <p className='text-base font-semibold mb-2'>Support 5G</p>
                    <li className='cursor-pointer py-1 ps-4 text-gray-600' value='5G'>5G</li>
                </div>

            </div> : " "}
        </div>
    )
}

export default Sidebar
