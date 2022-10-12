const logos = [
	{img: 'client-logo-1.png'},
	{img: 'client-logo-2.png'},
	{img: 'client-logo-3.png'},
	{img: 'client-logo-4.png'}
]

export default function Logo(){
	return (
	 <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-7 place-items-center py-3 my-1'>
	  {logos.map((logo, i)=>(
	  	<img src={logo.img} className='my-5'/>
	  ))}
	 </section>
	)
}