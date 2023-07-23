// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%

//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;










// import React, { useState, useEffect } from "react";
// import { Html } from "@react-three/drei";
// import loaderImage from "../assets/images/emr_logo_white.png";


// import "../assets/css/loader_image.css"


// const CanvasLoader = () => {
//   // State to track if the loader should be shown
//   const [showLoader, setShowLoader] = useState(true);

//   // Function to hide the loader after 10 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 10000);
//     return () => clearTimeout(timer); // Clear the timer when the component unmounts
//   }, []);

//   return (
//     <>
//       {showLoader && (
//         <Html
//           as="div"
//           center
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <span className="canvas-loader"></span>
//           <p
//             style={{
//               fontSize: 20,
//               color: "#F1F1F1",
//               fontWeight: 800,
//               marginTop: 40,
//             }}
//           > <img
//           className="altImage"
//           src={loaderImage}
//           alt="Loading..."
//           style={{
//               // width: "700px", // Customize the image size as needed
//               // height: "400px",
//               // Customize the image size as needed
//           }}
//          />
//             ......................................................
//           </p>
//         </Html>
//       )}
//     </>
//   );
// };

// export default CanvasLoader;















import React, { useState } from "react";
import { Html } from "@react-three/drei";
import loaderImage from "../assets/images/emr_logo_white.png";

import "../assets/css/loader_image.css";

const CanvasLoader = () => {
  // State to track if the content has loaded
  const [contentLoaded, setContentLoaded] = useState(false);

  // Simulate content loading (replace this with actual loading logic)
  // For example, fetch data, load resources, etc.
  // Once the content is loaded, call setContentLoaded(true)

  // For demonstration purposes, let's simulate content loading with a button click
  const simulateContentLoaded = () => {
    // Replace this with actual loading logic
    // For example, fetch data, load resources, etc.
    // Once the content is loaded, call setContentLoaded(true)
    setContentLoaded(true);
  };

  return (
    <>
      {!contentLoaded && (
        <Html
          as="div"
          center
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span className="canvas-loader"></span>
          <p
            style={{
              fontSize: 20,
              color: "#F1F1F1",
              fontWeight: 800,
              marginTop: 40,
            }}
          >
            <img
              className="altImage"
              src={loaderImage}
              alt="Loading..."
              style={{
                // width: "700px", // Customize the image size as needed
                // height: "400px", // Customize the image size as needed
              }}
            />
            ......................................................
          </p>
        </Html>
      )}

      {/* Replace this button with your actual content */}
     
 
    </>
  );
};

export default CanvasLoader;
``
