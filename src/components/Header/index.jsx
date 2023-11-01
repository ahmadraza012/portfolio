import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
	const homeNav = () => {
		if (document.body.classList.contains("home-sm")) {
			document.body.classList.remove("home-sm");
		} else {
			document.body.classList.add("home-sm");
		}
	};

	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary fixed-top">
				<div className="container">
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
								<Nav.Link href="#home">Home</Nav.Link>
								<a
									href="javascript:void(0)"
									className="text-gray-900 fs-20 d-md-none d-block"
									onClick={() => {
										homeNav();
									}}>
									<span className="iconify" data-icon="humbleicons:bars"></span>
								</a>
							</div>
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#services">Services</Nav.Link>
							<Nav.Link href="#resume">Resume</Nav.Link>
							<Nav.Link href="#portfolio">Portfolio</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Header;
