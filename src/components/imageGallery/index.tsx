import { Gallery } from "react-grid-gallery";
import { galleryImages, lightboxImages } from "./images";
import { useState } from "react";
import Lightbox from 'react-spring-lightbox';
import "./index.css";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(-1);

  const gotoPrevious = () =>
      currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
      currentImageIndex + 1 < lightboxImages.length &&
      setCurrentIndex(currentImageIndex + 1);

  return (
    <div className="gallery-container">
      <Gallery images={galleryImages} enableImageSelection={false} onClick={(index: number, item: any) => setCurrentIndex(index)}/>
      <Lightbox
            isOpen={currentImageIndex > -1}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            onClose={() => setCurrentIndex(-1)}
            images={lightboxImages}
            currentIndex={currentImageIndex}
            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            // renderPrevButton={() => (<CustomLeftArrowButton />)}
            // renderNextButton={() => (<CustomRightArrowButton />)}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
            // style={{ background: "grey" }}

            /* Handle closing */
            // onClose={handleClose}

            /* Use single or double click to zoom */
            // singleClickToZoom

            /* react-spring config for open/close animation */
            // pageTransitionConfig={{
            //   from: { transform: "scale(0.75)", opacity: 0 },
            //   enter: { transform: "scale(1)", opacity: 1 },
            //   leave: { transform: "scale(0.75)", opacity: 0 },
            //   config: { mass: 1, tension: 320, friction: 32 }
            // }}
        />
    </div>
  );
};

export default ImageGallery;
