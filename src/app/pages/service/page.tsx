import React from 'react'

function page() {
  return (
    <>
    <section className="text-gray-900 body-font bg-slate-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">END-TO-END
      </h2>
      <h1 className="sm:text-6xl text-2xl  font-extrabold	 title-font mb-4 text-gray-900">Our Services
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Discover the power of our comprehensive software solutions.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-3xl	  text-gray-900 font-medium title-font mb-2">Web Design</h2>
        <p className="leading-relaxed mb-4 text-lg	">Customized web design for your brand and target audience.</p>
        <a href='#' className="text-indigo-500 inline-flex items-center">Find Out More ⟶
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24" >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-3xl text-gray-900 font-medium title-font mb-2 ">Cloud Computing
        </h2>
        <p className="leading-relaxed text-lg mb-4">Focus on functionality, performance, and security.</p>
        <a href='#' className="text-indigo-500 inline-flex items-center">Find Out More ⟶
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-3xl	  text-gray-900 font-medium title-font mb-2">Desktop App
        </h2>
        <p className="leading-relaxed text-lg mb-4">Custom software solutions for desktop computers.</p>
        <a className="text-indigo-500 inline-flex items-center">Find Out More ⟶
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-3xl	 text-gray-900 font-medium title-font mb-2">Mobile Apps
        </h2>
        <p className="leading-relaxed text-lg mb-4">Comprehensive programming for automation and efficiency.</p>
        <a href='#' className="text-indigo-500 inline-flex items-center">Find Out More ⟶
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
    <div className='text-center pt-5'>
    <a href="#" className= " bg-cyan-800 hover:bg-transparent hover:text-cyan-800 text-white font-bold py-2 px-4 rounded mr-4 ">
            LEARN MORE
          </a>
          </div>
  </div>
</section>
    </>
  )
}

export default page
