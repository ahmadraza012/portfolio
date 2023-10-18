import React from 'react'

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
    </div>
  )
}

export default Home