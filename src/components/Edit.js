import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Edit() {
  let history = useNavigate();
  const location = useLocation();
  const to_update_data = location.state;
  // if (to_update_data) window.location.reload();

  // console.log(to_update_data);

  let Users = JSON.parse(localStorage.getItem("AllUser"));

  const id = to_update_data.id;
  const [name, setName] = useState(to_update_data.name);
  const [email, setEmail] = useState(to_update_data.email);
  const [phoneno, setPhoneno] = useState(to_update_data.phoneno);
  const [dob, setDOB] = useState(to_update_data.dob);
  const [city, setCity] = useState(to_update_data.city);
  const [district, setDistrict] = useState(to_update_data.district);
  const [province, setProvince] = useState(to_update_data.province);
  const [country, setCountry] = useState(to_update_data.country);

  var index = Users.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleUpdate = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === "" || email === "" || phoneno.trim().length < 7) {
      console.log(name, email, phoneno);

      toast.error("Recheck & fill Name, Email, and Phone field correctly !!!");
    } else {
      if (email.match(validRegex)) {
        Users.splice(index, 1);

        let updated_user = {
          id: to_update_data.id,
          name: name,
          email: email,
          phoneno: phoneno,
          dob: dob,
          city: city,
          district: district,
          province: province,
          country: country,
        };

        Users.push(updated_user);
        localStorage.setItem("AllUser", JSON.stringify(Users));
        location.state = null;
        history("/profiles");
      } else {
        toast.warn("Fill email in correct format ");
      }
    }
  };
  return (
    <div className="md:w-[80%] w-[90%] m-auto mt-10 font-poppins font-bold">
      <h5 className="text-4xl mb-3 font-medium text-gray-900 dark:text-black">
        Edit the user with id : &nbsp;
        <span className="underline">{to_update_data.id}</span>
      </h5>
      <hr />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#000000",
          fontFamily: "poppins",
          fontWeight: 300,
          color: "white",
        }}
      />
      <div className="float-left my-6 md:my-3 ">
        <div>
          <Link to={"/profiles"}>
            <button className="text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
              Back
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
            onClick={handleUpdate}
          >
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
