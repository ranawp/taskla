import React from 'react';





const Gallery = () => {
    return (
        <div className='mt-[100px]'>
            <h1 className='text-[32px] text-primary text-center font-bold mt-10'><span className='text-secondary'>Course </span> Overview</h1>
            <section className="overflow-hidden">
                <div className="max-w-screen-xl px-5 py-20 mx-auto ">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover  object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/Js0qy42/pngtree-cartoon-girl-graduation-ceremony-and-classmates-posing-png-material-png-image-4523821.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/gWQ5VyC/pngtree-college-entrance-examination-student-exam-scene-png-image-2618540.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/4mwmRtk/shutterstock-394793860-1024x784.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/wpb1g6J/istockphoto-1269034924-612x612.jpg
                                    " />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="
                                    https://i.ibb.co/LgLjN9q/idea-brainstorming-creative-team-flat-vector-infog-linear-line-art-style-concept-web-infographics-il.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/v3bFrJ4/428d38cf0bee4072d4a7b53b44fd40c0.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;