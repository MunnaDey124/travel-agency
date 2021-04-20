import React, { useState } from 'react';
import SideBarDash from '../SideBarDash/SideBarDash';

const AddReview = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('place', info.place);
        formData.append('description', info.description);

        fetch('https://calm-woodland-10758.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container-fluid row ">
        <div className="col-md-3">
            <SideBarDash></SideBarDash>
        </div>
        <div className="col-md-9 mt-5" >
        <form onSubmit={handleSubmit} >
            <div class="form-group mb-3">
                <label for="exampleInputEmail1" class="form-label">Reviewer Name</label>
                <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
            </div>
            <div class="form-group mb-3">
                <label for="exampleInputPassword1" class="form-label">Place</label>
                <input onBlur={handleBlur} type="text" class="form-control" name="place" placeholder="place" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea onBlur={handleBlur} class="form-control" name="description" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Image</label>
                <input onChange={handleFileChange} class="form-control" type="file" name="file" />
            </div>
            <input className="input_style" type="submit" />
        </form>
        </div>
        </section>
    );
};

export default AddReview;