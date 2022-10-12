export default function Subscribe(){
	return (
	 <div style={{background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)"}} className='h-[300px] flex justify-center items-center'>
	  <div className='w-3/5 bg-white p-3 flex  rounded-full'>
	   <input className='w-full h-11 border-none outline-none pl-2' placeholder='Enter youe e-mail'/>
	   <button className='text-white px-8 font-bold py- rounded-full bg-green-500'>subscribe</button>
	  </div>
	 </div>
	)
}