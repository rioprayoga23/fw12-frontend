import React from "react";
import { Link } from "react-router-dom";

import Poster from "../assets/img/img-header.png";

import CardMovie from "../components/CardMovie";
import BtnMonth from "../components/filter/BtnMonth";
import { default as CardMovieNowShowing } from "../components/now-showing/CardMovie";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <header className="flex items-center px-24 mt-10 pb-20">
        <section className="font-Mulish flex-1">
          <p className="text-xl text-[#A0A3BD] mb-5">
            Nearest Cinema, Newest Movie,
          </p>
          <p className="text-5xl font-bold text-primary">Find out now!</p>
        </section>
        <section className="flex-1 flex justify-center">
          <div>
            <img src={Poster} alt="" />
          </div>
        </section>
      </header>

      <main className="">
        <section className="py-10 bg-secondary h-wrapNowShowing">
          <div className="px-24 flex justify-between">
            <div className="border-b-2 pb-3 border-primary text-lg">
              <p className="text-primary font-bold font-Mulish">Now Showing</p>
            </div>
            <div className="text-md text-primary font-bold font-Mulish">
              <Link to="/viewAll">View All</Link>
            </div>
          </div>
          <div className="ml-24 mt-10 flex gap-5 overflow-x-auto no-scrollbar">
            <CardMovieNowShowing />
            <CardMovieNowShowing />
            <CardMovieNowShowing />
            <CardMovieNowShowing />
            <CardMovieNowShowing />
            <CardMovieNowShowing />
            <CardMovieNowShowing />
          </div>
        </section>
        <section className="py-32 bg-white">
          <div className="px-24 flex justify-between">
            <div className="pb-3 border-primary text-lg">
              <p className="font-bold font-Mulish">Upcoming Movies</p>
            </div>
            <div className="text-md text-primary font-bold font-Mulish">
              <Link to="/viewAll">View All</Link>
            </div>
          </div>
          <div className="ml-24 flex mt-5 gap-4 overflow-x-auto no-scrollbar">
            <BtnMonth status={"active"} month={"September"} />
            <BtnMonth month={"October"} />
            <BtnMonth month={"November"} />
            <BtnMonth month={"December"} />
            <BtnMonth month={"January"} />
            <BtnMonth month={"February"} />
            <BtnMonth month={"March"} />
            <BtnMonth month={"April"} />
            <BtnMonth month={"May"} />
            <BtnMonth month={"June"} />
            <BtnMonth month={"July"} />
            <BtnMonth month={"August"} />
          </div>
          <div className="ml-24 mt-10 gap-5 flex overflow-x-auto no-scrollbar">
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
          </div>
        </section>
        <section className="px-24 font-Mulish pb-20">
          <div className="w-full shadow-xl text-center py-12 rounded-md">
            <div>
              <p className="text-[#4E4B66] text-2xl">Be the vanguard of the</p>
              <p className="text-primary font-bold text-5xl">Moviegoers</p>
            </div>
            <div>
              <input
                type="text"
                className="border-2 border-secondary py-3 px-12 mt-10 rounded-md"
                placeholder="Type your email"
              />
              <button className="bg-primary py-3 px-6 rounded-md ml-3 text-white">
                Join Now
              </button>
            </div>
            <div className="text-[#6E7191] mt-10">
              <p>By joining you as a Tickitz member,</p>
              <p>we will always send you the latest updates via email .</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
