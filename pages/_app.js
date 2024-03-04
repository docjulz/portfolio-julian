import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaFigma, FaChevronCircleUp } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="  fixed bg-slate-100 bottom-5 right-5 rounded-2xl hover:scale-125 ease-in duration-300 shadow-sm">
        <Link href="/">
          <div className="rounded-2xl  shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:rounded-sm ease-in duration-300 ">
            <FaChevronCircleUp
              className=" m-auto text-[#2D92FA] hover:text-[#c2649a] hover:bg-white hover:rounded-full"
              size={30}
            />
            <p className=" text-xs text-[#c2649a] hover:rounded-lg">
              back to top
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MyApp;
