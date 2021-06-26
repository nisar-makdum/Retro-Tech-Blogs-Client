import React from 'react';

const BlogInfo = (props) => {

    const { title, description, image, link } = props.blog


    return (
        <div className="col-md-3 m-3 text-light">
            <a style={{ textDecoration: "none" }} href={`${link}`} target="_blank" alt="" rel="noreferrer">
                <div class="card card-bg focus h-100 mb-3 card-bg  border border-secondary border-3 rounded">
                    <img src={image} className="card-img-top img-fluid h-100 w-100" alt="..." />
                    <div className="card-body">
                        <h1 className="text-light display-6">{title}</h1>
                        <h5 className="text-light">{description}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default BlogInfo;