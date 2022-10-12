const services = [
	{img: '/serv-1.png',name: "Complete Guide", review: 'A user review is a review  their experience to a review site or social media platform.'},
	{img: '/serv-2.png',name: "Custom Packages", review: 'User review is a review conducted by any person who has access to the internet.'},
	{img: '/serv-3.png',name: "Family Trips", review: 'Review is a review conducted by any person who has access to the internet.'},
	{img: '/serv-4.png',name: "Train Guides", review: 'Is a review conducted by any person who has access to the internet and publishes.'},
	{img: '/serv-5.png',name: "Adventure Trails", review: 'Conducted by any person who has access to the internet social media platform.'},
	{img: '/serv-6.png',name: "Memoriable Visits", review: 'By any person who has access to the internet  of a service conducted  publishes.'},
]

export default function Services(){
	return (
    <section className='lg:px-8 py-5'>		
     <h2 className='text-4xl flex justify-center my-4 font-bold'>Our Services</h2>
	 <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
	  {services.map((service, i)=>(
	  	<div className='w-80 sm:w-[22rem] lg:w-[28rem] flex flex-col justify-between xl:w-500 border rounded-xl my-3 hover:bg-green-100 hover:scale-105 hover:cursor-default animation duration-300 p-3 bg-white h-[336px]'>	  	 
	  	 <div className='flex justify-center'>
	  	  <img src={service.img} className='w-24 h-24 object-cover'/>	  	
	  	 </div>
	  	 <h3 className='text-green-500 text-2xl flex justify-center my-1 font-semibold'>{service.name}</h3>  	
	  	 <p className='lg:text-lg my-1 text-gray-700'>{service.review}</p>
	  	 <div className='flex justify-center py-1'>
	  	  <button className='rounded px-7 hover:border-green-300 py-2.5 my-1 font-medium hover:bg-green-300 border-2 bg-white border-green-300 transition duration-200'>Read More</button>
	  	 </div>
	  	</div>
	  ))}
	 </div>
	</section>
	)
}