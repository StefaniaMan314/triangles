import { Container } from "@mui/material";
import "./index.css";
import { useState } from "react";
import ImageGallery from "../../components/imageGallery";

const GalleryLayout = () => {
  return (
    <div id="galleryId" className="gallery-wrapper">
      <Container maxWidth="lg">
        <ImageGallery/>
      </Container>
    </div>
  );
};

export default GalleryLayout;
