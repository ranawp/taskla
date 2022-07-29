import React from 'react';

const AccordianSection = (props, children) => {
    return (
        <>
            <div tabIndex="0" className="collapse border-base-300 bg-base-100 hover:border rounded hover:drop-shadow-xl mb-1">
                <div className="collapse-title text-xl font-medium text-slate-400  hover:text-black ">
                    {/* The teacher sets up an assignment */}
                    {props.heading}
                </div>
                <div className="collapse-content w-96">
                    <p>{props.descrip}</p>
                </div>
            </div>
        </>
    );
};

export default AccordianSection;