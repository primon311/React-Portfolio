import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-thin tracking-tight lg:mt-1 lg:text-6xl"
            >
              Saiful Islam Pimon
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Resume Button */}
            <motion.a
              href="/path/to/your/resume.pdf"
              download
              className="inline-block text-lg font-medium py-3 px-6 mt-6 rounded-lg text-white bg-gradient-resume bg-[length:200%_200%] animate-gradient-move"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
            >
              Resume
            </motion.a>
          </div>
        </div>

        {/* Right Section with Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Saiful Islam Pimon"
              className="w-3/4 h-2/3 object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;