import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "animate.css/animate.min.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [navActive, setNavActive] = useState("home");
	const location = useLocation();

	const handleClickScroll = (id) => {
		const element = document.getElementById(`${id}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point in the page.
		if (window.scrollY > 30) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		// Add a scroll event listener when the component mounts.
		window.addEventListener("scroll", handleScroll);

		// Remove the event listener when the component unmounts.
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (location.hash === "") {
			setNavActive("home");
		} else if (location.hash === "#about-me") {
			setNavActive("about");
		} else if (location.hash === "#services") {
			setNavActive("services");
		} else if (location.hash === "#resume") {
			setNavActive("resume");
		} else if (location.hash === "#skills") {
			setNavActive("skills");
		} else if (location.hash === "#portfolio") {
			setNavActive("portfolio");
		} else if (location.hash === "#contact") {
			setNavActive("contact");
		}
		console.log(location);
	}, [location.hash]);

	const homeNav = () => {
		if (document.body.classList.contains("home-sm")) {
			document.body.classList.remove("home-sm");
		} else {
			document.body.classList.add("home-sm");
		}
	};

	return (
		<div>
			<Navbar expand="lg" className={` ${isScrolled ? "active-nav animated animate__fadeInDown" : ""}`}>
				<div className="container">
					<Navbar.Brand>
						<span className="yellow-text">A</span>hmad
					</Navbar.Brand>
					<a
						href="javascript:void(0)"
						className="text-gray-900 fs-20 d-md-none d-block"
						onClick={() => {
							homeNav();
						}}>
						<span className="iconify" data-icon="humbleicons:bars"></span>
					</a>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto gap-4">
							<div className="d-flex justify-content-between">
								<Nav.Link
									as={Link}
									to="#home"
									className={navActive == "home" ? "active" : ""}
									onClick={() => {
										handleClickScroll("home");
										setNavActive("home");
									}}>
									Home
								</Nav.Link>
								<a
									href="javascript:void(0)"
									className="text-gray-900 fs-20 d-md-none d-block"
									onClick={() => {
										homeNav();
									}}>
									<span className="iconify" data-icon="humbleicons:bars"></span>
								</a>
							</div>
							<Nav.Link
								as={Link}
								to="#about-me"
								className={navActive == "about" ? "active" : ""}
								onClick={() => {
									handleClickScroll("about-me");
									setNavActive("about");
								}}>
								About
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#services"
								className={navActive == "services" ? "active" : ""}
								onClick={() => {
									handleClickScroll("services");
									setNavActive("services");
								}}>
								Services
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#resume"
								className={navActive == "resume" ? "active" : ""}
								onClick={() => {
									handleClickScroll("resume");
									setNavActive("resume");
								}}>
								Resume
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#skills"
								className={navActive == "skills" ? "active" : ""}
								onClick={() => {
									handleClickScroll("skills");
									setNavActive("skills");
								}}>
								Skills
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#portfolio"
								className={navActive == "portfolio" ? "active" : ""}
								onClick={() => {
									handleClickScroll("portfolio");
									setNavActive("portfolio");
								}}>
								Portfolio
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#contact"
								className={navActive == "contact" ? "active" : ""}
								onClick={() => {
									handleClickScroll("contact");
									setNavActive("contact");
								}}>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Header;
