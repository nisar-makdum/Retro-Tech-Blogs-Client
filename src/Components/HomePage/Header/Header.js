import React from 'react';
const Header = () => {

    return (
       
        <div id="home" style={{ height: '600px',}} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
            <div className=" col-md-6  col-sm-6 col-12 my-5 py-5 ">
                <h1 className="text-danger display-2">Retro Tech Blogs</h1>
            </div>
            <div className="col-md-6">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_h8QgeI.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
       </div>
       
    );
};

export default Header;