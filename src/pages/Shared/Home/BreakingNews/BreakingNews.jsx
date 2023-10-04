import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {

  return (
    <div className="flex md:py-2 md:my-8 bg-gray-200 rounded-md">
      <button className="md:px-5 md:py-2 md:mx-2 bg-red-600 text-white rounded font-semibold w-1/6">Breaking News</button>
      <Marquee pauseOnHover='true'>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
