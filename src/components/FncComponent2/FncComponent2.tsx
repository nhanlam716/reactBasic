import classes from "./FncComponent2.module.css";

import image2 from "../.././assets/img/anh2.avif";
import image3 from "../.././assets/img/anh3.avif";
import image4 from "../.././assets/img/anh4.avif";

const FncComponent2 = () => {
  return (
    <div className={classes["posts"]}>
      <div className={classes["list"]}>
        <img className={classes["img"]} src={image2} alt="ảnh 1" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          temporibus quibusdam at, ex ipsam nostrum, ab ullam explicabo tempore
          necessitatibus eos voluptate in, facilis molestias dolorum ad
          excepturi dolores beatae?
        </p>
      </div>
      <div className={classes["list"]}>
        <img className={classes["img"]} src={image3} alt="ảnh 1" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          temporibus quibusdam at, ex ipsam nostrum, ab ullam explicabo tempore
          necessitatibus eos voluptate in, facilis molestias dolorum ad
          excepturi dolores beatae?
        </p>
      </div>
      <div className={classes["list"]}>
        <img className={classes["img"]} src={image4} alt="ảnh 1" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          temporibus quibusdam at, ex ipsam nostrum, ab ullam explicabo tempore
          necessitatibus eos voluptate in, facilis molestias dolorum ad
          excepturi dolores beatae?
        </p>
      </div>
    </div>
  );
};

export { FncComponent2 };
