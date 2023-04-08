import { useCallback } from "react";
import "./index.css";

const AnimatedButton = () => {
  const onButtonClick = useCallback(() => {
    const el = document.getElementById("galleryId");
    if (el) el.scrollIntoView({ behavior: "smooth"});
  }, []);
  return (
    <div className="button-container">
      <button className="cybr-btn" onClick={onButtonClick}>
        <span className="cybr-btn__text" data-text="Explore">
          Explore
        </span>
        <span className="cybr-btn__glitch"></span>
      </button>
    </div>
  );
};

export default AnimatedButton;
