import { IMAGES } from '../../assets';
import './heroImageContainer.css'


const HeroImageContainer = () => {
  return (
    <div id="heroImageContainer">

      <div className="imageContainer heroImg1">
        <img src={IMAGES.hero_1} alt="heroImg-1" />
      </div>

      <div className="imageContainer heroImg2">
        <img src={IMAGES.hero_2} alt="heroImg-2" />
      </div>

      <div className="imageContainer heroImg3">
        <img src={IMAGES.hero_3} alt="heroImg-3" />
      </div>

    </div>
  );
};

export default HeroImageContainer;
