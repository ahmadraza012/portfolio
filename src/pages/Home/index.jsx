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
    </div>
  )
}

export default Home