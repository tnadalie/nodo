import React, { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import "./HomePage.css";
import { getPhotos } from "./requests";
const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
function HomePage() {
  const [initialized, setInitialized] = useState(false);
  const [images, setImages] = useState([]);
  const [layers, setLayers] = useState([]);
  const loadImages = async () => {
    const response = await getPhotos();
    setImages(response.data.hits);
  };
  useEffect(() => {
    if (!initialized) {
      loadImages();
      setInitialized(true);
    }
  });
  return (
    <div className="home-page">
      {images.map((img, i) => {
        return (
          <>
            <Parallax
              blur={1}
              bgImage={img.userImageURL}
              bgImageAlt="coucou"
              strength={600}
              renderLayer={percentage => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      background: `white`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 500,
                      height: percentage * 500,
                    }}
                  />
                </div>
              )}
            >
              <div style={{ height: 500 }}>
                <div style={insideStyles}>Coucou</div>
              </div>
            </Parallax>
          </>
        );
      })}
    </div>
  );
}
export default HomePage;
