import { Container } from "@mui/material";
import AnimatedButton from "../../components/animatedButton";
import AnimatedTitle from "../../components/animatedTitle";
import AnimatedTriangle from "../../components/animatedTriangle";
import "./index.css";

const HeroLayout = () => {
  return (
    <div className="hero-wrapper">
        <Container className="hero-container" maxWidth="lg">
          <AnimatedTitle/>
          <AnimatedTriangle/>
          <AnimatedButton/>
        </Container>
    </div>
  );
};

export default HeroLayout;
