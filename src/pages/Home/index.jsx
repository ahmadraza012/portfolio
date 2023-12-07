import React, { useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const [visibleCards, setVisibleCards] = useState(9);

	const [values, setValues] = useState({
		fullName: "",
		email: "",
		subject: "",
		message: "",
	});
	const sectionRef = useRef();
	const heightRef = useRef();
	const loadMoreCards = () => {
		setVisibleCards((prevVisibleCards) => prevVisibleCards + 9);
		// sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
		heightRef.current.scrollIntoView();
	};
	const loadLessCards = () => {
		setVisibleCards((prevVisibleCards) => prevVisibleCards - 18);
		sectionRef.current.scrollIntoView();
		// sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
		// console.log(sectionRef.current.scrollHeight);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = toast.loading("Sending Message");
		emailjs.send("service_b2fkeke", "template_655yrad", values, "EfJ8DhnXr1HJt5QQh").then(
			(response) => {
				console.log("SUCCESS!", response);
				setValues({
					fullName: "",
					email: "",
					subject: "",
					message: "",
				});
				toast.update(id, { render: "Message sent Successfully", autoClose: true, type: "success", isLoading: false });
			},
			(error) => {
				console.log("FAILED", error);
				toast.update(id, { render: "Your message don't sent", autoClose: true, type: "error", isLoading: false });
			}
		);
	};
	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	const allProjects = [
		{
			portImage: "/assets/images/project3.png",
			projectTitle: "House of Legends",
			link: "https://www.houseoflegends.art/",
		},
		{
			portImage: "/assets/images/project2.png",
			projectTitle: "Eazy OZ",
			link: "https://www.easyoz.com.au/",
		},
		{
			portImage: "/assets/images/project4.png",
			projectTitle: "Smartup",
			link: "https://smartup.dk/",
		},
		{
			portImage: "/assets/images/project5.png",
			projectTitle: "Dox Token",
			link: "https://doxtoken.com/",
		},
		{
			portImage: "/assets/images/project6.png",
			projectTitle: "YogF",
			link: "https://yogf.org/",
		},
		{
			portImage: "/assets/images/project1.png",
			projectTitle: "Split Mart",
			link: "https://splitmart.com/",
		},
		{
			portImage: "/assets/images/project7.png",
			projectTitle: "Lalaverse",
			link: "https://lalaverse.world/",
		},
		{
			portImage: "/assets/images/project8.png",
			projectTitle: "Cleaning App",
			link: "https://tarea.io/",
		},
		{
			portImage: "/assets/images/project9.png",
			projectTitle: "Job Connect",
			link: "https://jobbconnect.com/",
		},
		{
			portImage: "/assets/images/project10.png",
			projectTitle: "Factor Medik",
			link: "https://factormedik.com/",
		},
		{
			portImage: "/assets/images/project11.png",
			projectTitle: "Lumed Ai",
			link: "https://app.lumed.ai/",
		},
		{
			portImage: "/assets/images/project12.png",
			projectTitle: "Frog Base",
			link: "https://frogbase.de/",
		},
		{
			portImage: "/assets/images/project13.png",
			projectTitle: "ImedicBot",
			link: "https://imedicbot.com/",
		},
		{
			portImage: "/assets/images/project14.png",
			projectTitle: "Empire Token",
			link: "https://empiremigration.com/",
		},
		{
			portImage: "/assets/images/project15.png",
			projectTitle: "Fast Ad Copy",
			link: "https://fastadcopy.ai/",
		},
		{
			portImage: "/assets/images/project16.png",
			projectTitle: "Crreo",
			link: "https://www.crreo.ai/",
		},
		{
			portImage: "/assets/images/project17.png",
			projectTitle: "G-Link",
			link: "https://g-link.ca/",
		},
		{
			portImage: "/assets/images/project18.png",
			projectTitle: "HD Maintenaince",
			link: "https://hd-maintenance.netlify.app/#/",
		},
		{
			portImage: "/assets/images/project19.png",
			projectTitle: "Shahroze International",
			link: "https://shahroze-international.netlify.app/",
		},
		{
			portImage: "/assets/images/project20.png",
			projectTitle: "Boombox Beats",
			link: "https://boombox-beats.netlify.app/",
		},
		{
			portImage: "/assets/images/project21.png",
			projectTitle: "Hearts Poker",
			link: "https://hearts-poker.netlify.app/",
		},
		{
			portImage: "/assets/images/project22.png",
			projectTitle: "Swap Up",
			link: "https://swap-up.netlify.app/",
		},
		{
			portImage: "/assets/images/project23.png",
			projectTitle: "Toxic Deer",
			link: "https://toxic-deer.netlify.app/",
		},
		{
			portImage: "/assets/images/project24.png",
			projectTitle: "Zinu",
			link: "https://morpho-swap.netlify.app/",
		},
		{
			portImage: "/assets/images/project25.png",
			projectTitle: "Big Win Group",
			link: "https://bwg-app.netlify.app/",
		},
		{
			portImage: "/assets/images/project26.png",
			projectTitle: "OAK City Properties",
			link: "https://oak-city-properties.netlify.app/",
		},
		{
			portImage: "/assets/images/project27.png",
			projectTitle: "Reach Dao",
			link: "https://reach-dao-v2.netlify.app/",
		},
	];
	const navigate = useNavigate();

	const cofeCard = [
		{ cofeeTitle: "Project Done", cofeeNumber: "40" },
		{ cofeeTitle: "Happy Clients", cofeeNumber: "30" },
		{ cofeeTitle: "Hours Of Work", cofeeNumber: "18" },
	];

	return (
		<div>
			{/* mains */}
			<section className="mains" onMouseEnter={() => navigate("#")} id="home">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="fs-22 fw-600 gray-text"> Hey, My Name Is</div>
							<h1 className="h-primary my-3">Ahmad Raza</h1>
							<div className="fs-22 fw-600 gray-text" aria-label="A Freelance Web developer">
								A Freelance Web &nbsp;<span className="yellow-text typewriter nocaret"></span>
							</div>
							<button type="button" className="primary-btn mt-4">
								Hire ME
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* about-me */}
			<section className="about-me" onMouseEnter={() => navigate("#about-me")} id="about-me">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="about-images">
								<img src="/assets/images/bg.jpg" alt="about" />
							</div>
						</div>
						<div className="col-md-7 mt-4 mt-md-0">
							<div className="about-titles">
								<h2 className="h-secondary">ABOUT ME</h2>
								<span className="about-spans yellow-text">01.</span>
							</div>
							<div className="about-h3">Hello! I am Ahmad Raza</div>
							<p className="gray-text fs-14 mt-5 mb-4">
								As a full-stack developer with expertise in React, Angular, Node. I have a deep understanding of web
								development and a passion for creating engaging and interactive user experiences. With years of
								experience in the field, I've honed my skills in both front-end and back-end development, allowing me to
								seamlessly integrate the two and create cohesive, efficient web applications.
								<br className="d-md-block d-none" />
								My knowledge of React, Angular allows me to develop dynamic, scalable front-end interfaces that are easy
								to use and visually appealing. Whether I'm working on a small-scale project or a large-scale enterprise
								application, I take pride in ensuring that every user interaction is smooth and seamless. And with my
								expertise in Node, I can develop robust back-end systems that integrate seamlessly with the front-end,
								providing a complete end-to-end solution.
							</p>
							<div className="personal-info">
								<div className="d-flex align-items-center gap-3">
									<div className="contact-circle">
										<span className="iconify" data-icon="fluent-mdl2:contact"></span>
									</div>
									<p className="mb-0">Ahmad Raza</p>
								</div>
								<div className="d-flex align-items-center gap-3 mt-3">
									<div className="contact-circle">
										<span className="iconify" data-icon="ph:phone"></span>
									</div>
									<p className="mb-0">+92 315 0709041</p>
								</div>
								<div className="d-flex align-items-center gap-3 mt-3">
									<div className="contact-circle">
										<span className="iconify" data-icon="ic:outline-mail"></span>
									</div>
									<p className="mb-0">ahmad.shk5454@gmail.com</p>
								</div>
								<div className="d-flex align-items-center gap-3 mt-3">
									<div className="contact-circle contact-circle-1">
										<span className="iconify" data-icon="tdesign:location"></span>
									</div>
									<p className="mb-0">Lahore, Pakistan</p>
								</div>
								<span className="media-links">
									<a target="_blank" href="https://www.linkedin.com/in/ahmad-raza-02374b249/" className="fb-links">
										<span className="iconify" data-icon="basil:linkedin-outline"></span>
									</a>
									<a target="_blank" href="https://github.com/ahmadraza012" className="fb-links">
										<span class="iconify" data-icon="uiw:github"></span>
									</a>
									<a
										target="_blank"
										href="https://api.whatsapp.com/send?phone=923150709041&amp;text=How  may I help you?"
										className="fb-links">
										<span class="iconify" data-icon="ic:outline-whatsapp"></span>
									</a>
									<a
										target="_blank"
										href="https://www.facebook.com/profile.php?id=100009971705175"
										className="fb-links">
										<span className="iconify" data-icon="iconoir:facebook"></span>
									</a>

									<a href="https://www.instagram.com/sheikhgee188/" target="_blank" className="fb-links">
										<span class="iconify" data-icon="mdi:instagram"></span>
									</a>
								</span>
							</div>
							<button type="button" className="personal-btn">
								Download CV
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* services */}
			<section className="services" onMouseEnter={() => navigate("#services")} id="services">
				<div className="container">
					<div className="about-titles">
						<h2 className="h-secondary">MY SERVICES</h2>
						<span className="about-spans yellow-text services-counts">02.</span>
					</div>
					<div className="row">
						<div className="col-md-3 mt-5">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="bi:pen"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">Creative Design</h4>
								<p className="gray-text fs-14">
									Transform your vision into captivating reality with our unparalleled creative design service, where
									innovation meets aesthetics to elevate your brand to new heights.
								</p>
								<div className="service-num">01.</div>
							</div>
						</div>
						<div className="col-md-3 mt-5">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="solar:flag-linear"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">BRANDING</h4>
								<p className="gray-text fs-14">
									Elevate your brand with our expertly crafted service, where innovation meets identity, creating a
									unforgettable mark in the hearts and minds of your audience.
								</p>
								<div className="service-num">02.</div>
							</div>
						</div>
						<div className="col-md-3 mt-5">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="mdi:code"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">CLEAN CODE</h4>
								<p className="gray-text fs-14">
									Unlock the power of elegance and efficiency with our clean code service, where every line tells a
									story of clarity, simplicity, and reliability, transforming complexity into a seamless digital
									experience.
								</p>
								<div className="service-num">03.</div>
							</div>
						</div>
						<div className="col-md-3 mt-5">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="icon-park-outline:dribble"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">FAST SUPPORT</h4>
								<p className="gray-text fs-14">
									Experience the speed of seamless solutions with Fast Support, where efficiency meets excellence in
									resolving your needs instantly.
								</p>
								<div className="service-num">04.</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* resume */}
			<section className="resumes" onMouseEnter={() => navigate("#resume")} id="resume">
				<div className="container">
					<div className="about-titles">
						<h2 className="h-secondary">MY RESUME</h2>
						<span className="about-spans yellow-text">03.</span>
					</div>
					<div className="row mt-5">
						<div className="col-md-6">
							<div className="resume-mains">
								<div className="resume-inner">
									<div className="d-flex align-items-center gap-4">
										<div className="resume-btn d-flex align-items-center">
											<div className="school-circle">
												<span className="iconify" data-icon="cil:school"></span>
											</div>
											<div className="text-white">2020 - 2024</div>
										</div>
										<div className="gray-text">Computer Science</div>
									</div>
									<h4 className="fs-18 yellow-text fw-600 my-3">Virtual University</h4>
									<p className="gray-text fs-14">
										I am doing my Bachelor's degree in Computer Science, where I delved into a diverse range of
										subjects, from algorithms and data structures to software engineering and artificial intelligence.
										<div className="mt-3">
											My time in the computer science program not only honed my technical skills but also fueled my
											passion for tackling real-world challenges. I thrive on finding elegant solutions to problems and
											enjoy the continuous learning process that comes with the dynamic field of computer science.
										</div>
									</p>
								</div>
								<div className="resume-inner resume-inner-2">
									<div className="d-flex align-items-center gap-4">
										<div className="resume-btn d-flex align-items-center">
											<div className="school-circle">
												<span className="iconify" data-icon="cil:school"></span>
											</div>
											<div className="text-white">2017 - 2018</div>
										</div>
										<div className="gray-text">Graphic Designer</div>
									</div>
									<h4 className="fs-18 yellow-text fw-600 my-3">ZIETECH COLLEGE</h4>
									<p className="gray-text fs-14">
										I am a proud graduate of Graphic Design, where I delved into the intricate world of graphic design.
										Throughout my studies, I immersed myself in the principles of design, color theory, typography, and
										visual communication. This educational journey has equipped me with the knowledge and expertise
										needed to transform concepts into captivating visual narratives.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="resume-mains">
								<div className="resume-inner">
									<div className="d-flex align-items-center gap-4">
										<div className="resume-btn d-flex align-items-center">
											<div className="school-circle">
												<span className="iconify" data-icon="cil:school"></span>
											</div>
											<div className="text-white">2018 - 2019</div>
										</div>
										<div className="gray-text">Web Development</div>
									</div>
									<h4 className="fs-18 yellow-text fw-600 my-3">ZIETECH COLLEGE</h4>
									<p className="gray-text fs-14">
										This is my corner of the internet, where I share my journey, skills, and projects in the exciting
										world of web development.
										<div className="mt-3">
											I've successfully completed a comprehensive web development course, equipping myself with the
											latest tools and technologies to create immersive and user-friendly websites. My education has
											provided me with a solid foundation in HTML, CSS, JavaScript, and other essential web
											technologies. I specialize in crafting responsive and intuitive user interfaces that enhance the
											overall user experience.
										</div>
									</p>
								</div>
								<div className="resume-inner resume-inner-2">
									<div className="d-flex align-items-center gap-4">
										<div className="resume-btn d-flex align-items-center">
											<div className="school-circle">
												<span className="iconify" data-icon="cil:school"></span>
											</div>
											<div className="text-white">2016 - 2017</div>
										</div>
										<div className="gray-text">Office Management</div>
									</div>
									<h4 className="fs-18 yellow-text fw-600 my-3">ZIETECH COLLEGE</h4>
									<p className="gray-text fs-14">
										During my course, I delved into a range of subjects that equipped me with the knowledge and skills
										needed to excel in an office environment. From effective communication and time management to
										mastering office software and implementing efficient filing systems, I have gained a well-rounded
										understanding of the intricacies of office operations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="skills" onMouseEnter={() => navigate("#skills")} id="skills">
				<div className="container">
					<div className="about-titles">
						<h2 className="h-secondary">MY SKILLS</h2>
						<span className="about-spans yellow-text services-counts">04.</span>
					</div>
					<div className="row mt-5">
						<div className="col-md-5">
							<h4 className="fs-20 fw-600">Some About my Abilities</h4>
							<p className="gray-text fs-14 mt-3">
								In the dynamic realm of web development, my proficiency extends across a spectrum of technologies,
								enabling me to bring digital visions to life. Here's a glimpse into my skill set:
							</p>
							<p className="gray-text fs-14 mt-3">
								I wield the power of React.js to create seamless, interactive, and user-friendly interfaces. Harnessing
								the latest features and best practices, I design and implement components that not only meet but exceed
								user expectations
							</p>
							<p className="gray-text fs-14 mt-3">
								The trio of HTML, CSS, and JavaScript serves as the foundation of my web development expertise. I sculpt
								the structure with HTML, paint the aesthetics with CSS, and breathe life into the elements with
								JavaScript. Crafting visually stunning and functionally robust websites is my forte.
							</p>

							<button type="buttton" className="skills-btn mt-4">
								My Portfolio
							</button>
						</div>
						<div className="col-md-7 mt-5 mt-md-0">
							<div className="skills-tab">
								<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
									<Tab eventKey="home" title="Professional Skills">
										<div className="content-main">
											<div className="progres-main">
												<div className="progress-inner" style={{ width: "99%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Html5 & Css3</div>
													<div className="percentage-box">99%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "90%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">JavaScript</div>
													<div className="percentage-box">90%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "95%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">React</div>
													<div className="percentage-box">95%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "75%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Wordpress</div>
													<div className="percentage-box">75%</div>
												</div>
											</div>
										</div>
									</Tab>
									<Tab eventKey="profile" title="Personal Skills">
										<div className="content-main">
											<div className="progres-main">
												<div className="progress-inner" style={{ width: "95%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Communication</div>
													<div className="percentage-box">95%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "80%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Teamwork</div>
													<div className="percentage-box">80%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "85%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Self-motivation</div>
													<div className="percentage-box">85%</div>
												</div>
											</div>
											<div className="progres-main mt-3">
												<div className="progress-inner" style={{ width: "98%" }}></div>
												<div className="progress-percentage">
													<div className="gray-text">Speed</div>
													<div className="percentage-box">98%</div>
												</div>
											</div>
										</div>
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* PORTFOLIO */}
			<section className="port" onMouseEnter={() => navigate("#portfolio")} id="portfolio">
				<div className="container" ref={sectionRef}>
					<div className="about-titles">
						<h2 className="h-secondary">MY PORTFOLIO</h2>
						<span className="about-spans yellow-text">05.</span>
					</div>
					<div className="port-inner mt-5">
						<div className="row">
							{allProjects.slice(0, visibleCards).map((item, index) => {
								return (
									<>
										<div className="col-md-4 mb-4" key={index}>
											<a href={item.link} target="_blank">
												<div className="port-card">
													<div className="port-img">
														<img src={item.portImage} alt="port-1" />
													</div>
													<div className="overlay-port">
														{/* <div className="port-circles">
																<span className="iconify" data-icon="mdi-light:plus-circle"></span>
															</div> */}
														<div className="text-white my-4">Project Title</div>
														<div className="fs-14 fw-600 yellow-text">{item.projectTitle}</div>
													</div>
												</div>
											</a>
										</div>
									</>
								);
							})}
						</div>
						{visibleCards < allProjects.length && (
							<div className="text-center">
								<button className="skills-btn mt-md-5 mt-4" onClick={loadMoreCards}>
									Load More
								</button>
							</div>
						)}
						<div ref={heightRef}></div>
						{visibleCards === 27 && (
							<div className="text-center">
								<button className="skills-btn mt-md-5 mt-4" onClick={loadLessCards}>
									Load Less
								</button>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* coffe */}
			<section className="coffe">
				<div className="container">
					<div className="row">
						{cofeCard.map((items, index) => {
							return (
								<>
									<div className="col-md-4">
										<div className="coffe-card">
											<div className="coffe-head">
												<div className="coffe-circle">
													<span className="iconify" data-icon="ph:code"></span>
												</div>
												<div className="fs-14 fw-600 text-white">{items.cofeeTitle}</div>
											</div>
											<div className="fs-30 fw-700 text-white mt-3">
												<CountUp duration={20} end={items.cofeeNumber} />
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contact me */}

			<section className="contact-me" id="contact" onMouseEnter={() => navigate("#contact")}>
				<div className="container">
					<div className="about-titles">
						<h2 className="h-secondary">CONTACT ME</h2>
						<span className="about-spans yellow-text services-counts">08.</span>
					</div>
					<div className="row mt-5">
						<div className="col-md-4">
							<div className="contact-left">
								<div className="mt-3">
									<div className="contact-head">
										<div className="contact-icon">
											<span className="iconify" data-icon="system-uicons:location"></span>
										</div>
										<div className="text-white">Location</div>
									</div>
									<div className="text-center fw-600 gray-text mt-3">Lahore, Pakistan</div>
									<div className="text-center fw-600 gray-text mt-1">Johar Town</div>
								</div>
								<div className="mt-3">
									<div className="contact-head">
										<div className="contact-icon">
											<span className="iconify" data-icon="system-uicons:location"></span>
										</div>
										<div className="text-white">Email</div>
									</div>
									<div className="text-center fw-600 gray-text mt-3">ahmad.shk5454@gmail.com</div>
									<div className="text-center fw-600 gray-text mt-1">ahmadsheikh0568@gmail.com</div>
								</div>
								<div className="mt-3">
									<div className="contact-head">
										<div className="contact-icon">
											<span className="iconify" data-icon="system-uicons:location"></span>
										</div>
										<div className="text-white">Phone</div>
									</div>
									<div className="text-center fw-600 gray-text mt-3">+92 315 0709041</div>
									<div className="text-center fw-600 gray-text mt-1">+92 320 7409456</div>
								</div>
								<div className="mt-3">
									<div className="contact-head">
										<div className="contact-icon">
											<span className="iconify" data-icon="system-uicons:location"></span>
										</div>
										<div className="text-white">Website</div>
									</div>
									<div className="text-center fw-600 gray-text mt-3">www.yourdomain.com</div>
								</div>
							</div>
						</div>
						<div className="col-md-8 mt-5 mt-md-0">
							<form onSubmit={handleSubmit}>
								<div className="contact-right">
									<div className="input-handles">
										<input type="text" name="fullName" value={values.fullName} onChange={handleChange} required />
										<label className="fs-14 fw-500 text-white">Name:</label>
									</div>

									<div className="input-handles mt-5">
										<input type="email" name="email" value={values.email} required onChange={handleChange} />
										<label className="fs-14 fw-500 text-white">E-mail:</label>
									</div>

									<div className="input-handles mt-5">
										<input type="text" name="subject" value={values.subject} required onChange={handleChange} />
										<label className="fs-14 fw-500 text-white">Subject:</label>
									</div>

									<div className="textarea-handles input-handles mt-5">
										<textarea onChange={handleChange} value={values.message} name="message" required></textarea>
										<label className="fs-14 fw-500 text-white">Message:</label>
									</div>
									<button type="submit" className="meassage-btn mt-4">
										send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<ToastContainer />
		</div>
	);
};

export default Home;
