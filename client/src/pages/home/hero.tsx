import { useRef } from "react";
import { Link } from "react-router-dom";
import useHover from "../../../utils/hover";

function Hero() {
  const myRef = useRef<HTMLDivElement>(null);
  const hover = useHover(myRef, {
    x: 20,
    y: -10,
    z: 15,
  });

  return (
    <div
      id="home"
      ref={myRef}
      className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-10 mt-28 scroll-m-28"
    >
      <div className="col-span-2 flex flex-col justify-center">
        <div className="text-[1.2rem] md:text-[1.8rem] lg:text-[2.8rem] mb-12 font-poppins">
          <p>Hi, Iam Hajrul, machine learning</p>
          <p>developher, focused on training</p>
          <p>in data and algorithms</p>
        </div>

        <Link
          to={"mailto:hajrulahmad689@gmail.com"}
          className="border-b-2 border-gray-950 pb-1 w-fit cursor-pointer"
        >
          hajrulahmad689@gmail.com
        </Link>
      </div>

      <div
        className="col-span-1 overflow-hidden"
        style={{ transform: hover.transform }}
      >
        <img
          alt="profile"
          src="../images/profile.png"
          className="object-cover h-[30rem] w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
