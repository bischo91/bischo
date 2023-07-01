import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import AwesomeSlider from "react-awesome-slider";
import ProjectContainer from "../components/ProjectContainer";
import React from "react";
import Subnav from "../components/Subnav";
import accountbook_1 from "../images/accountbook_monthly.png";
import accountbook_2 from "../images/accountbook_trend.png";
import github_logo from "../images/github_white.png";
import imageanalysis_1 from "../images/imageanalysis_panellevel.jpg";
import imageanalysis_2 from "../images/imageanalysis_pixellevel.png";
import imageanalysis_3 from "../images/imageanalysis_pixeluniformity.png";
import imageprocess_1 from "../images/imageanalysis_imageprocess_1.jpg";
import imageprocess_2 from "../images/imageanalysis_imageprocess_2.jpg";
import imageprocess_3 from "../images/imageanalysis_imageprocess_3.jpg";
import lennyspizza_1 from "../images/lennyspizza_project.png";
import lennyspizza_2 from "../images/lennyspizza_menu_PC.png";
import lennyspizza_3 from "../images/lennyspizza_location_mobile.png";
import lennyspizza_4 from "../images/lennyspizza_promotion_tablet.png";
import parfaitlyme_1 from "../images/parfaitlyme_1.jpg";
import parfaitlyme_2 from "../images/parfaitlyme_2.jpg";
import parfaitlyme_3 from "../images/parfaitlyme_3.jpg";
import zillowscrape_1 from "../images/zillow_trend.png";
import zillowscrape_2 from "../images/zillow_scatter.png";
import zillowscrape_3 from "../images/zillow_bar.png";

class Projects extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // let myElement = document.querySelector("#awssld__content");
    // console.log(myElement);
  }

  render() {
    return (
      <div>
        <Subnav />
        <div className="flex-col w-5/6 min-h-screen m-auto mt-24 text-primary md:w-2/3 bg-primary">
          <h1 className="mb-8 text-4xl">PROJECTS</h1>
          <div className="mx-auto mt-4 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-xl lg:text-2xl md:text-xl">
                Lenny's Pizza Website
              </h2>
            </div>

            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={lennyspizza_1} />
                <div data-src={lennyspizza_2} />
                <div data-src={lennyspizza_3} />
                <div data-src={lennyspizza_4} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/lennyspizza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner. I also obtained web traffic data such as number of
                  visitors trend and general locations, which helped the
                  restaurant owner to manage their business more efficiently.
                  <br></br>
                  Click{" "}
                  <a
                    className="underline"
                    href="http://lennyspizza.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  to see the live website.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>PHP</li>
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-lg lg:text-2xl md:text-xl">Parfaitlyme</h2>
            </div>
            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={parfaitlyme_1} />
                <div data-src={parfaitlyme_2} />
                <div data-src={parfaitlyme_3} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/parfaitly-django-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  Parfaitlyme is a demo webiste to show recipes designed using
                  MVT framwork (Django), and React for the frontend. The recipe
                  data is loaded to SQLite database, and the website is managed
                  with Django admin. Frontend is developed with React framework
                  and Tailwind CSS. Recipe page categorizes and displays recipes
                  with infinite scroll.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>Django</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-lg lg:text-2xl md:text-xl">Zillow Scraper</h2>
            </div>

            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={zillowscrape_1} />
                <div data-src={zillowscrape_2} />
                <div data-src={zillowscrape_3} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/RealEstateDataCrawling"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  Zillow Scraper is built to comprehend the current market and
                  trend of housing market in a specific city by visualizing data
                  extracted from house sale posts on Zillow website. Web
                  scraping code obtain data such as price, size, and number of
                  rooms, which are stored in SQLite database. This database can
                  be graphed to display the trend over time as well as scatter
                  or bar graph of selected date showing price vs sqft, average
                  price with respect to number of rooms or by location.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>
                    Python
                    <ul className="pl-4 list-disc">
                      <li>Selenium Webdriver</li>
                      <li>Beautiful Soup</li>
                      <li>Panads</li>
                      <li>Tkinter</li>
                      <li>Matplotlib</li>
                      <li>Numpy</li>
                    </ul>
                  </li>
                  <li>SQLite</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-lg lg:text-2xl md:text-xl">
                Accounting Book
              </h2>
            </div>
            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={accountbook_1} />
                <div data-src={accountbook_2} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/Finance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  I developed customized account book that composes all the
                  transactions from multiple banks to easily visualize spending.
                  The application takes excel files that includes transactions
                  from multiple banks, and categorize each transaction. The GUI
                  allows the user to show monthly spending, and also edit
                  category on their own, if incorrectly categorized. Also, all
                  the transactions can be saved after filtering/categorizing
                  into one excel file for each month. Yearly, or long-term,
                  spending data can be presented with user-defined month range
                  with saved monthly excel files.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>
                    Python
                    <ul className="pl-4 list-disc">
                      <li>PyQt</li>
                      <li>openpyxl</li>
                      <li>xlswriter</li>
                      <li>Matplotlib</li>
                      <li>Numpy</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-lg lg:text-2xl md:text-xl">
                Image Process of Carbon Nanotube
              </h2>
            </div>
            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={imageprocess_1} />
                <div data-src={imageprocess_2} />
                <div data-src={imageprocess_3} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/Image_Analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  The software I developed analyzes Atomic Force Microscopic
                  (AFM) images of CarbonNano Tube (CNT). The goal of this
                  project was to quantify amount of CNT film on samples or
                  surface coverage (= CNT area/total area) from AFM images. The
                  image is processed with multiple imaging techniques such as
                  thresholding, blurring, filtering, object-detection. Then, the
                  procssed image is used to calculate the surface coverage and
                  uniformity of the CNT samples. The software also has GUI that
                  allows users to load folder, go through images in that folder,
                  and save processed images.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>
                    Python
                    <ul className="pl-4 list-disc">
                      <li>OpenCv</li>
                      <li>scikit-image</li>
                      <li>Matplotlib</li>
                      <li>NumPy</li>
                      <li>SciPy</li>
                      <li>PyQt</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-lg lg:text-2xl md:text-xl">
                Image Process of Display Panels
              </h2>
            </div>
            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={imageanalysis_1} />
                <div data-src={imageanalysis_2} />
                <div data-src={imageanalysis_3} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/Image_Analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  I programmed image processing program that detects display
                  panels from photographic images, and calculates uniformity
                  based on grey-scale values. For this project, another program
                  works in a similar manner for microscopic images. For both
                  applications, the code generates excel files that combine the
                  data from multiple images to allow batch processing.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>
                    Python
                    <ul className="pl-4 list-disc">
                      <li>OpenCv</li>
                      <li>scikit-image</li>
                      <li>Matplotlib</li>
                      <li>NumPy</li>
                      <li>SciPy</li>
                      <li>openpyxl</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ProjectContainer
            project={{
              title: "testTitle",
              description:
                "panels from photographic images, and calculates    works in a simi applications, the code generates excel files that combine",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
