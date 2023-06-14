import React from "react";
import videointro from "./../../assets/introvideo.mp4";
import poster from "./../../assets/postervideo.png";

const Videointro = () => {
  return (
    <div className="flex justify-center">
      <div className="w-64 sm:w-80 md:w-[1000px]">
        <div className="relative">
          <video controls src={videointro} poster={poster} />
          {/* <source src={videointro} type="video/webm" /> */}
          {/* </video> */}
        </div>
      </div>
    </div>
  );
};

export default Videointro;
