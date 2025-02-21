import definedsolution from "../assets/definedsolution.svg";
import reserveit from "../assets/reserveit 1.svg";
import reserveit2 from "../assets/reserveit 2.svg";
import planetx from "../assets/Vector.svg";
const Experience = () => {
  return (
    <div className="flex flex-wrap  gap-2 md:gap-4">
      <div className="card-bg relative min-w-fit flex-1 place-items-start">
        <div className="absolute -top-16 -right-1 z-0">
          <img
            className="h-[330px] grayscale opacity-10"
            src={definedsolution}
            alt="definedsolution logo"
          />
        </div>
        <div className="relative">
          <img
            className="h-[80px] grayscale"
            src={definedsolution}
            alt="definedsolution logo"
          />
          <p className="text-lg text-secondary-1 font-medium font-secondary mt-1 ">
            Co-Founder & Senior Software Engineer
          </p>
          <p className="text-secondary-2 font-secondary">Oct 2023~</p>
        </div>
      </div>
      <div className="card-bg relative min-w-fit flex-1 place-items-start  ">
        <div className="absolute -top-8 -right-6 z-0">
          <img
            className="h-[230px] grayscale opacity-10"
            src={reserveit2}
            alt="reserveit logo"
          />
        </div>
        <div className="relative">
          <img
            className="h-[70px] grayscale"
            src={reserveit}
            alt="reserveit logo"
          />
          <p className="text-lg text-secondary-1 font-medium font-secondary mt-3">
            Senior Software Engineer
          </p>
          <p className="text-secondary-2 font-secondary">Oct 2021 - Oct 2023</p>
        </div>
      </div>
      <div className="card-bg relative min-w-fit flex-1 place-items-start  ">
        <div className="absolute -top-6 -right-6 z-0">
          <img
            className="h-[230px] grayscale opacity-10"
            src={planetx}
            alt="planetx logo"
          />
        </div>
        <div className="relative">
          <img
            className="h-[70px] grayscale"
            src={planetx}
            alt="planetx logo"
          />
          <p className="text-lg text-secondary-1 font-medium font-secondary mt-3">
            Junior Full Stack Engineer
          </p>
          <p className="text-secondary-2 font-secondary">Mar 2021 - Sep 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
