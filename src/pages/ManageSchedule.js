import React, { Fragment } from "react";
import CardMovieDetail from "../components/CardMovieDetail";
import { Link } from "react-router-dom";
import { ChevronDown, Plus } from "react-feather";

import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";

import Footer from "../components/Footer";
import Pagination from "../components/now-showing/Pagination";
import NavbarAdmin from "../components/NavbarAdmin";
import ButtonMediumPrimary from "../components/ButtonMediumPrimary";
import ButtonMediumOutline from "../components/ButtonMediumOutline";

import ebvId from "../assets/img/ebu.png";
import ShowtimeCinema from "../components/ShowtimeCinema";
import ButtonSmallPrimary from "../components/ButtonSmallPrimary";
import ButtonSmallOutline from "../components/ButtonSmallOutline";

const ManageSchedule = () => {
  return (
    <Fragment>
      <NavbarAdmin />
      <div className="bg-secondary px-24 py-16 font-Mulish pb-10">
        <h3 className="text-xl font-bold mb-6">Form Movie</h3>
        <div className="bg-white">
          <div className="flex p-10 gap-10">
            <div>
              <CardMovieDetail />
            </div>
            <div className="w-full flex-1">
              <div className="flex gap-10 mb-5">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"movie"} name="Movie" />
                  <select
                    name="movies"
                    id="movies"
                    className="border-2 p-4 rounded-2xl focus:outline-none"
                  >
                    <option selected="true" disabled="disabled">
                      Select Movie
                    </option>
                    <option value="volvo">Spiderman</option>
                    <option value="saab">Thor</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <FormLabel for={"location"} name="Location" />
                  <select
                    name="location"
                    id="location"
                    className="border-2 p-4 rounded-2xl focus:outline-none"
                  >
                    <option selected="true" disabled="disabled">
                      Select Location
                    </option>
                    <option value="volvo">Bandung</option>
                    <option value="saab">Semarang</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"director"} name="Director" />
                  <FormInput
                    id={"director"}
                    type={"text"}
                    name={"director"}
                    placeholder={"Jon Watts"}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <FormLabel for={"cast"} name="Cast" />
                  <FormInput
                    id={"cast"}
                    type={"text"}
                    name={"cast"}
                    placeholder={"Tom Holland, Michael Keaton, Robert Dow.."}
                  />
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                  <FormLabel for={"price"} name="Price" />
                  <FormInput
                    id={"price"}
                    type={"text"}
                    name={"price"}
                    placeholder={"10"}
                  />
                </div>
                <div className="flex flex-1 gap-4">
                  <div className="flex flex-col flex-1 w-20">
                    <FormLabel for={"dateStart"} name="Date Start" />
                    <FormInput
                      id={"dateStart"}
                      type={"date"}
                      name={"dateStart"}
                      placeholder={"07/05/2020"}
                    />
                  </div>
                  <div className="flex flex-col flex-1 w-20">
                    <FormLabel for={"dateEnd"} name="Date End" />
                    <FormInput
                      id={"dateEnd"}
                      type={"date"}
                      name={"dateEnd"}
                      placeholder={"07/05/2020"}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex-1">
                  <FormLabel for={"premiere"} name="Premiere" />
                  <div className="flex gap-4 items-center mt-3">
                    <div className="bg-secondary p-4 rounded-xl shadow-md">
                      <img src={ebvId} alt="" />
                    </div>
                    <div>
                      <img src={ebvId} alt="" />
                    </div>
                    <div>
                      <img src={ebvId} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <FormLabel for={"time"} name="Time" />
                  <div className="flex gap-4 items-center mt-3">
                    <div className="grid grid-cols-4 gap-6 items-center">
                      <div className="border-2 border-primary py-1 px-6 rounded-lg">
                        <Plus />
                      </div>
                      <div>08:30am</div>
                      <div>10:30pm</div>
                      <div>12:00pm</div>
                      <div>04:30pm</div>
                      <div>07:00pm</div>
                      <div>08:30pm</div>
                      <div>08:30pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-end px-10 mt-10 pb-10">
            <div className="w-[150px]">
              <ButtonMediumOutline name={"Reset"} />
            </div>
            <div className="w-[150px]">
              <ButtonMediumPrimary name={"Submit"} />
            </div>
          </div>
        </div>

        <div className="flex items-center pt-10 pb-7">
          <div className="flex-1 font-Mulish font-bold text-xl">
            <h3>Data Schedule</h3>
          </div>
          <div className="flex items-center gap-3 font-Mulish">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                className="border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl m-1 cursor-pointer flex justify-center items-center"
              >
                <span className="flex-1">Sort</span>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/viewAll">Popular</Link>
                </li>
                <li>
                  <Link to="/viewAll">Z-A</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                className="border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl m-1 cursor-pointer flex justify-center items-center"
              >
                <span className="flex-1">Location</span>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/viewAll">Bandung</Link>
                </li>
                <li>
                  <Link to="/viewAll">Semarang</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                className="border-2 border-[#DEDEDE] bg-white py-2 px-2 w-28 rounded-xl m-1 cursor-pointer flex justify-center items-center"
              >
                <span className="flex-1">Movie</span>
                <div>
                  <ChevronDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/viewAll">Spiderman</Link>
                </li>
                <li>
                  <Link to="/viewAll">Thor</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gap-5 py-10 flex flex-wrap bg-white justify-center">
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
          <ShowtimeCinema
            btn={[
              <ButtonSmallPrimary name={"Update"} link={""} />,
              <ButtonSmallOutline name={"Delete"} link={""} />,
            ]}
          />
        </div>
        <Pagination />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ManageSchedule;
