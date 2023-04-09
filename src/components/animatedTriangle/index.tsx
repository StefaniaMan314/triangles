import "./index.css";

const AnimatedTriangle = () => {
  return (
    <div className="triangle-container">
      {Array.from(Array(15).keys()).map((value, index) => {
        return (
          <div className="plane" key={index}>
            <div className="triangle"></div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedTriangle;
