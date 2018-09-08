import React from 'react';

const Percentage = (props) => (
<div className="col-12 no-gutters percentage" >
    <div className="row no-gutters">
        <div className="col-8 bar">
            <div className="row no-gutters filler no-gutters" style={{width: props.width}}>
            </div>
        </div>
        <p className="col-4 text-center">{props.width}</p>
    </div>
</div>
 
)
export default Percentage;