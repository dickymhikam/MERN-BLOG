import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Logo from '../../assets/Logo.png'
import { useNavigate } from "react-router-dom"

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
   <Header/>
   <hr className="mb-4" />
    <div className="w-50% h-full">
    <img src={Logo} className='w-full h-40 object-contain' alt={"Gambar Logo"} />
        <div className='w-[80%] mx-auto text-center'>
            <p className='font-xl font-bold text-[#313131]'>Title</p>
            <p className='mt-1 text-sm text-gray-700 '>Author</p>
            <p className='mt-3 text-base text-[#353535] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vero maxime neque velit eaque eveniet inventore beatae libero pariatur illum quibusdam nam, deleniti corrupti nihil, nostrum aspernatur veniam porro consectetur recusandae id temporibus enim impedit dolorem. Minus ipsa et quas, architecto minima vitae sint quaerat, illo suscipit excepturi eaque nesciunt.</p>
            <p className='text-sm mt-1 font-medium text-blue-500 hover:underline cursor-pointer' onClick={()=> navigate('/')}>Back To Blog</p>
        </div>
    </div>
    <hr className="mt-5"/>
   <Footer/>
   </>
  )
}

export default Detail ;