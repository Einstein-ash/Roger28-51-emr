// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from 'react-router-dom';

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { meshBounds } from "@react-three/drei";


// const ServiceCard = ({ index, title, icon }) => (

  
//   <Tilt className='xs:w-[250px] w-full  '>


//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-1 px-12 min-h-[40px]  flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>

// );

// const About = () => {

//   const navigate = useNavigate();

//   const handleTabClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         {/* <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2> */}
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-0   text-secondary text-[50px] max-w-6xl leading-[30px]'
//         // className="LinkCards"

//       >
//         {/* I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life! */}
//       </motion.p>

//       <div className='mt-0 flex  flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");









import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

import { styles } from "../styles";
// import { services } from "../data";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { meshBounds } from "@react-three/drei";

const ServiceCard = ({ index, title, icon, path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
  };

  return (
    <Tilt className='xs:w-[250px] w-full  '>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        onClick={handleCardClick} // Call the handleCardClick function on click
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-1 px-12 min-h-[40px]  flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-0   text-secondary text-[50px] max-w-6xl leading-[30px]'
      >
 
      </motion.p>

      <div className='mt-0 flex  flex-wrap gap-10'>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");







