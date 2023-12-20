import HeroSectionImage from "./../Assest/HeroSectionImage.avif";
import Button from "./../Button/Button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="heroSection">
      {/* <img src="{HeroSectionImage}" alt="" /> */}
      <div id="herosection_sub">
        <div>
          <h1>Let us find your </h1>
          <h1 id="herosection_head">Forever Food.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="herosectionButtons">
            <Button buttonText="Search Now" id="heroButton1"></Button>
            <Button buttonText="Know more" id="heroButton2"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
