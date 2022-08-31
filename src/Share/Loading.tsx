import React from 'react';
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import './Loading.css';
const Loading = () => {

    return (
        <>
            <PulseLoader className='md:ml-[550px]' />
        </>
    );
};

export default Loading;