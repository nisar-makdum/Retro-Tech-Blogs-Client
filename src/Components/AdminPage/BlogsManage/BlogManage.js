import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import BlogManageDetails from './BlogManageDetails';


const BlogManage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [manageBlogs, setManageBlogs] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setManageBlogs(data))

    }, [manageBlogs])
    return (
        <div className="pt-5 card-bg1">
            <AdminNavbar></AdminNavbar>
            <div className="container mt-5">
                <h1 className="text-center pt-5 text-light">HI <span className="text-danger">{loggedInUser.name}</span>, You Have Total {manageBlogs.length} Blogs ......</h1>
                <div className="row d-flex justify-content-center">
                    {
                        manageBlogs.map(blog => <BlogManageDetails blog={blog}></BlogManageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogManage;