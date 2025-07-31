import "../style/Home.css"



function Home() {
  return (
    <>
      {/* <div className='container'>
        <div className="row">
          <div className="sec-1 bg-[url(https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/topbanner/two-grade/s1-purple-s2-white-5120-1280.webp)]">
            <div className="cont-sec">
              <p className='text-white bg-black p-[3px] text-xs rounded-[3px] w-[fit-content] '>OPPO AI Phone</p>
              <h1>OPPO Reno13 Series</h1>
              <div className="cont-sec2 mt-[9%]">
                <span className='text-[20px] text-zinc-600'>AI Livephoto | Al Editor</span><br />
                <span className='text-[20px] text-zinc-600'>IP69 Water and Dust Resistance</span>
                <div className="btn-sec mt-7">
                  <button className='bg-none text-black p-2 ps-4 pe-4 border border-black me-2 rounded-3xl '>Learn more</button>
                  <button className='bg-black text-white p-2 ps-4 pe-4 rounded-3xl '>Buy now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-1 mt-[6px] bg-[url(https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f29-series-in/warmup/topbanner/5120-1280-v2.jpg)]">
            <div className="cont-sec">
              <h1>OPPO F29 Series<sup> 5G</sup> </h1>
              <h2 className='text-2xl font-semibold'>The Durable Champion</h2>
              <div className="cont-sec2 mt-[8%]">
                <span className='text-[20px] text-zinc-600'>Waterproof Rated IP69 IP68 IP66</span><br />
                <span className='text-[20px] text-zinc-600'>80W SUPERVOOCTM Flash Charge</span>
                <div className="btn-sec mt-7">
                  <button className='bg-none text-black p-2 ps-4 pe-4 border border-black me-2 rounded-3xl '>Learn more</button>
                  <button className='bg-black text-white p-2 ps-4 pe-4 rounded-3xl '>Buy now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-1 mt-[6px] bg-[url(https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-k13-5g-in/topbanner/5120-1280-pc-v2.jpg)]">
            <div className="cont-sec">
              <h1 className='text-white'>OPPO K13<sup> 5G</sup> </h1>
              <h2 className='text-2xl font-semibold text-white'>Live Unstoppable</h2>
              <div className="cont-sec2 mt-[5.4%] ">
                <span className='text-[#9a9696f2] text-[20px] font-medium'>The Latest Snapdragon® 6 Gen 4 Mobile Platform</span><br />
                <span className='text-[#9a9696f2] text-[20px] font-medium'>7000mAh 5-Year Durable Battery</span><br />
                <span className='text-[#9a9696f2] text-[20px] font-medium'>80W SUPERVOOC<sub>TM</sub> Flash Charge</span>
                <div className="btn-sec mt-7">
                  <button className='bg-none text-white p-2 ps-4 pe-4 border border-white me-2 rounded-3xl '>Learn more</button>
                  <button className='bg-white text-black p-2 ps-4 pe-4 rounded-3xl '>Buy now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-1 mt-[6px] bg-[url(https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-pro/topbanner/in/5120-1280-pc-v1.jpg)]">
            <div className="cont-sec">
              <p className='text-white bg-black p-[3px] text-xs rounded-[3px] w-[fit-content] '>OPPO AI Phone</p>
              <h1>OPPO A5 Pro<sup> 5G</sup></h1>
              <h2 className='text-2xl font-semibold'>A Step Ahead</h2>
              <div className="cont-sec2 mt-[4.5%] ">
                <span className='text-[20px] text-zinc-600'>IP69 All-Round Waterproof Champion</span><br />
                <span className='text-[20px] text-zinc-600'>Damage-Proof 360° Armour Body</span><br />
                <span className='text-[20px] text-zinc-600'>45W SUPERVOOCTM Flash Charge</span><br />
                <div className="btn-sec mt-7">
                  <button className='bg-none text-black p-2 ps-4 pe-4 border border-black me-2 rounded-3xl '>Learn more</button>
                  <button className='bg-black text-white p-2 ps-4 pe-4 rounded-3xl '>Buy now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-1 mt-[6px] bg-[url(https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v1/feature/2624-920.jpg.thumb.webp)]">
            <div className="cont-sec">
              <h3 className='text-3xl'>New Products</h3>
              <h1>OPPO A5x<sup> 5G</sup></h1>
            </div>
          </div>
        </div>
      </div>


      <div className=" pt-[1px] ps-10 pe-10 mt-[6px] pb-10">

        <div className="grid md:grid-cols-2 gap-8">

        
          <div className="bg-[whitesmoke] p-5 ">
            <p className='text-white bg-black p-[3px] text-xs rounded-[3px] w-[fit-content] '>OPPO AI Phone</p>
            <h1 className="text-4xl font-semibold mb-4 text-justify">OPPO A5 Pro <sup>5G</sup></h1>
            <img
              src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-pro/featured-products/in/brown-480-480-in-v1.png.thumb.webp"
              alt="OPPO A5 Pro"
              className="h-52 object-contain m-auto mb-4"
            />
            <ul className="bg-[#efede9] text-lg p-4 rounded-md w-full space-y-1">
              <li className=""> IP69 All-Round Waterproof Champion</li>
              <li className=""> Damage-Proof 360° Armour Body</li>
              <li className=""> 45W SUPERVOOC™ Flash Charge</li>
              <a href="" className='text-[15px] border-b border-black me-4' >Learn more</a>
              <a href="" className='text-[15px] border-b border-black ' >Buy now</a>

            </ul>
          </div>

          
          <div className="bg-[whitesmoke] p-5 ">
            <h1 className="text-4xl font-semibold mb-4 text-justify">OPPO K13<sup> 5G</sup></h1>
            <img
              src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-k13-5g-in/featured-products/480-480-purple-v1.png.thumb.webp"
              alt="OPPO K13"
              className="h-52 object-contain mt-4 m-auto mb-4"
            />
            <ul className="bg-[#efede9] mt-[39px] text-lg p-4 rounded-md w-full space-y-1">
              <li className=""> The Latest Snapdragon® 6 Gen 4 Mobile Platform</li>
              <li className=""> 7000mAh 5-Year Durable Battery</li>
              <li className=""> 80W SUPERVOOC™ Flash Charge</li>
              <a href="" className='text-[15px] border-b border-black me-4' >Learn more</a>
              <a href="" className='text-[15px] border-b border-black ' >Buy now</a>
            </ul>
          </div>

        </div>
      </div> */}

    <div className="pt-14">
        <div className="flex flex-col gap-2">
          {/* Section 1 */}
          <div className="min-h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/topbanner/two-grade/s1-purple-s2-white-5120-1280.webp')]">
            <div className="pt-12 ps-12">
              <p className="text-white bg-black px-2 py-[2px] text-xs rounded w-fit">OPPO AI Phone</p>
              <h1 className="text-[40px] md:text-[50px] font-semibold mt-2">OPPO Reno13 Series</h1>
              <div className="mt-[9%] space-y-1">
                <p className="text-[18px] text-zinc-600">AI Livephoto | Al Editor</p>
                <p className="text-[18px] text-zinc-600">IP69 Water and Dust Resistance</p>
                <div className="mt-6 space-x-3">
                  <button className="bg-transparent text-black border border-black px-4 py-2 rounded-3xl">Learn more</button>
                  <button className="bg-black text-white px-4 py-2 rounded-3xl">Buy now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="min-h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f29-series-in/warmup/topbanner/5120-1280-v2.jpg')]">
            <div className="pt-12 ps-12">
              <h1 className="text-[40px] md:text-[50px] font-semibold">OPPO F29 Series<sup> 5G</sup></h1>
              <h2 className="text-2xl font-semibold">The Durable Champion</h2>
              <div className="mt-[8%] space-y-1">
                <p className="text-[18px] text-zinc-600">Waterproof Rated IP69 IP68 IP66</p>
                <p className="text-[18px] text-zinc-600">80W SUPERVOOC™ Flash Charge</p>
                <div className="mt-6 space-x-3">
                  <button className="bg-transparent text-black border border-black px-4 py-2 rounded-3xl">Learn more</button>
                  <button className="bg-black text-white px-4 py-2 rounded-3xl">Buy now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="min-h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-k13-5g-in/topbanner/5120-1280-pc-v2.jpg')]">
            <div className="pt-12 ps-12">
              <h1 className="text-[40px] md:text-[50px] font-semibold text-white">OPPO K13<sup> 5G</sup></h1>
              <h2 className="text-2xl font-semibold text-white">Live Unstoppable</h2>
              <div className="mt-[5%] space-y-1">
                <p className="text-[18px] text-[#9a9696f2] font-medium">The Latest Snapdragon® 6 Gen 4 Mobile Platform</p>
                <p className="text-[18px] text-[#9a9696f2] font-medium">7000mAh 5-Year Durable Battery</p>
                <p className="text-[18px] text-[#9a9696f2] font-medium">80W SUPERVOOC™ Flash Charge</p>
                <div className="mt-6 space-x-3">
                  <button className="bg-transparent text-white border border-white px-4 py-2 rounded-3xl">Learn more</button>
                  <button className="bg-white text-black px-4 py-2 rounded-3xl">Buy now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="min-h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-pro/topbanner/in/5120-1280-pc-v1.jpg')]">
            <div className="pt-12 ps-12">
              <p className="text-white bg-black px-2 py-[2px] text-xs rounded w-fit">OPPO AI Phone</p>
              <h1 className="text-[40px] md:text-[50px] font-semibold text-black">OPPO A5 Pro<sup> 5G</sup></h1>
              <h2 className="text-2xl font-semibold text-black">A Step Ahead</h2>
              <div className="mt-[4.5%] space-y-1">
                <p className="text-[18px] text-zinc-600">IP69 All-Round Waterproof Champion</p>
                <p className="text-[18px] text-zinc-600">Damage-Proof 360° Armour Body</p>
                <p className="text-[18px] text-zinc-600">45W SUPERVOOC™ Flash Charge</p>
                <div className="mt-6 space-x-3">
                  <button className="bg-transparent text-black border border-black px-4 py-2 rounded-3xl">Learn more</button>
                  <button className="bg-black text-white px-4 py-2 rounded-3xl">Buy now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="min-h-[450px] w-full bg-center bg-no-repeat bg-cover bg-[url('https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-series-en/v1/feature/2624-920.jpg.thumb.webp')]">
            <div className="pt-12 ps-12">
              <h3 className="text-3xl font-semibold">New Products</h3>
              <h1 className="text-[40px] md:text-[50px] font-semibold">OPPO A5x<sup> 5G</sup></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="pt-1 px-4 md:px-10 mt-4 pb-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* OPPO A5 Pro Card */}
          <div className="bg-[whitesmoke] p-5">
            <p className="text-white bg-black px-2 py-[2px] text-xs rounded w-fit">OPPO AI Phone</p>
            <h1 className="text-4xl font-semibold mb-4 text-justify">OPPO A5 Pro <sup>5G</sup></h1>
            <img
              src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a5-pro/featured-products/in/brown-480-480-in-v1.png.thumb.webp"
              alt="OPPO A5 Pro"
              className="h-52 object-contain m-auto mb-4"
            />
            <ul className="bg-[#efede9] text-lg p-4 rounded-md w-full space-y-1">
              <li>IP69 All-Round Waterproof Champion</li>
              <li>Damage-Proof 360° Armour Body</li>
              <li>45W SUPERVOOC™ Flash Charge</li>
              <div className="mt-2 space-x-4">
                <a href="#" className="text-sm border-b border-black">Learn more</a>
                <a href="#" className="text-sm border-b border-black">Buy now</a>
              </div>
            </ul>
          </div>

          {/* OPPO K13 Card */}
          <div className="bg-[whitesmoke] p-5">
            <h1 className="text-4xl font-semibold mb-4 text-justify">OPPO K13 <sup>5G</sup></h1>
            <img
              src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-k13-5g-in/featured-products/480-480-purple-v1.png.thumb.webp"
              alt="OPPO K13"
              className="h-52 object-contain m-auto mb-4"
            />
            <ul className="bg-[#efede9] text-lg p-4 rounded-md w-full space-y-1">
              <li>The Latest Snapdragon® 6 Gen 4 Mobile Platform</li>
              <li>7000mAh 5-Year Durable Battery</li>
              <li>80W SUPERVOOC™ Flash Charge</li>
              <div className="mt-2 space-x-4">
                <a href="#" className="text-sm border-b border-black">Learn more</a>
                <a href="#" className="text-sm border-b border-black">Buy now</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home
