import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"


const Create = () => {
return (
<>
  <Header />
  <div className='w-full h-full  flex justify-center items-center'>
    <div className='p-3 w-[50%]'>

      <form action="">
        <label className="block text-center mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Image</label>
        <input
          className="mt-32 mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help" id="file_input" type="file" />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF.</p>

          <label htmlFor="title" className="block mt-4 mb-2 text-sm font-medium text-gray-500 ">TItle</label>
          <input type="text" className="w-full rounded" placeholder="Title"/>

          <label htmlFor="Author" className="block mt-4 mb-2 text-sm font-medium text-gray-500 ">Author</label>
          <input type="text" className="w-full rounded" placeholder="Auhtor"/>

          <label htmlFor="Content Blog" className="block mt-4 mb-2 text-sm font-medium text-gray-500 ">Content Blog</label>
          <textarea type="text" className="w-full resize-y rounded" placeholder="Silahkan Tulis Blog Anda Disini"/>

      </form>
    </div>
  </div>
  <hr />
  <Footer />
</>
)
}

export default Create