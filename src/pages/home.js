import React from "react";
import img from "../images/home-images/img.jpg";
import img2 from "../images/home-images/blue-bayou-restaurant-00.jpg";
import img3 from "../images/home-images/1200x0.jpg";
import img4 from "../images/home-images/BlueBayouCover-Pugh.jpg";
import img5 from "../images/home-images/rsz_img_5850-1-2.jpg";
import img6 from "../images/home-images/39512467_1070729289743370_4924584105451978752_n-1.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { NavbarCustom } from "../components/navbar";
import "../index.css";
import { Menu } from "../components/menu";
export default function Home() {
  return (
    <>
      <Carousel background-color="grey">
        <Carousel.Item>
          <div>
            <img
              className="d-block w-200 home-img2"
              height="400px"
              src={img}
              width="59%"
              alt="First slide"
            />
          </div>
          <div>
            <img
              className="d-block w-200"
              height="400px"
              src={img4}
              alt="11 slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="d-block w-200 home-img2"
              height="400px"
              width="50%"
              src={img2}
              alt="First slide"
            />
          </div>
          <div>
            <img
              className="d-block w-200"
              height="400px"
              src={img5}
              alt="11 slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="d-block w-200 home-img2"
              height="400px"
              width="52%"
              src={img6}
              alt="First slide"
            />
          </div>
          <div>
            <img
              className="d-block w-200"
              height="400px"
              src={img3}
              alt="11 slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <NavbarCustom />
      <div className="text-center">
        <h2>Hours</h2>
        <p>Lunch: 11am - 3:55pm</p>
        <p>Dinner: 4pm - 10pm</p>
      </div>
      <div className="home-img" style={{ width: "50%" }}>
        <Menu />
        <br></br>
        <br></br>
      </div>
    </>
  );
}
