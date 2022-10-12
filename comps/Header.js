import { useState, useEffect } from 'react'
import { MdOutlineNordicWalking, MdOutlineShoppingBag } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

export default function Header(){
	const [scrolled, setScrolled] = useState(false)

	useEffect(()=>{
	 window.onscroll = ()=>{
		setScrolled(window.pageYOffset === 0 ? false : true)
		return ()=> (window.onscroll = null)
	}	
	}, [])
	
	return (
	 <div className={`py-3 w-screen fixed top-0 z-50 px-12 bg-transparent flex justify-between ${scrolled ? 'bg-white' : null}`}>
	  <div className='flex items-center cursor-pointer text-gray-800'>
	   <img src='/logo.png' className='w-9 h-9'/>
	   <span className='text-3xl font-semibold'>Travel.io</span>
	  </div>
	  <div className='w-side sm:w-max bg-sky-100 sm:bg-inherit flex flex-col sm:flex-row items-center text-2xl font-medium sm:font-normal sm:text-lg mr-5 text-gray-800'>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>Home</span>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>About</span>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>Shop</span>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>Packages</span>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>Reviews</span>
	   <span className='mx-1.5 my-2 sm:my-0 cursor-pointer hover:text-blue-500'>Blogs</span>
	   <span className=' cursor-pointer hover:text-blue-500'><MdOutlineShoppingBag className='w-8 h-7'/></span>
	   <span className='text-2xl mx-1 cursor-pointer hover:text-blue-500'><FiSearch className=''/></span>
	  </div>
	 </div>
	)
}