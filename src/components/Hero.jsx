import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-30'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-30`}>
            <span className='text-[#8a2be2f5]'>E</span>
            <span className='text-[#0d98129e]'>M</span>
            <span className='text-[#8a2be2f5]'>R</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100 text-[25px] `}>
          Embedded System and Robotics Club <br className='sm:block hidden' />
          <div className="mt-2 text-secondary text-[20px] max-w-3xl ">
                    Vision "Engineering Education should orient towards Innovation"
                </div>
            
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> 

       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
