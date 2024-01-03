import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {

  {/* ====================OUR MENU============== */}

  {/* ====================OUR MENU============== */}

  return (
    <>
      <Navbar />

      <div className="top-0  mx-auto mt-10 flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-black">
        <p className="p-2 font-bold uppercase text-slate-900">
        Healthy & Testy Food
        </p>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
        Enjoy Healthy Life & Testy Food.
        </h1>

        <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
        Food is an important part Of a balanced Diet
        </p>
      
        <Link to="/recipes" className="bg-blue-500 mt-5 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Get started</Link>
      </div>

      {/* ==================== OUR MENU============== */}

      {/* ==================== /OUR MENU============== */}
      <Footer />
    </>
  );
};

export default Home;
