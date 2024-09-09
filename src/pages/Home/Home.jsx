import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <hr />
      <div className="mx-6 my-6">
        <button
          onClick={() => navigate("/createBlog")}
          className="text-center border rounded border-black p-1 px-2 font-semibold text-base hover:text-white hover:bg-black hover:duration-500"
        >
          Create Blog
        </button>
      </div>
      <div className=" h-full mx-6 grid gap-4 lg:grip-cols-4 md:grid-cols-3 sm:grid-cols-1">
        <Blog className="flex" />
        <Blog className="flex" />
        <Blog className="flex" />
        <Blog className="flex" />
      </div>
      <div className="flex justify-between mx-6 my-4">
        <button className="border rounded border-black p-1 font-semibold text-sm hover:text-white hover:bg-black hover:duration-500">
          PREVIOUS
        </button>
        <button className="border rounded border-black p-1 px-5 font-semibold text-sm hover:text-white hover:bg-black hover:duration-500 ">
          NEXT
        </button>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Home;
