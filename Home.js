import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <main class="page-content">
        <div class="introduction-section">
          <div class="container clearfix">
            <div class="row">
              <div class="col-lg-6 offset-lg-1">
                <div class="wow fadeInDown con" data-wow-duration="1000ms" data-wow-delay="300ms">
                  <h2>YOU ARE ENTIRE</h2>
                  <h1>Creative World</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore sequi minus
                    impedit consequatur aliquid. Nulla consectetur libero dolorem? Quis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-header wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="10ms">
                  <h2>SERVICES</h2>
                  <div class="divider"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 features-col wow fadeInLeft" data-wow-duration="1000ms"
                data-wow-delay="100ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fa fa-television"></i>
                  </figure>
                  <div class="text-content">
                    <h3>WEB DESIGN</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla debitis
                      voluptatum, reiciendis iusto possimus?</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 features-col  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fa fa-gear"></i>
                  </figure>
                  <div class="text-content">
                    <h3>WEB DEVELOPEMENT</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere itaque quas
                      neque, consequatur ea cumque.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 features-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fas fa-comment-dots"></i>
                  </figure>
                  <div class="text-content">
                    <h3>CUSTOM DEVELOPEMENT</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere itaque quas
                      neque, consequatur ea cumque.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 features-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fa fa-tachometer"></i>
                  </figure>
                  <div class="text-content">
                    <h3>SUPERFAST WEB</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere itaque quas
                      neque, consequatur ea cumque.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 features-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fa fa-soccer-ball-o"></i>
                  </figure>
                  <div class="text-content">
                    <h3>FRIENDLY SUPPORT</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere itaque quas
                      neque, consequatur ea cumque.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 features-col wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div class="service-box clearfix">
                  <figure class="image-outer">
                    <i class="fas fa-comment-dots"></i>
                  </figure>
                  <div class="text-content">
                    <h3>LIVE SUPPORT</h3>
                  </div>
                  <div class="box-header">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere itaque quas
                      neque, consequatur ea cumque.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

     
    </>
  )
}

export default Home
