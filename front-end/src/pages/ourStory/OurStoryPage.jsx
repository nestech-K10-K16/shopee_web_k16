import React from "react";
import { Blog01, Blog04 } from "pages/blog/import";
import "./ourStory.scss";

const OurStoryPage = () => {
  return (
    <div class="shoppe__ourStory">
      <div class="shoppe__ourStory-container">
        <div class="heading-01">About</div>
        <h3 className="heading-03">Who we are and why we do what we do!</h3>
        <h6>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </h6>
        <div class="shoppe__ourStory-headline">
          <h2>Top trends</h2>
          <img src={Blog04} alt="blog" />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </h4>
          <ul>
            <li>consectetur adipiscing elit. Aliquam placerat</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
        </div>
        <div class="shoppe__ourStory-headline">
          <h2>Produced with care</h2>
          <img src={Blog01} alt="blog" />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendu.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
