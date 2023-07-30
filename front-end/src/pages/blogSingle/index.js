import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { TextArea, Input, Button } from "component/common";
import { IMG_POST_01, IMG_POST_04 } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BlogSingle = () => {
  return (
    <section id="blog-single">
      <div className="blog-single__content">
        <div className="blog-single__content__heading">
          <p className="heading-01"> Fast Fashion, And Faster Fashion</p>
          <p className="heading-05">by ANNY JOHNSON - October 8,2020</p>
          <img className="mb-5" src={IMG_POST_01} alt="" />
        </div>

        <div className="blog-single__content__title">
          <p className="heading-05 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam placerat, augue a
            volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex
            vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu
            felis.
          </p>
          <img className="w-100 mb-5" src={IMG_POST_04} alt="" />
          <p className="heading-02">Top trends</p>
          <p className="heading-05">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero.
          </p>

          <ul className="mb-5">
            <li>consectetur adipiscing elit. Aliquam placerat</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>sapien tortor faucibus augue</li>
            <li>
              a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis
            </li>
          </ul>

          <div className="d-flex justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <p className="heading-05 mb-0 me-1">Tags</p>
              <div className="border-1px-solid-black-width-64px-height-0 me-1"></div>
              <p className="heading-05 mb-0">Fashion, Style, Season</p>
            </div>

            <div className="d-flex align-items-center">
              <p className="heading-05 mb-0 me-1">Share</p>
              <div className="border-1px-solid-black-width-64px-height-0 me-1"></div>
              <div className="d-flex">
                <Link className="text-dark-silver me-3">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </Link>
                <Link className="text-dark-silver me-3">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link className="text-dark-silver">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-0-5px-solid-bright-gray mb-5"></div>

          <div className="blog-single__content__title__comment d-flex flex-column">
            <p className="heading-02">Leave a reply</p>
            <p className="body-medium text-dark-silver mb-5">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <Input
              className="body-medium mb-3"
              placeholder="Enter your name*"
            />
            <Input
              className="body-medium mb-3"
              placeholder="Enter your Email*"
            />
            <Input
              className="body-medium mb-5"
              placeholder="Enter your Website"
            />

            <div className="d-flex mb-5">
              <input className="me-3" type="checkbox" />
              Save my name, email, and website in this browser for the next time
              I comment
            </div>

            <TextArea
              className="body-medium mb-5"
              placeholder="Your Comment*"
            />

            <div className="start-0 mb-5">
              <Button className="body-large" style={{ padding: "16px 24px" }}>
                POST COMMENT
              </Button>
            </div>

            <p className="heading-02">Comments(0)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
