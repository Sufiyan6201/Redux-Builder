import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

function Blog() {
  return (
    <>
      <Hero
        title="Blog"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        imgSrc="images/couch.png"
      />

      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider/>

    </>
  )
}

export default Blog
