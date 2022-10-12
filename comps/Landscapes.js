export default function Landscapes(){
	return (
	 <section>
	 <h2 className='text-4xl flex justify-center my-8 font-bold'>Choose Your Favourite Land</h2>
	 <div className='flex justify-evenly flex-wrap'>
	  <div className='hover:scale-110 animation duration-100 mx-1 my-1'>
	   <img src='/mountain.png' className='h-56 w-48 rounded-xl object-cover'/>
	   <p className='uppercase flex justify-center py-2 font-semibold'>mountain</p>
	  </div>
	  <div className='hover:scale-110 animation duration-100 my-1'>
	   <img src='/forest.jpg' className='h-56 w-48 rounded-xl object-cover'/>
	   <p className='uppercase flex justify-center py-2 font-semibold'>Forest</p>
	  </div>
	  <div className='hover:scale-110 animation duration-100 my-1'>
	   <img src='/ocean.jpg' className='h-56 w-48 rounded-xl object-cover'/>
	   <p className='uppercase flex justify-center py-2 font-semibold'>sea coast</p>
	  </div>
	  <div className='hover:scale-110 animation duration-100 my-1'>
	   <img src='/field.jpg' className='h-56 w-48 rounded-xl object-cover'/>
	   <p className='uppercase flex justify-center py-2 font-semibold'>Farm land</p>
	  </div>
	  <div className='hover:scale-110 animation duration-100 my-1'>
	   <img src='/desert.jpg' className='h-56 w-48 rounded-xl object-cover'/>
	   <p className='uppercase flex justify-center py-2 font-semibold'>desert</p>
	  </div>
	 </div>
	 </section>
	)
}