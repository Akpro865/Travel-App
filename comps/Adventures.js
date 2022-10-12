const adventure = [
	{img:'/category-1.jpg',title:'Air cycling',desc:'Feel the real fear and enjoyment.'},
	{img:'/category-2.jpg',title:'Follow river',desc:'Enjoy the nature beauty with joy.'},
	{img:'/category-3.jpg',title:'Kyaki',desc:'Thrilling boating with friends'},
	{img:'/category-4.jpg',title:'Caving',desc:'Morning sunrise with rainbow.'},
]

export default function Adventures(){
	return (
	 <section>
	  <h2 className='text-4xl flex justify-center my-16 font-bold'>Adventure Ideas!</h2>
	  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center p-4'>
	  {adventure.map((data, i)=>(
	  	<div key={i} className='flex flex-col items-center'>
	  	 <img src={data.img} className='w-44 h-44 rounded-full object-cover'/>
	  	 <h3 className='text-xl font-semibold text-green-500 py-1'>{data.title}</h3>
	  	 <p className='text-lg text-gray-700 py-1'>{data.desc}</p>
	  	 <button className='border-2 border-green-400 px-3 py-2 my-1 font-medium hover:bg-black hover:text-white hover:border-black transition duration-200 ease-in text-gray-800'>Read More</button>
	  	</div>
	  ))
	  }
	  </div>
	 </section>
	)
}