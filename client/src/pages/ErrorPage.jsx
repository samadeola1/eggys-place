import React from 'react'
import errImg from '../assets/rafiki.svg'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <>
      <main className="bg-[#2F2F2F] mx-auto h-screen flex flex-col text-center  md:text-start justify-center items-center">
        <div className="">
          <img className="py-8 mx-auto" src={errImg} alt="errImg" />
          <p className="text-[#FBFBFB] py-6 text-[32px] font-[500]">
            Oops! Looks like you’ve wandered into the void.
          </p>
          <Link to={"/"}>
            <p className="text-[#FBFBFB] text-center text-[19px] font-[500] underline">
              Go back before things get weird
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage