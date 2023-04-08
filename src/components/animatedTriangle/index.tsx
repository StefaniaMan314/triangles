import "./index.css";

const AnimatedTriangle = () => {
  return (
    <div className="triangle-container">
      {Array.from(Array(15).keys()).map(() => {
        return (
          <div className="plane">
            <div className="triangle"></div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedTriangle;
