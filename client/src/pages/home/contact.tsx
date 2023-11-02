/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Letter } from "../../../components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const social = [
  {
    link: "https://www.linkedin.com/in/hajrul-ahmad-harudin/",
    akun: "linkedin",
  },
  {
    link: "https://github.com/haddinz?tab=repositories/",
    akun: "github",
  },
  {
    link: "https://www.behance.net/insinyur/",
    akun: "behance",
  },
];
const mail = [
  {
    link: "mailto:hajrulahmad689@gmail.com",
    akun: "email",
  },
  {
    link: "FaizCV.pdf",
    akun: "resume",
  },
];

function Contact() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 300]);
  const minx = useTransform(scrollYProgress, [0, 1], [-100, -400]);
  const valocity = useSpring(x, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const minvalocity = useSpring(minx, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      id="contact"
      ref={myRef}
      className="min-h-[100vh] flex flex-col justify-around overflow-hidden"
    >
      <div className="leading-[4.5rem] py-5">
        <motion.div style={{ x: valocity }} className="relative">
          <Velocity letter={"getintouch"} />
        </motion.div>
        <motion.div style={{ x: minvalocity }} className="relative">
          <Velocity letter={"getintouch"} />
        </motion.div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto text-gray-950">
        <div className="text-4xl lg:text-6xl font-poppins">
          <h2>Please fell free</h2>
          <h2>To cantact me</h2>
        </div>

        <div className="space-y-10">
          <div>
            <Letter word={" social media "} />
            <div className="flex space-x-20 mt-5">
              {social.map((data, index) => (
                <Link
                  key={index}
                  to={data.link}
                  target="blank"
                  className="border-b-2 border-gray-950"
                >
                  {data.akun}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Letter word={" contact mail "} />
            <div className="flex space-x-20 mt-5">
              {mail.map((data, index) => (
                <a
                  href={data.link}
                  key={index}
                  target="blank"
                  className="border-b-2 border-gray-950"
                >
                  {data.akun}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Velocity = ({ letter }: { letter: string }) => {
  return (
    <div className="flex text-gray-950 text-[6rem] font-plaster uppercase whitespace-nowrap">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index}> {letter} </div>
      ))}
    </div>
  );
};

export default Contact;
