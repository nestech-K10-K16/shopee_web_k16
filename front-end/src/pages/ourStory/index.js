import "./index.css";
import { IMG_OUR_STORY_01, IMG_OUR_STORY_02 } from "../../assets";

const OurStory = () => {
  return (
    <section id="our-story">
      <div className="our-story__content">
        <div className="our-story__content__heading text-center mb-5">
          <p className="heading-01">About</p>

          <p className="heading-03">Who we are and why we do what we do!</p>
        </div>

        <p className="heading-05 mb-5">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>

        <p className="heading-02">Top trends</p>

        <div className="mb-5">
          <IMG_OUR_STORY_01 />
        </div>

        <p className="heading-05">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>

        <ul className="mb-5">
          <li>
            <p className="heading-05">
              consectetur adipiscing elit. Aliquam placerat
            </p>
          </li>

          <li>
            <p className="heading-05">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>
          </li>
        </ul>

        <p className="heading-02">Produced with care</p>

        <div className="mb-5">
          <IMG_OUR_STORY_02 />
        </div>

        <p className="heading-05">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
