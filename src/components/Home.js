//styles
import { SlideShowContainer } from "../styles";

//components
import wandShopImages from "../wandShopImages";
import ShopImageItem from "./shopImageItem";

//state
import { useState } from "react";

const Home = () => {
  const [slide, setSlide] = useState(0);

  const back = () => {
    if (slide === 0) setSlide(wandShopImages.length - 1);
    else setSlide(slide - 1);
  };

  const next = () => {
    if (slide === wandShopImages.length - 1) setSlide(0);
    else setSlide(slide + 1);
  };

  return (
    <>
      <SlideShowContainer>
        <a class="prev" onClick={back}>
          &#10094;
        </a>

        <ShopImageItem wandShopImages={wandShopImages[slide]} />

        <a class="next" onClick={next}>
          &#10095;
        </a>
      </SlideShowContainer>
    </>
  );
};

export default Home;
