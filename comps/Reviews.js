const reviews = [
	{img: '/pic-1.png',user: "Ajithkumar", location: "Tamilnadu", review: 'A user review is a review  their experience to a review site or social media platform who has access to the internet and.'},
	{img: '/pic-2.png',user: "Pro", location: "Bengaluru", review: 'User review is a review conducted by any person who has access to the internet and publishes their experience to a review site or social media .'},
	{img: '/pic-3.png',user: "JD", location: "Dharmapuri", review: 'Review is a review conducted by any person who has access to the internet and publishes their experience to a review site or the evaluation of a service.'},
	{img: '/pic-4.png',user: "Master", location: "Kerla", review: 'Is a review conducted by any person who has access to the internet and publishes their experience to a review site.'},
	{img: '/pic-5.png',user: "Ajay singh", location: "Delhi", review: 'Conducted by any person who has access to the internet social media platform following product testing or the evaluation.'},
	{img: '/pic-6.png',user: "Vicky", location: "Karaikudi", review: 'By any person who has access to the internet  of a service conducted  publishes.'},
]

export default function Reviews(){
	return (
    <section className='bg-light lg:px-8 py-5'>		
     <h2 className='text-4xl flex justify-center my-4 font-bold'>User Reviews</h2>
	 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-center justify-center'>
	  {reviews.map((review, i)=>(
	  	<div className='flex flex-col justify-between w-76 sm:w-max md:w-76 bg-white rounded-xl my-3 p-2.5 hover:bg-teal-100 hover:scale-105 hover:cursor-default animation duration-300'>
	  	 <p className='text-gray-800 italic'>{review.review}</p>
	  	 <div className='flex pt-1'>
	  	  <img src={review.img} className='w-14 h-14 object-cover rounded-full'/>
	  	  <div className='flex flex-col justify-center ml-3'>
	  	   <span className='text-blue-600 font-semibold'>{review.user}</span>
	  	   <span className='text-xs text-gray-700 font-medium'>{review.location}</span>
	  	  </div>
	  	 </div>
	  	</div>
	  ))}
	 </div>
	</section>
	)
}