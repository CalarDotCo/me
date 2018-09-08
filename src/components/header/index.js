import React from 'react';
const picture = require('../../images/picture.jpeg')
const Header = () => (
    // Start Header component
        <header className="row no-gutters d-flex justify-content-center mb50">
        {/* 1 box */}
          <div className="col-10 col-sm-11 col-md-11 col-xl-7 box mb50">
            <div className="row no-gutters">
              <div className="col-12 col-sm-6">
            {/* Start header Title */}
                <div className="row no-gutters d-flex justify-content-center">
                    <h1 className="col-12 text-left">Federico Calarco</h1>
                    <h2 className="col-12 text-left">Fullstack and blockchain developer</h2>
                  </div>
            {/* End title */}
              </div>
            {/* Start icons */}
              <div className="col-12 col-sm-4 ml-auto text-md-right text-left">

                <div className="row no-gutters justify-content-sm-end">
                  <div className="col-2 col-sm-3">
                   <div className="row no-gutters justify-content-sm-end">

                    <a className="col"
                     href="mailto:f3.calarco@gmail.com">
                    <i className="fas fa-2x fa-envelope"></i>
                    </a>

                    <a className="col"
                    href="https://www.linkedin.com"
                     target="_blank">
                      <i className="fab fa-2x fa-linkedin"></i>
                    </a>                    
                   </div>
                  </div>
                </div>
           

              </div>
            {/* End icons */}
            </div>
          </div>
        {/* -1 box */}
        {/* 2 box */}
          <div className="col-10 col-sm-11 col-md-11 col-xl-7 h-100 mt-50">
            <div className="row description d-flex justify-content-center">
            {/* Start profile picture */}
              <div 
              className="col-12 col-sm-5 col-lg-6 no-gutters picture"
              style={{backgroundImage:`url(${picture})`}}
              >
              </div>
            {/* End profile picture */}

            {/* Start description*/}
              <div className="col-12 col-sm-7 col-lg-6 informations">
                
                <div className="row d-flex justify-content-center content h-100">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="row no-gutters">
                      <h3 className="col-12 light blue mb50">
                        Hi , I am 
                        <span className="bold ml">
                      Federico Calarco
                        </span>
                        </h3>
                      {/* Start informations */}
                        <p className="col-3 col-sm-4 light">Age</p>
                        <p className="col-9 col-sm-8 bold">24</p>
                        <p className="col-3 col-sm-4 light">Location</p>
                        <p className="col-9 col-sm-8 bold">Italy , Sicily</p>
                        <p className="col-3 col-sm-4 light">Languages</p>
                        <p className="col-9 col-sm-8 bold">Italian , English , French </p>
                        <p className="col-3 col-sm-4 light">Experience</p>
                        <p className="col-9 col-sm-8 bold">3+ years</p>
                        <p className="col-3 col-sm-4 light">Nickname</p>
                        <p className="col-9 col-sm-8 bold">rico </p>
                      {/* End informations */}
                    </div>
                  </div>
                  
                {/* Start socials */}
                <div className="col-12">
                  <div className="row d-flex justify-content-center socials align-items-center">
                  <i className="col text-center fab fa-js"></i>
                  <i className="col text-center fab fa-react"></i>
                  <i className="col text-center fab fa-sass"></i>

                  <i className="col text-center fab fa-phoenix-framework"></i>
                  <i className="col text-center fab fa-btc"></i>
                  <i className="col text-center fab fa-ethereum"></i>
     
                    
                  </div>
                </div>
                {/* End socials */}
              </div>
            </div>            
            {/* End description */}
            </div>
          </div>
      {/* box */}
      </header>
    // End of Component
)
export default Header;