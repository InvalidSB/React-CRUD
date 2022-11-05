import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import Users from "./User";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

function Profiles() {
  let history = useNavigate();

  let Users = JSON.parse(localStorage.getItem("AllUser"));

  const handleDelete = (id) => {
    var index = Users.map((e) => {
      return e.id;
    }).indexOf(id);

    Users.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("AllUser", JSON.stringify(Users));

    history("/profiles");
  };

  return (
    <div className="w-[90%] m-auto mt-10 font-poppins font-bold">
      <div className="float-left mb-6 md:mb-3">
        <div>
          <Link to={"/"}>
            <button className="text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
              Add new
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-4xl mb-3 font-medium text-gray-900 dark:text-black">
        All Users
      </h5>
      <hr />
      <div className="md:w-[80%] w-full m-auto my-16 md:my-12">
        <div className="flex justify-between flex-wrap w-[100%]">
          {Users && Users.length > 0
            ? Users.sort((a, b) => a.name.localeCompare(b.name)).map((each) => {
                // console.log(each.id);
                return (
                  <div
                    key={each.id}
                    className="w-[90%] m-auto my-6 md:my-12 md:w-[30%]"
                  >
                    <div className=" p-5 max-w-sm rounded-lg border border-gray-200 shadow-md bg-gray-800">
                      <div className=" text-white my-3">
                        <div className=" flex align-middle justify-center mb-2 ">
                          <div className="p-1 mr-3 w-12 h-12 rounded-full ring-4 ring-blue-300 dark:ring-blue-500 text-3xl">
                            {each.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="text-3xl ">{each.name}</h3>
                            <p className="float-left">{each.email}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="text-left my-3">
                          <h4>
                            <span className=" text-blue-500">Phone No. :</span>
                            &nbsp;
                            {each.phoneno}
                          </h4>
                          <p>
                            <span className=" text-blue-500">
                              Date Of Birth :
                            </span>
                            &nbsp;
                            {each.dob}
                          </p>
                          <h3 className="text-center mt-3 text-white underline">
                            Address
                          </h3>
                          <p>City :&nbsp; {each.city} </p>
                          <p>District :&nbsp; {each.district} </p>
                          <p>Province :&nbsp; {each.province} </p>
                          <p>Resides in :&nbsp; {each.country} </p>
                        </div>
                      </div>
                      <div className="flex justify-around">
                        <Link to={"/edit"} state={each}>
                          <button className="flex justify-between align-middle text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
                            Edit
                            <FiEdit size={24} className="ml-3" />
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(each.id)}
                          className="flex justify-between align-middle text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Delete
                          <RiDeleteBinFill size={24} className="ml-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
