import React from "react";
import Image from "next/image";

const TopImage = () => {
  return (
    <div className="w-[300px] md:w-[600px] ">
      <Image
        src={"/Top-Calender.jpg"}
        width={700}
        height={700}
        priority={true}
        alt="Calender image"
        className="shadow-custom-right "
      />
    </div>
  );
};

export default TopImage;
