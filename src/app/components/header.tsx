import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
<>
<header className='flex justify-between items-center bg-cyan-800 text-white p-4'>
    <div>
        {/* <h1 className='text-4xl p-3 font-semibold'>DREAM BAZAAR</h1> */}
        <Link href="/" className='text-4xl p-5 font-bold'>GENTECH SOLUTION.</Link>
    </div>
    <nav>
        <ul className='flex space-x-8 p-3 pr-5 text-2xl font-semibold'>
            <li>
                <Link className='bg-cyan-500 hover:bg-cyan-800 text-white py-2 px-4 rounded font-bold' href="/">HOME</Link>
            </li>
            <li>
                <Link className='bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded' href="../pages/about">ABOUT</Link>
            </li>
            <li >
                <Link className='bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded' href="../pages/service"> SERVICES</Link>
            </li>
            <li >
                <Link className='bg-cyan-500 hover:bg-cyan-800  text-white font-bold py-2 px-4 rounded' href="../pages/contact">CONTACT</Link>
            </li>
        </ul>
    </nav>
</header>
</>
  )
}

export default Header
