import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import styles from '../styles/Home.module.css'

const SlideImg = [
	{img:'/home-bg-1.jpg'}, 
	{img:'/home-bg-2.jpg'}, 
	{img:'/home-bg-3.jpg'}
	]

export default function Hero(){

	const Prev = (props)=>(
 			 <MdArrowBackIos {...props} className='text-6xl z-10 hover:text-white cursor-pointer text-gray-400 left-1 p-1 text-gray-400 absolute z-50 m-auto top-0 bottom-0'/>			
	)

	const Next = (props)=>(
 			 <MdArrowForwardIos {...props} className='text-6xl z-10 cursor-pointer hover:text-white text-gray-400 right-0 p-1 z-50 absolute m-auto top-0 bottom-0'/>			
	)

	var settings = {
    infinite: true,    
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    initialSlide: 2,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    prevArrow: <Prev />,
    nextArrow: <Next />
  	}

	return(	  
	  <Slider {...settings} style={{ height:"100%", width:"100%"}}>
	 	<div>
	 	 <div style={{background: "url('/home-bg-1.jpg')"}} className={`${styles.box} justify-end`}>
	 	  <div className={`${styles.slidecontent}`}>
	 	   <span className={`${styles.slidetitle}`}>Never Stop</span>
	 	   <h3 className={`${styles.slidetext}`}>exploring</h3>
	 	   <p className={`${styles.slidepara}`}>
	 	    Whether you’re planning a trip, battling post-trip blues, or just aimlessly scrolling through your phone, you can be sure there is a quote about travelling.
	 	   </p>
	 	   <button className={`${styles.slidebutton}`}>start now</button>
	 	  </div>
	 	 </div>
	 	</div>

	 	<div>
	 	 <div style={{background: "url('/home-bg-2.jpg')"}} className={`${styles.box} justify-start`}>
	 	  <div className={`${styles.slidecontent}`}>
	 	   <span className={`${styles.slidetitle}`}>Explore</span>
	 	   <h3 className={`${styles.slidetext}`}>new world</h3>
	 	   <p className={`${styles.slidepara}`}>
	 	    I hope you will find these awesome travel quotes inspiring and they will make you want to head out and see some more of the world!.
	 	   </p>
	 	   <button className={`${styles.slidebutton} hover:bg-green-100`}>start now</button>
	 	  </div>
	 	 </div>
	 	</div>

	 	<div>
	 	 <div style={{background: "url('/home-bg-3.jpg')"}} className={`${styles.box} justify-end`}>
	 	  <div className={`${styles.slidecontent}`}>
	 	   <span className={`${styles.slidetitle}`}>Make it</span>
	 	   <h3 className={`${styles.slidetext}`}>Amazing</h3>
	 	   <p className={`${styles.slidepara}`}>
	 	   	 Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.
	 	   </p>
	 	   <button className={`${styles.slidebutton}`}>start now</button>
	 	  </div>
	 	 </div>
	 	</div>
	  </Slider>
	)
}