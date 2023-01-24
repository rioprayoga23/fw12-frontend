// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import poster from "../assets/img/img-header.png";

import CardMovie from "../components/CardMovie";
import BtnMonth from "../components/filter/BtnMonth";
import { default as CardMovieNowShowing } from "../components/now-showing/CardMovie";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import http from "../helpers/http";

import SkeletonNowShowing from "../components/SkeletonNowShowing";
import SkeletonUpcoming from "../components/SkeletonUpcoming";

const Home = () => {
  const [nowShowing, setNowShowing] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("January");

  const [isLoadingNow, setIsLoadingNow] = useState(false);
  const [isLoadingUp, setIsLoadingUp] = useState(false);

  const getNowShowing = async () => {
    setIsLoadingNow(true);
    const { data } = await http().get("/movies/now?limit=8");
    setNowShowing(data.results);
    setIsLoadingNow(false);
  };

  useEffect(() => {
    const getUpComing = async () => {
      setIsLoadingUp(true);
      const { data } = await http().get(
        `/movies/upcoming?month=${selectedMonth}&limit=7`
      );
      setUpComing(data.results);
      setIsLoadingUp(false);
    };
    getUpComing();
  }, [selectedMonth]);

  useEffect(() => {
    getNowShowing();
  }, []);

  return (
    <div>
      <Navbar />
      <header className="flex items-center px-24 mt-10 pb-20 md:px-5 md:flex-col md:items-start lg:px-10">
        <section className="font-Mulish flex-1">
          <p className="text-xl text-[#A0A3BD] mb-5 md:text-md md:mb-1 md:text-base">
            Nearest Cinema, Newest Movie,
          </p>
          <p className="text-5xl font-bold text-primary md:text-3xl">
            Find out now!
          </p>
        </section>
        <section className="flex-1 flex justify-center md:mt-10">
          <div>
            <img src={poster} alt="" />
          </div>
        </section>
      </header>

      <main>
        <section className="py-10 bg-secondary h-wrapNowShowing">
          <div className="px-24 flex justify-between md:px-5 md:items-center lg:px-10">
            <div className="border-b-2 pb-3 border-primary text-lg">
              <p className="text-primary font-bold font-Mulish">Now Showing</p>
            </div>
            <div className="text-md text-primary font-bold font-Mulish">
              <Link to="/viewAll">View All</Link>
            </div>
          </div>
          {isLoadingNow ? (
            <div className="ml-24 mt-10 flex overflow-x-auto no-scrollbar md:ml-5 lg:ml-10">
              <SkeletonNowShowing />
              <SkeletonNowShowing />
              <SkeletonNowShowing />
              <SkeletonNowShowing />
              <SkeletonNowShowing />
              <SkeletonNowShowing />
            </div>
          ) : (
            <div className="ml-24 mt-10 flex overflow-x-auto no-scrollbar md:ml-5 lg:ml-10">
              {nowShowing?.map((movie) => (
                <div
                  className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-white rounded-lg hover:bg-white hover:border-primary cursor-pointer"
                  key={movie.id}
                >
                  <CardMovieNowShowing data={movie} />
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="py-32 bg-white md:py-24">
          <div className="px-24 flex justify-between md:px-5 lg:px-10">
            <div className="pb-3 border-primary text-lg">
              <p className="font-bold font-Mulish">Upcoming Movies</p>
            </div>
            <div className="text-md text-primary font-bold font-Mulish">
              <Link to="/viewAll">View All</Link>
            </div>
          </div>
          <div className="ml-24 flex mt-5 overflow-x-scroll no-scrollbar md:ml-5 lg:ml-10">
            <div onClick={() => setSelectedMonth("January")}>
              <BtnMonth
                month={"January"}
                status={selectedMonth === "January" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("February")}>
              <BtnMonth
                month={"February"}
                status={selectedMonth === "February" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("March")}>
              <BtnMonth
                month={"March"}
                status={selectedMonth === "March" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("April")}>
              <BtnMonth
                month={"April"}
                status={selectedMonth === "April" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("Mei")}>
              <BtnMonth
                month={"Mei"}
                status={selectedMonth === "Mei" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("June")}>
              <BtnMonth
                month={"June"}
                status={selectedMonth === "June" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("July")}>
              <BtnMonth
                month={"July"}
                status={selectedMonth === "July" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("August")}>
              <BtnMonth
                month={"August"}
                status={selectedMonth === "August" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("September")}>
              <BtnMonth
                month={"September"}
                status={selectedMonth === "September" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("October")}>
              <BtnMonth
                month={"October"}
                status={selectedMonth === "October" ? "active" : ""}
              />
            </div>
            <div onClick={() => setSelectedMonth("December")}>
              <BtnMonth
                month={"December"}
                status={selectedMonth === "December" ? "active" : ""}
              />
            </div>
          </div>
          {isLoadingUp ? (
            <div className="ml-24 mt-10 flex overflow-x-scroll no-scrollbar md:ml-5 lg:ml-10">
              <SkeletonUpcoming />
              <SkeletonUpcoming />
              <SkeletonUpcoming />
              <SkeletonUpcoming />
              <SkeletonUpcoming />
              <SkeletonUpcoming />
            </div>
          ) : (
            <div className="ml-24 mt-10 flex overflow-x-scroll no-scrollbar md:ml-0 lg:ml-10">
              {upComing.length < 1 ? (
                <div className="justify-center text-center w-full mr-24 md:mr-0 lg:mr-0 text-xl md:ml-0">
                  Oopss, movie not found
                </div>
              ) : (
                upComing.map((movie) => (
                  <div
                    className="group flex-shrink-0 h-fit p-6 mr-5 border-2 border-secondary rounded-lg md:mr-0 md:p-2 md:ml-5 flex flex-col items-center justify-center lg:w-48 md:m-2"
                    key={movie.id}
                  >
                    <CardMovie data={movie} />
                  </div>
                ))
              )}
            </div>
          )}
        </section>
        <section className="px-24 font-Mulish pb-20 md:px-5 lg:px-10">
          <div className="w-full shadow-xl text-center py-12 rounded-md md:p-5 md:flex md:flex-col md:items-center">
            <div className="">
              <p className="text-[#4E4B66] text-2xl md:text-base">
                Be the vanguard of the
              </p>
              <p className="text-primary font-bold text-5xl md:text-4xl">
                Moviegoers
              </p>
            </div>
            <div>
              <input
                type="text"
                className="border-2 border-secondary py-3 px-12 mt-10 rounded-md md:px-7"
                placeholder="Type your email"
              />
              <button className="bg-primary py-3 px-6 rounded-md ml-3 text-white md:w-full md:ml-0 md:mt-2">
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
