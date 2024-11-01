import About from "./About";
import "./AboutPage.css";
import image from "/assets/images/Me.jpg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div id="about-page__title">
        <h1>/about_me</h1>
      </div>
      <div id="about-page__about--and--image">
        <div id="about-page__about--and--image--about">
          <About />
        </div>
        <div id="about-page__about--and--image--my--image">
          <img
            src={image}
            alt="This is an image of the developer of this website wearing a tan suit and green turtle neck. The developer is smiling at the camera"
          />
        </div>
      </div>
    </div>
  );
}
/* TODO
- Fix resizing issue where if screen is small like phone screen, then have my image gone and only keep the about text.
*/
