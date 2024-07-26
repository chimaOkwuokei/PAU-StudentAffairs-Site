import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

// import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              // <Cards item={item} key={item.id} />
              <div className="mt-4 my-3 p-3">
              <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                  <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
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
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
