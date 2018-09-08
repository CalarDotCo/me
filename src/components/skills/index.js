import React from 'react';
import Percentage from './percentage';

const Skills = () => (
    /* Start component */
  <section className="row no-gutters d-flex justify-content-center mt50">

    {/*  box */}

      <div className="col-10 col-sm-11 col-md-11 col-xl-7 h-100">
        <h3 className="col-4 col-sm-4 col-lg-3 text-center light lip">My skills</h3>

        <div className="row description d-flex justify-content-center">
        
        {/* Start summary */}

        <div 
          className="col-12 col-sm-12 col-lg-6 no-gutters picture">
            <div className="row no-gutters d-flex h-100 align-items-center justify-content-center">
               <p className="col-11 text-justify light mt50">I think of my self as a 
               <span className="blue"> powerful combo geek-athlete</span>
               , have always wrote code for a living but I am also a 
               <span className="blue"> waterpolo player</span>
                , it's where I've learned to live inside a team and 
                <span className="blue"> work all together</span> 
                for the beloved aimed target.
                </p>

               <p className="col-11 text-justify light mb50">Very 
               <span className="blue"> passionate</span> 
               about acquiring new skills, that's why I dive myself into 
               <span className="blue"> blockchain </span>
                and 
                <span className="blue"> holochain</span> 
                , the perfect technologies with the aim of building a new decentralized and more ethic internet. I am learning more about 3D as well.
                </p>
            </div>
        </div>

        {/* End summary */}

        {/* Start description*/}
          <div className="col-12 col-sm-12 col-lg-6 informations">
          {/* Skills */}              
            <div className="row d-flex justify-content-center content h-100 align-items-center">
            {/* Start */}
              <div className="col-12 col-sm-6">
                <div className="row no-gutters h-100 d-flex align-items-center">

                  <h4 className="col-12 strong blue mt50">
                    Front-end
                    </h4>
                  <Percentage width="90%"/>

                </div>
              </div>

            {/* End */}

            {/* Start */}

              <div className="col-12 col-sm-6">
                <div className="row no-gutters h-100 d-flex align-items-center">
                  <h4 className="col-12 strong blue mt50">
                    Back-end
                    </h4>
                  <Percentage width="80%"/>
                </div>
              </div>

            {/* Start */}

            {/* End */}

              <div className="col-12 col-sm-6">
                <div className="row no-gutters h-100 d-flex align-items-center">
                  <h4 className="col-12 strong blue mt50">
                    Blockchain
                    </h4>
                  <Percentage width="95%"/>
                </div>
              </div>
            {/* End */}

            {/* Start */}

              <div className="col-12 col-sm-6">
                <div className="row no-gutters h-100 d-flex align-items-center">
                  <h4 className="col-12 strong blue mt50">
                    Holochain
                    </h4>
                  <Percentage width="45%"/>

                </div>
              </div>

            {/* End */}

            </div>

           {/* End skills */}
           </div>            

           {/* End description */}
          </div>

      </div>
    {/* -box */}

  </section>
/* End of component */
)

export default Skills;