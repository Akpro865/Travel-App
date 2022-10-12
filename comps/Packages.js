const packages = [
	{img:'/img-1.jpg', name:'Travel bag', price:'250.00', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-2.jpg', name:'Knife', price:'245.00', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-3.jpg', name:'Safety Glass', price:'600.00', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-4.jpg', name:'Living Shoes', price:'435.50', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-5.jpg', name:'Hooks', price:'843.04', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
	{img:'/img-6.jpg', name:'Moving Wheel', price:'556.00', desc: 'We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things.'},
]

export default function Packages(){
	return (
	<section className=''>
	 <h2 className='text-4xl flex justify-center my-16 font-bold'>Popular Travel Packages!</h2>
	 <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-12 my-12 place-items-center'>	  
	  {packages.map((pack, i)=>(
	  	<div key={i} className='w-80 lg:w-96 animation duration-500 p-3 my-2 rounded-xl border-2 hover:border-black hover:scale-105 hover:bg-black hover:text-white hover:cursor-default'>
	  	 <img src={pack.img} className='h-60 w-full rounded-xl object-cover'/>
	  	 <p className='text-2xl font-bold my-2 flex justify-center'>{pack.name}</p>
	  	 <p className=''>{pack.desc}</p>
	  	 <p className='py-1 font-semibold flex text-teal-600 justify-center text-xl my-2'>${pack.price}</p>
	  	 <div className='flex justify-center my-1'>
	  	  <button className='px-10 py-3 rounded bg-green-500 animation duration-500 hover:bg-green-600 font-semibold text-white'>Explore Now</button>
	  	 </div>
	  	</div>
	  ))}
	 </div>
	</section>
	)
}