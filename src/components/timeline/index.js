import React from 'react';
import Tabs from './tabs'
const sofud = require('../../images/sofud.svg');


const Skills = () => (
    /* Start component */
  <section className="row no-gutters d-flex justify-content-center mt50">

    {/*  box */}

      <div className="col-10 col-sm-11 col-md-11 col-xl-7 h-100">
        <h3 className="col-12 text-center white light blue">Latest works</h3>

        <div className="row  d-flex justify-content-center">
      

        {/* Start description*/}
          <div className="col-12 col-sm-12">

            {/* Timeline */}              

            <div className="row d-flex justify-content-center h-100 align-items-center">
             <Tabs/>
            </div>            

             {/* End Timeline */}
          </div>

           {/* End description */}
          </div>
      </div>
    {/* -box */}

  </section>
/* End of component */
)

export default Skills;