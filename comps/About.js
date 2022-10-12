import styles from '../styles/Home.module.css'

export default function About(){
	return (
	   
	  <div className='sm:flex bg-[#e4f7eb] py-12 mt-8 flex-wrap items-center'>
	   <div className='sm:w-1/2 sm:p-8 lg:p-16'>
		   <img src='/about-img.jpg' className={`${styles.imgshadow} w-120 object-cover rounded-lg`}/>
	   </div>
	   <div className='sm:w-1/2 sm:p-8 lg:p-16'>
		<h3 className='font-medium text-5xl text-green-500 py-3'>Love back into your life</h3>
		<p className='text-xl'>
		    We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things in us that we can find again only by going back there.
		</p>
		<button className='px-8 py-3 rounded font-semibold bg-green-300 hover:bg-green-400 text-green-600 transition duration-300 mt-4'>Know More</button>
	   </div>
	  </div>
	)
}