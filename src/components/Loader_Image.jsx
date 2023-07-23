import { Html } from "@react-three/drei";
import loaderImage from "../assets/images/emr_logo_white.png"; // Replace with the actual path to your loader image
import "../assets/css/loader_image.css"

const CanvasLoader2 = () => {
  return (
    <Html
      as="div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Display the loader image */}
     

      {/* Optionally, you can display a loading message here */}
      <p
        style={{
          fontSize: 50,
          color: "#F1F1F1",
          fontWeight: 900,
        //   marginTop: 40,
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        //   flexDirection: "row",
        }}
      >
        <img
        src={loaderImage}
        alt="Loading..."
        style={{
            width: "200vh", // Customize the image size as needed
            height: "100px", // Customize the image size as needed
        }}
       />

       ....
      </p>
    </Html>
  );
};

export default CanvasLoader2;




// import React from "react";
// import loaderImage from "../assets/images/emr_logo_white.png"; // Replace with the actual path to your image

// const CanvasLoader2 = () => {
//   return (
//     <div>
//       {/* Use the imported image in an image tag */}
//       <img src={loaderImage} alt="My Image" />

//       {/* You can add more content here */}
//       <h1>Hello, this is my component!</h1>
//       <p>This is some sample text.</p>
//     </div>
//   );
// };

// export default CanvasLoader2;
