import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import "./Header.css";
import "swiper/css";
import "./CarouselHeader.css";
import "swiper/css/navigation";

export const CarouselHeader = () => {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Main"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="bg-white mt-2">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500, // images automatically play after 4500 milliseconds
        }}
        // className='h-[50%]'
      >
        {Array.from({ length: 3 }, (_, i) => (
          <SwiperSlide key={i} className="slide-content">
            <img src={`../images/header-carousel-${i}.jpg`} />
            <div className="text-container">
              <div className="header1-text">
                <h1>{data[0]?.Header1 || "Header1"}</h1>{" "}
                {/* Access Header1 from the first item in data */}
              </div>

              <div className="header2-text">
                <h1>{data[0]?.Header2 || "Header2"}</h1>{" "}
                {/* Access Header1 from the first item in data */}
              </div>

              <div className="header-text">
                {/* Display subsequent headers conditionally based on image index */}
                {i === 0 && data[0]?.Header3 && (
                  <h1 style={{ fontWeight: "bold" }}>{data[0]?.Header3}</h1>
                )}
                {i === 1 && data[0]?.Header4 && (
                  <h1 style={{ fontWeight: "bold" }}>{data[0]?.Header4}</h1>
                )}
                {i === 2 && data[0]?.Header5 && (
                  <h1 style={{ fontWeight: "bold" }}>{data[0]?.Header5}</h1>
                )}
                <br/>

                <div className="free-quote-button-container">
                  <button className="free-quote-button">
                    GET A FREE QUOTE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
