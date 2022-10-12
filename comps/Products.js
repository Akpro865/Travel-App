import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import { FaStar } from 'react-icons/fa'
import { RiStarHalfFill } from 'react-icons/ri'

const products = [
	{img:'/product-1.jpg', name:'Travel bag', price:'250.00'},
	{img:'/product-2.jpg', name:'Knife', price:'245.00'},
	{img:'/product-3.jpg', name:'Safety Glass', price:'600.00'},
	{img:'/product-4.jpg', name:'Living Shoes', price:'435.50'},
	{img:'/product-5.jpg', name:'Hooks', price:'843.04'},
	{img:'/product-6.jpg', name:'Moving Wheel', price:'556.00'},
]

export default function Products(){

	const Prev = (props)=>(
 			 <MdArrowBackIos {...props} className='text-6xl z-10 hover:text-white cursor-pointer text-gray-400 -left-2 p-1 text-gray-400 absolute z-50 m-auto top-0 bottom-0'/>			
	)

	const Next = (props)=>(
 			 <MdArrowForwardIos {...props} className='text-6xl z-10 cursor-pointer hover:text-white text-gray-400 -right-7 p-1 z-50 absolute m-auto top-0 bottom-0'/>			
	)

	var settings = {
     infinite: true,
     speed: 1000,
     initialSlide: 1,
     cssEase: "linear",
     arrows: true,
     prevArrow: <Prev />,
     nextArrow: <Next />,
     responsive: [
     {
      	breakpoint: 1400,
      	settings: {
      		slidesToShow: 4,
      		slidesToScroll: 1,
      	}
      },
      {
      	breakpoint: 1062,
      	settings: {
      		slidesToShow: 3,
      		slidesToScroll: 1,
      	}
      },
      {
      	breakpoint: 768,
      	settings: {
      		slidesToShow: 2,
      		slidesToScroll: 1,
      	}
      },
      {
      	breakpoint: 550,
      	settings: {
      		slidesToShow: 1,
      		slidesToScroll: 1,
      	}
      },
      

     ]
  	}

	return (
	<div className='px-2 md:px-4 lg:px-6 my-6 pb-4'>
	 <h2 className='text-4xl flex justify-center my-8 font-bold'>Feaured Products!</h2>
	 <Slider {...settings} style={{margin:"10px"}}>
	  {products.map((product, i)=>(
	  	<div key={i} className='grid place-items-center'>
	  	<div className='w-60 lg:w-54 border rounded-xl bg-white flex flex-col justify-center m-auto overflow-hidden'>
	  	 <img src={product.img} className='w-60 lg:54 h-60 object-cover overflow-hidden'/>
	  	 <p className='py-1 text-xl flex justify-center font-medium'>{product.name}</p>
	  	 <p className='flex justify-center font-bold text-xl text-gray-700'>${product.price}</p>
	  	 <p className='flex justify-center py-1 text-yellow-500 text-xl pb-3'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <RiStarHalfFill /> </p>
	  	</div>
	  	</div>
	  ))}
	 </Slider>
	</div>
	)
}