import React from 'react';

const Review = () => {
    return (
        <div>


            <div class="h-[500px] bg-base-200">

                <h1 className='text-center text-4xl my-10 font-bold'>What People Are Saying</h1>

                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full flex justify-center">
                        {/* <img src="https://placeimg.com/800/200/arch" class="w-full" /> */}
                        <div class="card card-side bg-base-100 shadow-xl w-3/4">
                            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" class="carousel-item w-full flex justify-center">

                        <div class="card card-side bg-base-100 shadow-xl w-3/4">
                            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="item3" class="carousel-item w-full flex justify-center">

                        <div class="card card-side bg-base-100 shadow-xl w-3/4">
                            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="item4" class="carousel-item w-full flex justify-center">

                        <div class="card card-side bg-base-100 shadow-xl w-3/4">
                            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>

            </div>
        </div>
    );
};

export default Review;