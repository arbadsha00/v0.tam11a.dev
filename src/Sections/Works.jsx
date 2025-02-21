import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.jpeg";
import work7 from "../assets/work7.jpeg";

const Works = () => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-11 lg:grid-cols-4 lg:grid-rows-6 gap-2 md:gap-4 h-[2100px] sm:h-[2500px]  md:h-[1200px] lg:h-[600px]">
      <div className="card-bg">
        <h1 className="text-xl font-primary text-secondary-2 ">
          some of my works
        </h1>
      </div>
      <a href="" className="card-bg p-0  md:row-span-6   ">
        <img
          src={work1}
          className="object-cover object-top  w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0 md:row-span-3   lg:row-span-4 ">
        <img
          src={work2}
          className="object-cover object-top  w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0 md:row-span-2  ">
        <img
          src={work3}
          className="object-cover object-left w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0 md:row-span-3  ">
        <img
          src={work4}
          className="object-cover object-top   w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0 md:row-span-3   lg:row-span-4 ">
        <img
          src={work5}
          className="object-cover object-top  w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0   md:row-span-2 ">
        <img
          src={work6}
          className="object-cover object-top  w-full h-full "
          alt="website image"
        />
      </a>
      <a href="" className="card-bg p-0  md:row-span-2">
        <img
          src={work7}
          className="object-cover object-top  w-full h-full  "
          alt="website image"
        />
      </a>
    </div>
  );
};

export default Works;
