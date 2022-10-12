import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import { FaStar } from 'react-icons/fa'
import { RiStarHalfFill } from 'react-icons/ri'

const blogs = [
	{img:'/img-1.jpg', name:'Travel bag', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-2.jpg', name:'Knife', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-3.jpg', name:'Safety Glass', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-4.jpg', name:'Living Shoes', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-5.jpg', name:'Hooks', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-6.jpg', name:'Moving Wheel', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
]

export default function Products(){

	var settings = {
     infinite: true,
     speed: 1000,
     initialSlide: 1,
     responsive: [
     {
      	breakpoint: 1400,
      	settings: {
      		slidesToShow: 3,
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
	 <h2 className='text-4xl flex justify-center my-8 font-bold'>Our Blogs</h2>
	 <Slider {...settings} style={{margin:"10px"}}>
	  {blogs.map((blog, i)=>(
	  	<div className='grid place-items-center'>
	  	 <div className='w-80 m-auto'>
	  	 <img src={blog.img} className='w-full h-60 object-cover overflow-hidden rounded-2xl'/>
	  	 <p className='py-1 text-2xl flex justify-center font-semibold text-green-500'>{blog.name}</p>
	  	 <p className='flex justify-center  text-gray-900 py-1'>{blog.desc}</p>
	  	 <div className='flex justify-center py-2'>
	  	  <button className='px-8 py-2.5 rounded border-2 border-green-400 hover:bg-green-300'>Read More</button>
	  	 </div>
         </div>	  	 
	  	</div>
	  ))}
	 </Slider>
	</div>
	)
}