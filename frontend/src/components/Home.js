import React from "react";
import psdeps from '../assets/psdeps.png';
import '../index.css';
// import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
  <div className="pb-6 sm:pb-8 lg:pb-12 overlay" style={{ backgroundImage: `url(${psdeps})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div className="mx-auto px-4 md:px-8">
      <section className="flex flex-col justify-center items-center sm:items-center lg:items-start gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* <!-- content - start --> */}
        <div className="flex flex-col items-center justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <h1 className="text-white text-center mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            All the assets you need, in one place
          </h1>

          <p className="mb-8 text-center leading-relaxed text-white md:mb-12 xl:text-2xl">
            Find and download the best high-quality illustrations, vectors, CDR, PSD, photos, and mockups.
          </p>

          <form className="flex w-full items-center justify-center gap-2">
            <input
              placeholder="Search your assets"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-slate-50 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />

            <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Search
            </button>
          </form>
        </div>
        {/* <!-- content - end --> */}
      </section>
    </div>
  </div>
</div>

  );
};

export default Home;
