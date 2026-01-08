import accountbook_1 from '$lib/assets/accountbook_1.png';
import accountbook_2 from '$lib/assets/accountbook_2.png';
import accountbook_3 from '$lib/assets/accountbook_3.png';
import accountbook_4 from '$lib/assets/accountbook_4.png';
import accountbook_5 from '$lib/assets/accountbook_5.png';
import autonomous_car_preview_1 from '$lib/assets/autonomous_car_autonomous.png';
import autonomous_car_preview_2 from '$lib/assets/autonomous_rc_car_manual.png';
import do_you_lift_preview_1 from '$lib/assets/do_you_lift_preview_1.png';
import do_you_lift_preview_2 from '$lib/assets/do_you_lift_preview_2.png';
import do_you_lift_preview_3 from '$lib/assets/do_you_lift_preview_3.png';
import imageanalysis_1 from '$lib/assets/imageanalysis_panellevel.jpg';
import imageanalysis_2 from '$lib/assets/imageanalysis_pixellevel.png';
import imageanalysis_3 from '$lib/assets/imageanalysis_pixeluniformity.png';
import imageprocess_1 from '$lib/assets/imageanalysis_imageprocess_1.jpg';
import imageprocess_2 from '$lib/assets/imageanalysis_imageprocess_2.jpg';
import imageprocess_3 from '$lib/assets/imageanalysis_imageprocess_3.jpg';
import lennyspizza_1 from '$lib/assets/lennyspizza_project.png';
import lennyspizza_2 from '$lib/assets/lennyspizza_menu_PC.png';
import lennyspizza_3 from '$lib/assets/lennyspizza_location_mobile.png';
import lennyspizza_4 from '$lib/assets/lennyspizza_promotion_tablet.png';
import zillowscrape_1 from '$lib/assets/zillow_trend.png';
import zillowscrape_2 from '$lib/assets/zillow_scatter.png';
import zillowscrape_3 from '$lib/assets/zillow_bar.png';
// Videos are in static folder to avoid SvelteKit asset pipeline hashing
const autonomous_car_1 = '/videos/autonomous_car_autonomous.mp4';
const autonomous_car_2 = '/videos/autonomous_rc_car_manual.mp4';
const do_you_lift_1 = '/videos/do_you_lift_1.mp4';
const do_you_lift_2 = '/videos/do_you_lift_2.mp4';
const do_you_lift_3 = '/videos/do_you_lift_3.mp4';

export const projectContents = [
	{
		id: 7,
		title: 'Weight Lift Counter',
		imageSrc: [do_you_lift_1, do_you_lift_2, do_you_lift_3],
		previewSrc: [do_you_lift_preview_1, do_you_lift_preview_2, do_you_lift_preview_3],
		gitHubLink: 'https://github.com/bischo91/do-you-lift-app',
		description:
			'I developed a web application that connects to a web/mobile camera to count reps for various workouts in real time. Body points are detected by pose estimation package, Mediapipe, and angles are calculated based on the body points. This real-time video can also be recorded and downloaded by a user.',
		techStack: [
			{
				language: 'Typescript',
				packages: ['Mediapipe, React, TailwindCSS']
			}
		],
		demoLink: 'https://do-you-lift-app.web.app/'
	},
	{
		id: 6,
		title: 'Autonomous RC Car',
		imageSrc: [autonomous_car_1, autonomous_car_2],
		previewSrc: [autonomous_car_preview_1, autonomous_car_preview_2],
		gitHubLink: 'https://github.com/bischo91/autonomous-rc-car',
		description:
			'I built an autonomous RC car using an Arduino board with self-drive and remote-control modes, utilizing a Bluetooth connection. The car incorporated a proximity sensor to enable obstacle avoidance by intelligently steering towards clearer paths',
		techStack: [
			{
				language: 'C++'
			}
		]
	},
	{
		id: 5,
		title: 'Accounting Book',
		imageSrc: [accountbook_1, accountbook_2, accountbook_3, accountbook_4, accountbook_5],
		gitHubLink: 'https://github.com/bischo91/Finance',
		description:
			'I developed customized account book that composes all the transactions from multiple banks to easily visualize spending. The application takes excel files that includes transactions from multiple banks, and categorize each transaction. The GUI allows the user to show monthly spending, and also edit category on their own, if incorrectly categorized. Also, all the transactions can be saved after filtering/categorizing into one excel file for each month. Yearly, or long-term, spending data can be presented with user-defined month range with saved monthly excel files.\nThis was later developed into a web application in Vue.js and deployed on Firebase.',
		techStack: [
			{
				language: 'Python',
				packages: ['PyQt', 'openpyxl', 'xlswriter', 'Matplotlib', 'Numpy']
			},
			{
				language: 'Typescript',
				packages: ['Vue.js', 'Firebase']
			}
		],
		demoLink: 'https://account-book-80de2.web.app/'
	},
	{
		id: 4,
		title: 'Image Analysis of Carbon Nanotube',
		imageSrc: [imageprocess_1, imageprocess_2, imageprocess_3],
		gitHubLink: 'https://github.com/bischo91/Image_Analysis',
		description:
			'The software I developed analyzes Atomic Force Microscopic (AFM) images of CarbonNano Tube (CNT). The goal of this project was to quantify amount of CNT film on samples or surface coverage (= CNT area/total area) from AFM images. The image is processed with multiple imaging techniques such as thresholding, blurring, filtering, object-detection. Then, the procssed image is used to calculate the surface coverage and uniformity of the CNT samples. The software also has GUI that allows users to load folder, go through images in that folder, and save processed images.',
		techStack: [
			{
				language: 'Python',
				packages: ['OpenCV', 'scikit-image', 'Matplotlib', 'Numpy', 'SciPy', 'PyQt']
			}
		]
	},
	{
		id: 3,
		title: 'Image Analysis of Display Panels',
		imageSrc: [imageanalysis_1, imageanalysis_2, imageanalysis_3],
		gitHubLink: 'https://github.com/bischo91/Image_Analysis',
		description:
			'I programmed image processing program that detects display panels from photographic images, and calculates uniformity based on grey-scale values. For this project, another program works in a similar manner for microscopic images. For both applications, the code generates excel files that combine the data from multiple images to allow batch processing.',
		techStack: [
			{
				language: 'Python',
				packages: ['OpenCV', 'scikit-image', 'Matplotlib', 'NumPy', 'SciPy', 'openpyxl']
			}
		]
	},

	{
		id: 2,
		title: 'Zillow Scraper',
		imageSrc: [zillowscrape_1, zillowscrape_2, zillowscrape_3],
		gitHubLink: 'https://github.com/bischo91/RealEstateDataCrawling',
		description:
			'Zillow Scraper is built to comprehend the current market and trend of housing market in a specific city by visualizing data extracted from house sale posts on Zillow website. Web scraping code obtain data such as price, size, and number of rooms, which are stored in SQLite database. This database can be graphed to display the trend over time as well as scatter or bar graph of selected date showing price vs sqft, average price with respect to number of rooms or by location.',
		techStack: [
			{
				language: 'Python',
				packages: [
					'Selenium Webdriver',
					'Beautiful Soup',
					'Panads',
					'Tkinter',
					'Matplotlib',
					'Numpy'
				]
			},
			{
				language: 'SQLite'
			}
		]
	},
	{
		id: 1,
		title: "Lenny's Pizza Website",
		imageSrc: [lennyspizza_1, lennyspizza_2, lennyspizza_3, lennyspizza_4],
		gitHubLink: 'https://github.com/bischo91/lennyspizza',
		description:
			"I designed and maintained a website for a family-owned restaurant, Lenny's Pizza. The website was responsive and included contact form to send an email to the restaurant owner. I also obtained web traffic data such as number of visitors trend and general locations, which helped the restaurant owner to manage their business more efficiently.",
		techStack: [{ language: 'HTML/CSS' }, { language: 'JavaScript' }, { language: 'PHP' }]
	}
];
