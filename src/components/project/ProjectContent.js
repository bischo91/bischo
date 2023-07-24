import accountbook_1 from "../../asset/accountbook_monthly.png";
import accountbook_2 from "../../asset/accountbook_trend.png";
import autonomouscar_1 from "../../asset/autonomous_car_autonomous.mp4";
import autonomouscar_2 from "../../asset/autonomous_rc_car_manual.mp4";
import autonomouscar_preview_1 from "../../asset/autonomous_car_autonomous.png";
import autonomouscar_preview_2 from "../../asset/autonomous_rc_car_manual.png";
import imageanalysis_1 from "../../asset/imageanalysis_panellevel.jpg";
import imageanalysis_2 from "../../asset/imageanalysis_pixellevel.png";
import imageanalysis_3 from "../../asset/imageanalysis_pixeluniformity.png";
import imageprocess_1 from "../../asset/imageanalysis_imageprocess_1.jpg";
import imageprocess_2 from "../../asset/imageanalysis_imageprocess_2.jpg";
import imageprocess_3 from "../../asset/imageanalysis_imageprocess_3.jpg";
import lennyspizza_1 from "../../asset/lennyspizza_project.png";
import lennyspizza_2 from "../../asset/lennyspizza_menu_PC.png";
import lennyspizza_3 from "../../asset/lennyspizza_location_mobile.png";
import lennyspizza_4 from "../../asset/lennyspizza_promotion_tablet.png";
import zillowscrape_1 from "../../asset/zillow_trend.png";
import zillowscrape_2 from "../../asset/zillow_scatter.png";
import zillowscrape_3 from "../../asset/zillow_bar.png";

const ProjectContents = [
  {
    id: 6,
    title: "Autonomous RC Car",
    imageSrc: [autonomouscar_1, autonomouscar_2],
    previewSrc: [autonomouscar_preview_1, autonomouscar_preview_2],
    gitHubLink: "https://github.com/bischo91/autonomous-rc-car",
    description:
      "I built an autonomous RC car using an Arduino board with self-drive and remote-control modes, utilizing a Bluetooth connection. The car incorporated a proximity sensor to enable obstacle avoidance by intelligently steering towards clearer paths",
    techStack: [
      {
        language: "C++",
      },
    ],
  },
  {
    id: 5,
    title: "Accounting Book",
    imageSrc: [accountbook_1, accountbook_2],
    gitHubLink: "https://github.com/bischo91/Finance",
    description:
      "I developed customized account book that composes all the transactions from multiple banks to easily visualize spending. The application takes excel files that includes transactions from multiple banks, and categorize each transaction. The GUI allows the user to show monthly spending, and also edit category on their own, if incorrectly categorized. Also, all the transactions can be saved after filtering/categorizing into one excel file for each month. Yearly, or long-term, spending data can be presented with user-defined month range with saved monthly excel files.",
    techStack: [
      {
        language: "Python",
        packages: ["PyQt", "openpyxl", "xlswriter", "Matplotlib", "Numpy"],
      },
    ],
  },
  {
    id: 4,
    title: "Image Analysis of Carbon Nanotube",
    imageSrc: [imageprocess_1, imageprocess_2, imageprocess_3],
    gitHubLink: "https://github.com/bischo91/Image_Analysis",
    description:
      "The software I developed analyzes Atomic Force Microscopic (AFM) images of CarbonNano Tube (CNT). The goal of this project was to quantify amount of CNT film on samples or surface coverage (= CNT area/total area) from AFM images. The image is processed with multiple imaging techniques such as thresholding, blurring, filtering, object-detection. Then, the procssed image is used to calculate the surface coverage and uniformity of the CNT samples. The software also has GUI that allows users to load folder, go through images in that folder, and save processed images.",
    techStack: [
      {
        language: "Python",
        packages: [
          "OpenCV",
          "scikit-image",
          "Matplotlib",
          "Numpy",
          "SciPy",
          "PyQt",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Image Analysis of Display Panels",
    imageSrc: [imageanalysis_1, imageanalysis_2, imageanalysis_3],
    gitHubLink: "https://github.com/bischo91/Image_Analysis",
    description:
      "I programmed image processing program that detects display panels from photographic images, and calculates uniformity based on grey-scale values. For this project, another program works in a similar manner for microscopic images. For both applications, the code generates excel files that combine the data from multiple images to allow batch processing.",
    techStack: [
      {
        language: "Python",
        packages: [
          "OpenCV",
          "scikit-image",
          "Matplotlib",
          "NumPy",
          "SciPy",
          "openpyxl",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Zillow Scraper",
    imageSrc: [zillowscrape_1, zillowscrape_2, zillowscrape_3],
    gitHubLink: "https://github.com/bischo91/RealEstateDataCrawling",
    description:
      "Zillow Scraper is built to comprehend the current market and trend of housing market in a specific city by visualizing data extracted from house sale posts on Zillow website. Web scraping code obtain data such as price, size, and number of rooms, which are stored in SQLite database. This database can be graphed to display the trend over time as well as scatter or bar graph of selected date showing price vs sqft, average price with respect to number of rooms or by location.",
    techStack: [
      {
        language: "Python",
        packages: [
          "Selenium Webdriver",
          "Beautiful Soup",
          "Panads",
          "Tkinter",
          "Matplotlib",
          "Numpy",
        ],
      },
      {
        language: "SQLite",
      },
    ],
  },
  {
    id: 1,
    title: "Lenny's Pizza Website",
    imageSrc: [lennyspizza_1, lennyspizza_2, lennyspizza_3, lennyspizza_4],
    gitHubLink: "https://github.com/bischo91/lennyspizza",
    description:
      "I designed and maintained a website for a family-owned restaurant, Lenny's Pizza. The website was responsive and included contact form to send an email to the restaurant owner. I also obtained web traffic data such as number of visitors trend and general locations, which helped the restaurant owner to manage their business more efficiently.",
    techStack: [
      { language: "HTML/CSS" },
      { language: "JavaScript" },
      { language: "PHP" },
    ],
  },
];

export default ProjectContents;
