import React from 'react';

const AccordianSection = (props, children) => {
    return (
        <>
            <div tabIndex="0" className="collapse border-base-300 bg-transparent rounded hover:drop-shadow-xl mb-1 p-0 overflow-hidden border-b-[1px]">
                <div className="collapse-title text-[16px] font-medium text-primary hover:bg-[#6D28D9] hover:text-white mx-auto">
                    {/* The teacher sets up an assignment */}
                    {props.heading}
                </div>
                <div className="collapse-content w-80 mx-auto m-0" >
                    <p>{props.descrip}</p>
                </div >
            </div >
        </>
    );
};

export default AccordianSection;