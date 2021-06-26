import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import BlogInfo from './BlogInfo'
const Blog = () => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {

        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    return (
        <div id="blog" className="mt-2 pt-2  pb-2">
            
            <h1 className="text-center text-light display-2 mt-5 pt-5">Blogs Area</h1>
            <div  className="row d-flex justify-content-center mb-5 pb-5">

                {
                    blogs.map(blog => <BlogInfo blog={blog}></BlogInfo>)
                }

            </div>
        </div>
    );
};

export default Blog;