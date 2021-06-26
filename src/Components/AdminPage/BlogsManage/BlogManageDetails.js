import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const BlogManageDetails = (props) => {
    const { _id, title, description } = props.blog
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Blog Has Been Deleted.',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <ul className="list-group col-md-3 focus mt-3 m-1 d-grid h5">
            <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Blog Title : {title} </span></li>
            <li className="list-group-item "><span className="fw-bolder text-dark">Blog Description : {description} </span> </li>
            <li onClick={() => handleDelete(_id)} className="list-group-item d-grid">
                <span className="btn btn-outline-danger btn-block fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Blogs</span>
            </li>

        </ul>
    );
};

export default BlogManageDetails;