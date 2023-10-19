import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Home = () => {
  return (
    <div>
      {/* mains */}
      <section className="mains">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="fs-22 fw-600 gray-text"> Hey, My Name Is</div>
              <h1 className="h-primary my-3">John Smith</h1>
              <div className="fs-22 fw-600 gray-text"> A Freelance Web <span className='yellow-text'>Designer</span></div>
              <button type='button' className='primary-btn mt-4'>Hire ME</button>
            </div>
          </div>
        </div>
      </section>
      {/* about-me */}
      <section className="about-me">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-images">
                <img src="/public/assets/images/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-titles">
                <h2 className="h-secondary">ABOUT ME</h2>
                <span className="about-spans yellow-text">01.</span>
              </div>
              <div className="about-h3">
                Hello! I am John Smith
              </div>
              <p className='gray-text fs-14 mt-5 mb-4'>
                I'm a Freelance Web Designer & Developer based in New York, USA, and I'm very passionate and dedicated to my work .With 7 years experience as a professional Web Designer & Developer, I have acquired the skills necessary to build great and premium websites.
              </p>
              <div className="personal-info">
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-circle">
                    <span className="iconify" data-icon="fluent-mdl2:contact"></span>
                  </div>
                  <p className='mb-0'>Jhon Smith</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle">
                    <span className="iconify" data-icon="ph:phone"></span>
                  </div>
                  <p className='mb-0'>+1 212 422-1417</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle">
                    <span className="iconify" data-icon="ic:outline-mail"></span>
                  </div>
                  <p className='mb-0'>Jhonsmith@Infos.Com</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle contact-circle-1">
                    <span className="iconify" data-icon="tdesign:location"></span>
                  </div>
                  <p className='mb-0'>New York, USA</p>
                </div>
                <span className="media-links">
                  <a href='javascript:void(0' className="fb-links">
                    <span className="iconify" data-icon="iconoir:facebook"></span>
                  </a>
                  <a href='javascript:void(0' className="fb-links">
                    <span className="iconify" data-icon="ri:twitter-line"></span>
                  </a>
                  <a href='javascript:void(0' className="fb-links">
                    <span className="iconify" data-icon="bxl:behance"></span>
                  </a>
                  <a href='javascript:void(0' className="fb-links">
                    <span className="iconify" data-icon="icon-park-outline:dribble"></span>
                  </a>
                  <a href='javascript:void(0' className="fb-links">
                    <span className="iconify" data-icon="basil:linkedin-outline"></span>
                  </a>
                </span>
              </div>
              <button type='button' className='personal-btn'>Download CV</button>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services">
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
                <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                <div className="service-num">01.</div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="service-card">
                <div className="design-circle">
                  <span className="iconify" data-icon="solar:flag-linear"></span>
                </div>
                <h4 className="fw-600 fs-16 my-3">BRANDING</h4>
                <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                <div className="service-num">01.</div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="service-card">
                <div className="design-circle">
                  <span className="iconify" data-icon="mdi:code"></span>
                </div>
                <h4 className="fw-600 fs-16 my-3">CLEAN CODE</h4>
                <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                <div className="service-num">01.</div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="service-card">
                <div className="design-circle">
                  <span className="iconify" data-icon="icon-park-outline:dribble"></span>
                </div>
                <h4 className="fw-600 fs-16 my-3">FAST SUPPORT</h4>
                <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.</p>
                <div className="service-num">01.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* resume */}
      <section className="resumes">
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
                      <div className="text-white">2007 - 2011</div>
                    </div>
                    <div className="gray-text">Computer Science</div>
                  </div>
                  <h4 className="fs-18 yellow-text fw-600 my-3">Harvard University</h4>
                  <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="resume-inner resume-inner-2">
                  <div className="d-flex align-items-center gap-4">
                    <div className="resume-btn d-flex align-items-center">
                      <div className="school-circle">
                        <span className="iconify" data-icon="cil:school"></span>
                      </div>
                      <div className="text-white">2007 - 2011</div>
                    </div>
                    <div className="gray-text">Computer Science</div>
                  </div>
                  <h4 className="fs-18 yellow-text fw-600 my-3">Harvard University</h4>
                  <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                      <div className="text-white">2007 - 2011</div>
                    </div>
                    <div className="gray-text">Computer Science</div>
                  </div>
                  <h4 className="fs-18 yellow-text fw-600 my-3">Harvard University</h4>
                  <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="resume-inner resume-inner-2">
                  <div className="d-flex align-items-center gap-4">
                    <div className="resume-btn d-flex align-items-center">
                      <div className="school-circle">
                        <span className="iconify" data-icon="cil:school"></span>
                      </div>
                      <div className="text-white">2007 - 2011</div>
                    </div>
                    <div className="gray-text">Computer Science</div>
                  </div>
                  <h4 className="fs-18 yellow-text fw-600 my-3">Harvard University</h4>
                  <p className="gray-text fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section className="skills">
        <div className="container">
          <div className="about-titles">
            <h2 className="h-secondary">MY SKILLS</h2>
            <span className="about-spans yellow-text services-counts">04.</span>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">
              <h4 className="fs-20 fw-600">Some About my Abilities</h4>
              <p className="gray-text fs-14 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button type='buttton' className='skills-btn mt-4'>My Portfolio</button>
            </div>
            <div className="col-md-7">
              <div className="skills-tab">
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Professional Skills">
                    <div className="content-main">
                      <div className="progres-main">
                        <div className="progress-inner" style={{ width: '95%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">Html5 & Css3</div>
                          <div className="percentage-box">
                            95%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '78%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">JavaScript</div>
                          <div className="percentage-box">
                            78%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '89%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">php</div>
                          <div className="percentage-box">
                            89%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '80%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">Wordpress</div>
                          <div className="percentage-box">
                            80%
                          </div>
                        </div>
                      </div>
                    </div>

                  </Tab>
                  <Tab eventKey="profile" title="Professional Skills">
                    <div className="content-main">
                      <div className="progres-main">
                        <div className="progress-inner" style={{ width: '95%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">Html5 & Css3</div>
                          <div className="percentage-box">
                            95%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '78%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">JavaScript</div>
                          <div className="percentage-box">
                            78%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '89%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">php</div>
                          <div className="percentage-box">
                            89%
                          </div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div className="progress-inner" style={{ width: '80%' }}></div>
                        <div className="progress-percentage">
                          <div className="gray-text">Wordpress</div>
                          <div className="percentage-box">
                            80%
                          </div>
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
      <section className="port">
        <div className="container">
          <div className="about-titles">
            <h2 className="h-secondary">MY PORTFOLIO</h2>
            <span className="about-spans yellow-text">05.</span>
          </div>
          <div className="port-inner mt-5">
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-3"
              fill>
              <Tab eventKey="home" title="All">
                 <div className="row">
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-1.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-2.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-3.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-1.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-2.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="port-images">
                       <img src="/public/assets/images/port-3.jpg" alt="port" />
                      <div className="port-image-inner">
                        <div className="port-circle">
                        <span className="iconify" data-icon="icons8:plus"></span>
                        </div>
                        <div className="text-white">Project Title</div>
                        <div className="yellow-text">Web Design</div>
                      </div>
                    </div>
                  </div>
                 </div>
                
              </Tab>
              <Tab eventKey="profile" title="Web Design">
                Tab content for Profile
              </Tab>
              <Tab eventKey="longer-tab" title="Graphic Design">
                Tab content for Loooonger Tab
              </Tab>
              <Tab eventKey="contact" title="Branding">
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>




    </div>
  )
}

export default Home