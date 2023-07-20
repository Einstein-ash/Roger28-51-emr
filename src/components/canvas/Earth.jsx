// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;



// ******* doing some changes below ** 
// jo chaiye tha,  90% mil gya :)


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("./New_folder/EMR_logo.gltf");

  return (

    <mesh>
      <hemisphereLight intensity={-0.1} groundColor='black' />
    <spotLight
      // position={[-2, 50, 60]}
      position={[-8, 0, 700]}
      angle={0.12}
      penumbra={1}
      intensity={1.4}
      castShadow
      shadow-mapSize={1024}
     
    />

    <primitive
     object={earth.scene} 
     scale={0.66} 

    //  change position of logo 
      position-y={-3.2}
      position-x={-4.4}

      // change rotation of logo
      rotation-y={-6.269}
      rotation-x={-11}



    // //  change position of logo 
    //   position-y={-3.54}
    //   position-x={-5}

    //   // change rotation of logo
    //   rotation-y={-6.26}
    //   rotation-x={-10.999}
 
    // 
      // rotation-x={Math.PI / 2}
     
     
       />


    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 7]}
      // dpr={[90, 9]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        // position: [-4, 3, 10]
        position: [0, 9 , 8]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={15}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

