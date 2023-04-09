import { lightboxImages } from "./images";
import { useState } from "react";
import Lightbox from 'react-spring-lightbox';
import "./index.css";
import { Grid } from "@mui/material";
import ImageComponent from "./imageComponent";
import ImageClose from "./imageClose";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(-1);

  const gotoPrevious = () =>
      currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
      currentImageIndex + 1 < lightboxImages.length &&
      setCurrentIndex(currentImageIndex + 1);

  const onClose = () => {
    setCurrentIndex(-1);
  }

  return (
    <div className="gallery-container">
      <Grid container spacing={1} className="gallery-row row-1">
        {lightboxImages.slice(0, 4).map((image, index) => {
          return (
            <Grid key={`${index}-row-1`} item lg={3} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(index)}>
              <ImageComponent src={image.src}/>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={1} className="gallery-row row-2">
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(4)}>
            <ImageComponent src={lightboxImages[4].src}/>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12} onClick={() => setCurrentIndex(5)}>
            <ImageComponent src={lightboxImages[5].src}/>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12} onClick={() => setCurrentIndex(6)}>
            <ImageComponent src={lightboxImages[6].src}/>
          </Grid>
      </Grid>
      <Grid container spacing={1} className="gallery-row row-3">
        {lightboxImages.slice(8, 12).map((image, index) => {
          return (
            <Grid key={`${index}-row-3`} item lg={3} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(index)}>
              <ImageComponent src={image.src}/>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={1} className="gallery-row row-4">
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(12)}>
            <ImageComponent src={lightboxImages[12].src}/>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(13)}>
            <ImageComponent src={lightboxImages[13].src}/>
          </Grid>
      </Grid>
      <Grid container spacing={1} className="gallery-row row-5">
          <Grid item lg={3} md={3} sm={3} xs={12} onClick={() => setCurrentIndex(7)}>
            <ImageComponent src={lightboxImages[7].src}/>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12} onClick={() => setCurrentIndex(15)}>
            <ImageComponent src={lightboxImages[15].src}/>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(14)}>
            <ImageComponent src={lightboxImages[14].src}/>
          </Grid>
      </Grid>
      <Grid container spacing={1} className="gallery-row row-4">
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(16)}>
            <ImageComponent src={lightboxImages[16].src}/>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} onClick={() => setCurrentIndex(17)}>
            <ImageComponent src={lightboxImages[17].src}/>
          </Grid>
      </Grid>

      <Lightbox
            isOpen={currentImageIndex > -1}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            onClose={onClose}
            images={lightboxImages}
            currentIndex={currentImageIndex}
            renderHeader={() => (<ImageClose handleOnClose={onClose}/>)}
        />
    </div>
  );
};

export default ImageGallery;
