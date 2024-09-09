import RegisterImg from '../../assets/login.jpg'

const Login = () => {
  return (
    <>

<div className="w-full h-screen flex flex-col sm:flex-row items-start sm:items-stretch">
  <div className="relative w-full sm:w-1/2 h-60 sm:h-full flex flex-col">
    <img src={RegisterImg} className='w-full h-full object-cover sm:block' />
  </div>

  <div className="bg-gray-150 w-full sm:w-1/2 h-full flex flex-col p-10 justify-between items-center sm:items-start">
    <div className="w-full flex flex-col items-center sm:items-start">
      <h3 className='font-semibold text-2xl my-4'>Login</h3>
      <p className="text-base mb-2">Welcome Please enter your details.</p>
    </div>

    <div className="w-full flex flex-col">
      <form action="">
        <label htmlFor="" className='font-normal text-medium'>Email</label>
        <input type="email" placeholder='example@gmail.com' className='w-full text-black py-3 mb-7 border-b border-black bg-transparent outline-none focus:outline-none' />
        
        <label htmlFor="" className='font-normal text-medium'>Password</label>
        <input type="password" placeholder='*******' className='w-full text-black py-3 mb-7 border-b border-black bg-transparent outline-none focus:outline-none'/>
      </form>

      <div className="w-full flex flex-col items-center">
        <button className='bg-black text-white w-full py-2 mb-2 text-base font-medium hover:bg-white hover:text-black hover:border hover:border-black hover:duration-500'>Log In</button>
        <button className='w-full py-2 border border-black font-medium text-base hover:bg-black hover:text-white hover:duration-500'>Register</button>
      </div>
    </div>

    <div className="w-full flex justify-center sm:justify-start sm:block mt-3">
      <p className='text-base font-medium'>Dont have an account? <a href="/register" className='text-base font-semibold hover:text-blue-800 hover:underline'>Sign Up</a></p>
    </div>
  </div>
</div>



    </>
  )
}

export default Login