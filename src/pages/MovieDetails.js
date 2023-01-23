// @ts-nocheck

import React, { Fragment, useEffect, useState } from "react";

import ebvId from "../assets/img/ebu.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardMovieDetail from "../components/CardMovieDetail";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chooseMovie } from "../redux/reducers/transactions";

import moment from "moment";
import http from "../helpers/http";
import Spinner from "../components/Spinner";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSchedules, setIsLoadingTwoSchedules] = useState(false);

  useEffect(() => {
    try {
      const getMovieDetails = async () => {
        setIsLoading(true);
        const { data } = await http().get(`/movies/${id}`);
        setMovieDetails(data.results);
        setIsLoading(false);
      };
      getMovieDetails();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        setIsLoadingTwoSchedules(true);
        const { data } = await http().get(`/movieSchedules/${id}/byMovieId`, {
          params: { date, city },
        });
        setSchedule(data.results);
        setIsLoadingTwoSchedules(false);
      } catch (err) {
        setIsLoadingTwoSchedules(false);
        console.log(err);
      }
    };
    getSchedules();
  }, [id, date, city]);

  useEffect(() => {
    const getCityList = async () => {
      try {
        setIsLoadingTwoSchedules(true);
        const { data } = await http().get(`/movies/${id}/schedules/city`, {
          params: { date },
        });
        setCityList(data.results);
        setIsLoadingTwoSchedules(false);
        if (data.results.length) {
          setCity(data.results[0].city);
        }
      } catch (err) {
        setIsLoadingTwoSchedules(false);
        console.log(err);
      }
    };
    getCityList();
  }, [date, id]);

  const selectTime = (time, cinema) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
  };

  const book = () => {
    dispatch(
      chooseMovie({
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: date,
        bookingTime: selectedTime,
      })
    );
    navigate("/order");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="px-24 flex mt-10 gap-10 pb-14 font-Mulish md:px-5 md:flex-col lg:px-10">
        {isLoading ? (
          <div className="w-full flex py-20 justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="md:flex md:justify-center md:items-center">
              <CardMovieDetail img={movieDetails?.picture} />
            </div>
            <div className="flex flex-col flex-1 md:w-full">
              <div className="mb-5 md:w-full">
                <h1 className="text-2xl font-bold mb-2 md:text-xl">
                  {movieDetails?.title}
                </h1>
                <p className="font-medium">{movieDetails?.genre}</p>
              </div>
              <div className="flex gap-12 md:flex-col md:gap-4">
                <div>
                  <div className="mb-7 md:mb-4">
                    <h5 className="text-[#8692A6] text-sm mb-1">
                      Release date
                    </h5>
                    <h4>
                      {new Date(movieDetails?.releaseDate)
                        .toLocaleDateString("default", { month: "long" })
                        .concat(
                          " ",
                          new Date(movieDetails?.releaseDate)
                            .getDate()
                            .toString(),
                          ","
                        )
                        .concat(
                          " ",
                          new Date(movieDetails?.releaseDate)
                            .getFullYear()
                            .toString()
                        )}
                    </h4>
                  </div>
                  <div>
                    <h5 className="text-[#8692A6] text-sm mb-1">Duration</h5>
                    <h4>{`${movieDetails?.hours} hours ${movieDetails?.minutes} minutes`}</h4>
                  </div>
                </div>
                <div>
                  <div className="mb-7 md:mb-4">
                    <h5 className="text-[#8692A6] text-sm mb-1">Directed by</h5>
                    <h4>{movieDetails?.director}</h4>
                  </div>
                  <div>
                    <h5 className="text-[#8692A6] text-sm mb-1">Casts</h5>
                    <h4>{movieDetails?.casts}</h4>
                  </div>
                </div>
              </div>
              <div className="w-full border-b-2 my-5"></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Synopsis</h3>
                <p className="text-[#4E4B66]">{movieDetails?.synopsis}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bg-secondary px-24 flex flex-col items-center pb-10 font-Mulish md:items-start md:px-5">
        <div className="pt-10 pb-5 text-xl font-semibold">
          Showtimes and Tickets
        </div>
        <div className="flex gap-5 md:flex-col md:w-full">
          <input
            type="date"
            className="bg-[#EFF0F6] border-2 border-[#DEDEDE] rounded-xl w-56 px-2 md:w-full focus:outline-none md:py-2"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="select select-bordered border-2 border-[#DEDEDE] bg-[#EFF0F6] py-2 px-2 w-56 rounded-xl flex md:w-full focus:outline-none"
            onChange={(e) => setCity(e.target.value)}
          >
            {cityList.map((item) => (
              <option key={item.city}>{item.city}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap bg-secondary px-24 pb-10 gap-5 justify-center md:px-5 lg:px-10">
        {isLoadingSchedules ? (
          <div className="w-full flex py-20 justify-center">
            <Spinner />
          </div>
        ) : (
          schedule.map((data) => (
            <div
              className="bg-white w-[350px] pb-10 rounded-lg border shadow-md lg:w-[300px]"
              key={String(data.id)}
            >
              <div className="flex pt-5 px-1">
                <div className="flex-1 flex items-center justify-center">
                  <div>
                    <img src={data.picture} alt="" className="w-28 h-auto" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-2">{data.name}</h3>
                  <p className="text-[#6E7191]">{data.city}</p>
                  <p className="text-[#6E7191]">{data.address}</p>
                </div>
              </div>
              <div className="border border-b-secondary mt-6"></div>
              <div className="px-5 grid grid-cols-4 gap-2 pt-5 text-[#6E7191 md:px-5 md:grid-cols-3 lg:grid-cols-3">
                {data.time.map((item) => (
                  <button
                    key={item}
                    className={`${
                      data.id === selectedCinema &&
                      item === selectedTime &&
                      "text-primary font-semibold"
                    }`}
                    onClick={() => selectTime(item, data.id)}
                  >
                    {new Date(`2023-01-01 ${item}`).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </button>
                ))}
              </div>
              <div className="flex px-5 py-9 md:px-5 lg:py-5 ">
                <h3 className="flex-1 font-semibold text-[#6B6B6B] text-lg">
                  Price
                </h3>
                <h3 className="font-semibold text-xl">{`${Intl.NumberFormat(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                  }
                ).format(data.price)}/seat`}</h3>
              </div>
              <div className="px-5 md:px-5 ">
                <button
                  className="w-full bg-primary py-2 shadow-primary rounded-md text-white"
                  disabled={selectedCinema !== data.id}
                  onClick={book}
                >
                  Book now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex bg-secondary justify-center items-center px-24 gap-1 pb-20 md:px-5">
        <div className="h-[2px] bg-[#DEDEDE] w-full"></div>
        <Link to="">
          <div className="w-48 text-center text-primary font-semibold md:w-28">
            view more
          </div>
        </Link>
        <div className="h-[2px] bg-[#DEDEDE] w-full"></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MovieDetails;
