import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Club() {
  const [club, setClub] = useState([]);
  useEffect(() => {
    const getClub = async () => {
      try {
        const res = await axios.get("http://localhost:4001/club"); //fetches from db
        console.log(res.data);
        setClub(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClub();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            School Clubs{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {club.map((item) => (
            // <clubCards key={item.id} item={item} />

            <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.nameOfClub}
                  <div className="badge badge-secondary">{item.school}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">${item.price}</div>
                  <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default Club;
