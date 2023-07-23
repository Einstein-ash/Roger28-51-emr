import { Html } from "@react-three/drei";
import loaderImage from "../assets/images/emr_logo_white.png"; // Replace with the actual path to your loader image
import "../assets/css/loader_image.css"

const CanvasLoader2 = () => {
  return (
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
      {/* Display the loader image */}
      <img
        src={loaderImage}
        alt="Loading..."
        style={{
            width: "500px", // Customize the image size as needed
            height: "500px", // Customize the image size as needed
        }}
        
      />

      {/* Optionally, you can display a loading message here */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        ...
      </p>
    </Html>
  );
};

export default CanvasLoader2;















