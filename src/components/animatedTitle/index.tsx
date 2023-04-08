import "./index.css";

const AnimatedTitle = () => {
    return (
        <div className="title-container">
            <h1 className="neon" data-text="U">
                T
                <span className="flicker-fast">R</span>
                I
                <span className="flicker-slow">A</span>
                N
                <span className="flicker-fast">G</span>
                LE
                <span className="flicker-slow">S</span>
            </h1>
        </div>
    );
}

export default AnimatedTitle;