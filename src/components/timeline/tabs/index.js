import React from 'react';
import {Works} from '../../../lib';

const Tabs = () => (

    Works.map(w => {
      console.log(w)
      return(
        <div className={`col-12 col-sm-8 col-md-7 mt50 mb50 tab ${w.class}`} key={w.id}>
          <div className="row no-gutters h-100 d-flex align-items-center justify-content-center">
  
                {
                  w.tech.map(
                    (n,i) => 
                      {
                    return <p className="technology" key={i}>{n}</p>
                       }
                    )
                }
  
            <div className="w-100"></div>
            <h4 className="col-10 text-center">{w.name}</h4>
            <i className="col-10 text-center">{w.slogan}</i>
  
            <p className="col-10 text-center">{w.description}</p>
            
            <div className="w-100"></div>
  
            
  
            <a className={`col-4 text-center ${w.class}`} 
            target={w.btn ? null : "_blank"}
            href={w.link}>
            {w.btn ? w.btn : 'Website'}
            </a>
  
          </div>
       </div>
        )
      }
    )
  )
export default Tabs;
  