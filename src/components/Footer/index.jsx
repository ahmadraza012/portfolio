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
									<a target="_blank" href="https://www.linkedin.com/in/ahmad-raza-02374b249/" className="footer-links">
										<span className="iconify" data-icon="basil:linkedin-outline"></span>
									</a>
									<a target="_blank" href="https://github.com/ahmadraza012" className="footer-links">
										<span class="iconify" data-icon="uiw:github"></span>
									</a>
									<a
										target="_blank"
										href="https://api.whatsapp.com/send?phone=923150709041&amp;text=How  may I help you?"
										className="footer-links">
										<span class="iconify" data-icon="ic:outline-whatsapp"></span>
									</a>
									<a
										target="_blank"
										href="https://www.facebook.com/profile.php?id=100009971705175"
										className="footer-links">
										<span className="iconify" data-icon="iconoir:facebook"></span>
									</a>

									<a href="https://www.instagram.com/sheikhgee188/" target="_blank" className="footer-links">
										<span class="iconify" data-icon="mdi:instagram"></span>
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
