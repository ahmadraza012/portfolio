import React from "react";

const Footer = () => {
	return (
		<div>
			{/* footer */}
			<section className="footer">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="footer-inner">
								<div className="fs-30 fw-700 text-white">
									<span className="yellow-text">A</span>HMAD
								</div>
								<div className="d-flex align-items-center gap-3 mt-2">
									<a href="#" className="footer-links">
										<span className="iconify" data-icon="ri:facebook-fill"></span>
									</a>
									<a href="#" className="footer-links">
										<span className="iconify" data-icon="uil:twitter"></span>
									</a>
									<a href="#" className="footer-links">
										<span className="iconify" data-icon="ri:linkedin-fill"></span>
									</a>
									<a href="#" className="footer-links">
										<span className="iconify" data-icon="ri:facebook-fill"></span>
									</a>
								</div>
								<div className="text-white fs-16 fw-600 mt-2">
									All Right Reserved © 2023{" "}
									<a href="#" target="_black" className="yellow-text">
										Design By Ahmad Raza
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
