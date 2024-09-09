import { FaXTwitter,FaInstagram,FaGithub,FaLinkedin  } from "react-icons/fa6";
import Logo from '../../assets/Logo.png'
const Footer = () => {
  return (

    <>

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">MERN Blog</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">VIte</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/dickymhikam?tab=repositories"  target="_blank" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.linkedin.com/in/dicky-m-hikam-594262224/"  target="_blank" className="hover:underline">Linkedin</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.instagram.com"  target="_blank" className="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="https://x.com/?lang=id" target="_blank" className="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">MERN BLOG™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <FaInstagram/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaLinkedin/> 
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaXTwitter/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaGithub/>
                  <span className="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


   </>
  )
}

export default Footer ;