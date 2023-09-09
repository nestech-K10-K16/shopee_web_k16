import React from "react";
import { BlogSingle01, BlogSingle02 } from "./import";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "configs/fontIcon";
import Comments from "../../components/common/comment/Comments";
import "./index.scss";

const BlogSingle = () => {
  return (
    <div className="Shoppe__blogSingle-container">
      <div className="Shoppe__blogSingle-heading">
        <h1>Fast Fashion, And Faster Fashion</h1>
        <h4> ANNY JOHNSON</h4>
        <img src={BlogSingle01} alt="single" />
        <div className="Shoppe__blogSingle-sub_heading">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
          </h3>
          <img src={BlogSingle02} alt="single" />
        </div>
        <div className="Shoppe__blogSingle-secondary_title">
          <h2>Top trends</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero.
          </p>
          <ul>
            <li>consectetur adipiscing elit. Aliquam placerat</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>sapien tortor faucibus augue</li>
            <li>
              a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis
            </li>
          </ul>
        </div>
        <div className="Shoppe__blogSingle-content">
          <div className="text">
            <h2>Tags</h2>
            <div className="line"></div>
            <h2>Fashion, Style, Season</h2>
          </div>

          <div className="text">
            <h2>Share</h2>
            <div className="line"></div>
            <div className="item">
              <div className="icon">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="Shoppe__blogSingle-reply">
          <h3>Leave a Reply</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="input">
            <input type="search" placeholder="Enter your name*" />
            <input type="email" placeholder="Enter your Email*" />
            <input type="ulr" placeholder="Enter your Website" />
          </div>
          <div className="remember">
            <input className="checkbox" type="checkbox" />
            <label>
              Save my name, email, and website in this browser for the next time
              I comment
            </label>
          </div>
          <h2>Your Comment*</h2>
          <button className="btn-black">POST COMMENT</button>
          <h6>Comments(3)</h6>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
