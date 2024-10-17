import { useState } from "react";

type AnimatedImagePropType = {
  src: string;
  alt?: string;
};

const AnimatedImage = ({ src, alt }: AnimatedImagePropType) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true); // Set to true when the image is fully loaded
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
};

export default AnimatedImage;
