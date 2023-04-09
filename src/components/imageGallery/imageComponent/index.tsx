import locationIcon from "../../../assets/icons/location.svg";
import "./index.css";

const ImageComponent = ({ src }: { src: string }) => {
  return (
    <div className="image-container glitch">
      <div className="image-overlay">
        <div>
          <img src={locationIcon} />
          <span>Brașov, Romania</span>
        </div>
      </div>
      <img className="image-item" src={src} />
    </div>
  );
};

export default ImageComponent;
