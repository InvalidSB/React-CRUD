import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./User";

/* 
After you run it for the first time you can comment the above like 

import Users from "./User";

 and 

Uncomment the like below , inside of Home function

// let Users = JSON.parse(localStorage.getItem("AllUser"));


*/

function Home() {
  let history = useNavigate();
  // let Users = JSON.parse(localStorage.getItem("AllUser"));
  // id :-not required to make any state of it
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [dob, setDOB] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("Nepal");

  // for error validation
  const [nameerr, setNameerr] = useState(null);
  const [emailerr, setEmailerr] = useState(null);
  const [phoneerr, setPhoneerr] = useState(null);

  const handleSubmit = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === "") {
      setNameerr("Name can't be empty");
      // toast.error("Name can't be empty");
    } else if (email === "") {
      setEmailerr("Email can't be empty");
    } else if (phoneno.length <= 6) {
      setPhoneerr("Phone no. length should not be less than 7");
    } else if (email.match(validRegex)) {
      const ids = uuid();
      let uniqueId = ids.slice(0, 8);
      let data_to_push = {
        id: uniqueId,
        name: name,
        email: email,
        phoneno: phoneno,
        dob: dob,
        city: city,
        district: district,
        province: province,
        country: country,
      };
      Users.push(data_to_push);
      console.log(Users);
      history("/profiles");
      localStorage.setItem("AllUser", JSON.stringify(Users));
    } else {
      toast.warn("Email should be in correct format");
    }
  };

  return (
    <div className="md:w-[80%] w-[90%] m-auto my-10 font-poppins font-bold">
      <ToastContainer
        toastStyle={{
          fontFamily: "poppins",
          fontWeight: 300,
          color: "black",
        }}
      />
      <h3 className="text-4xl mb-3 font-medium text-gray-900 dark:text-black">
        Welcome !!! Here you can add a new user.
      </h3>
      <hr />
      <div className="float-right my-6 md:my-3 ">
        <div>
          <Link to={"/profiles"}>
            <button className="text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
              View Profiles
            </button>
          </Link>
        </div>
      </div>
      <div className=" m-auto mt-12">
        <div
          className="w-[100%] md:w-[70%] bg-[#f2f2f2] md:p-12 p-6 rounded-md m-auto md:m-auto space-y-6  mb-12 flex flex-wrap justify-between  "
          action="#"
        >
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Enter name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name..."
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
            {nameerr ? (
              <span className="float-left text-[12px] text-[red]">
                {nameerr}
              </span>
            ) : null}
          </div>
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Enter email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              placeholder="name@gmail.com"
              required
            />
            {emailerr ? (
              <span className="float-left text-[12px] text-[red]">
                {emailerr}
              </span>
            ) : null}
          </div>

          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Phone number
            </label>
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              placeholder="9865005564"
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
            {phoneerr ? (
              <span className="float-left text-[12px] text-[red]">
                {phoneerr}
              </span>
            ) : null}
          </div>

          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Date of birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              placeholder="9865005564"
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <h5 className="text-xl font-medium m-0 text-black w-[100%] ">
            Address
          </h5>
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Kathmandu"
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              District
            </label>
            <input
              type="text"
              name="district"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Kathmandu"
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Province number
            </label>
            <select
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
            >
              <option value="DEFAULT">Choose the province no</option>
              <option value="Unnamed_Province1">1</option>
              <option value="Madhesh">2</option>
              <option value="Bagmati">3</option>
              <option value="Ghandaki">4</option>
              <option value="Lumbini">5</option>
              <option value="Karnali">6</option>
              <option value="SudurPaschim">7</option>
            </select>
          </div>
          <div className="md:w-[45%] w-[100%] m-auto ">
            <label className="block mb-1 text-sm font-medium text-black dark:text-gray-900 float-left">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
