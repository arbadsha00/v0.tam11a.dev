import logo from "../assets/logo.svg";
import image from "../assets/image.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
const Hero = () => {
  return (
    <div className="grid grid-cols-13 grid-rows-4 gap-4">
      <div className=" card-bg col-span-2 row-span-2">
        <img src={logo} alt="logo" />
      </div>
      <div className="p-6 card-bg col-span-5 row-span-2 ">
        <div>
          <h1 className=" font-primary text-white text-[40px]">
            Hi! I’m <span className="text-primary ">Tam</span>
          </h1>
          <p className="text-secondary-2 font-secondary text-xl">
            Software Engineer, currently working at Defined Solution LTD
          </p>
        </div>
      </div>
      <div className="card-bg col-span-3 row-span-4 ">
        <img
          className="rounded-[14px] w-full h-full object-cover object-center "
          src={image}
          alt="Profile Image"
        />
      </div>
      <a href="" className="card-bg p-6">
        <Icon
          className="text-secondary-2"
          icon="lucide:linkedin"
          width="30"
          height="30"
        />
      </a>
      <a href="" className="card-bg p-6">
        <Icon
          className="text-secondary-2"
          icon="meteor-icons:discord"
          width="30"
          height="30"
        />
      </a>
      <a href="" className="card-bg p-6">
        <Icon
          className="text-secondary-2"
          icon="lucide:facebook"
          width="30"
          height="30"
        />
      </a>
      <a href="" className="card-bg p-6">
        <Icon
          className="text-secondary-2"
          icon="icon-park-outline:youtube"
          width="30"
          height="30"
        />
      </a>
      <a href="" className="card-bg col-span-2 row-span-2 p-6">
        <Icon
          className="text-secondary-2"
          icon="tdesign:logo-github"
          width="70"
          height="70"
        />
        <p className="text-secondary-2 font-primary pt-2">@tam11a</p>
      </a>
      <div className="card-bg col-span-7 row-span-2 p-6">
        <div>
          <p className="text-secondary-2 font-primary text-2xl">about</p>
          <p className="text-secondary-1 font-secondary text-2xl mt-2">
            I'm a software engineer with strong focus on{" "}
            <span className="text-primary">software interface</span> &{" "}
            <span className="text-primary">digital experience.</span>
          </p>
        </div>
      </div>
      <a href="" className="card-bg p-6">
        <Icon
          className="text-secondary-2"
          icon="ri:dribbble-fill"
          width="30"
          height="30"
        />
      </a>
      <a href="" className="card-bg p-6 col-span-3 flex gap-2">
        <Icon
          className="text-secondary-2"
          icon="majesticons:mail-line"
          width="30"
          height="30"
        />
        <p className="font-secondary text-xs text-secondary-2">
          ibrahimsadiktamim@gmail.com
        </p>
      </a>
    </div>
  );
};

export default Hero;
