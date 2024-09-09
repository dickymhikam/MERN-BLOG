import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='max-lg:w-full max max-sm:w-full rounded mb-1 shadow-lg shadow-indigo-500/40 overflow-hidden mt-5'>
        <img src={Logo} className='w-full h-40 object-contain' alt={"Gambar Logo"} />
        <div className='p-3'>
            <p className='font-xl font-bold text-[#313131]'>Title</p>
            <p className='mt-1 text-sm text-gray-700 '>Author</p>
            <p className='mt-3 text-base text-[#353535]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas obcaecati eum fuga, doloremque eaque tempore.</p>
            <p className='text-sm mt-1 font-medium text-blue-500 hover:underline cursor-pointer' onClick={()=> navigate('/detailBlog')}> Read More</p>
        </div>
    </div>
    </>
  )
}

export default Blog