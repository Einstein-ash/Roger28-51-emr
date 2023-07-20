// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   // const computer = useGLTF("./robo/scene.gltf");


//   return (
//     <mesh>
//       <hemisphereLight intensity={2} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.1}
//         position={isMobile ? [0, -3, -2.2] : [0, -8.25, -1.5]}
//         rotation={[-0.1, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: false }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           // enableZoom={true}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;





//  original computer.jsx

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  // const computer = useGLTF("./robo/scene.gltf");
  // const computer = useGLTF("./ethereum_3d_logo/scene.gltf");
  const computer = useGLTF("./New_folder/EMR_logo.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-2, 50, 60]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={4} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1}

        // {/* Set position for vertical orientation */}
        position={[-3, 3, 0]}

        // {/* Set rotation to [0, 0, 0] to avoid any initial rotation */}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // <Canvas
    //   frameloop='demand'
    //   shadows
    //   dpr={[1, 2]}
    //   camera={{ position: [20, 3, 5], fov: 250 }}
    //   gl={{ preserveDrawingBuffer: false }}
    // >
      // {/* <Suspense fallback={<CanvasLoader />}>
      //   <OrbitControls
      //     enableZoom={false}
      //     maxPolarAngle={Math.PI / 2}
      //     minPolarAngle={Math.PI / 2}
      //   />
      //   <Computers isMobile={isMobile} />
      // </Suspense> */}

      
        <Canvas>
            <OrbitControls enableZoom = {false} />
            <ambientLight intensity={0.6}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            

           <Suspense fallback={null}>
        <Computers />
      </Suspense>

        </Canvas>

      // {/* <Preload all /> */}
    
  );
};

export default ComputersCanvas;



// ****************************************************


