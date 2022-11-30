import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import julogo from './images/juLogo.png'
import background from '../Components/images/img2.jpg'


// Importing materialui icons and then using it like a tag of react.
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/Delete';
import maleAvatar from './images/maleAvatar.png';
import femaleAvatar from './images/femaleAvatar.png';

import { NavLink, useParams, useNavigate } from 'react-router-dom';


const Offcanvas = () => {

    const [studData, setStudData] = useState([]);
    console.log(studData);

    // to get the id which will sent by the home page link
    const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();


    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setStudData(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        if(window.confirm("Are you sure you want to delete it ?"))
        {
            const res2 = await fetch(`/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const deletedata = await res2.json();
            console.log(deletedata);
    
            if (res2.status === 422 || !deletedata) {
                console.log("error");
            } else {
                alert('User data deleted Successfully')
                navigate('/');
            }
        }
        else{
            navigate('/');
        }


    }


    return (
        <div className='height100vh' >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Student Registration No : {studData.regNo}</h1>
            <div>
            <NavLink to={'/'} className='btn btn-primary '><i className="fa-solid fa-angle-left"></i></NavLink>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className='card_gradient'>
                        <div className="add_btn">
                            <NavLink to={`/edit/${studData._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                            <button className="btn btn-danger" onClick={() => deleteuser(studData._id)}><DeleteOutlineIcon /></button>
                        </div>
                        <div className="row">
                            <div className="left_view col-lg-6 col-md-6 col-12">
                                <img src={studData.gender==='Male' ? maleAvatar : femaleAvatar} style={{ width: 100 }} alt="profile" />
                                <h5 className="mt-3">Name: <i >{studData.name}</i></h5>
                                <h5 className="mt-3">Father Name: <i >Mr. {studData.fatherName}</i></h5>
                                <h5 className="mt-3">Gender: <i>{studData.gender}</i></h5>
                                <h5 className="mt-3">Category: <i>{studData.category}</i></h5>
                            </div>
                            <div className="right_view mt-4 col-lg-6 col-md-6 col-12">

                                <h5 className="mt-5">Date of Birth: <i>{studData.dob}</i></h5>
                                <h5 className="mt-3">Date of Admission: <i>{studData.doa}</i></h5>
                                <h5 className="mt-3">Year of Admission: <i>{studData.yoa}</i></h5>
                                <h5 className="mt-3">Course: <i>{studData.course}</i></h5>
                                <h5 className="mt-3">Field: <i>{studData.field}</i></h5>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default Offcanvas;

