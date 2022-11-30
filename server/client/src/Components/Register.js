import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Register = () => {

    const [formData, setFormData] = React.useState({
        name: "",
        regNo: "",
        gender: "",
        yoa: "",
        fatherName: "",
        category: "",
        dob: "",
        doa: "",
        field: "",
        course: ""
    })

    const navigate = useNavigate();

    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addData = async (e) => {

        e.preventDefault();

        const { name, regNo, gender, yoa, fatherName, category, dob, doa, field, course } = formData;
        const res = await fetch('/register', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, regNo, gender, yoa, fatherName, category, dob, doa, field, course
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("Student with the Registration Number Already Exists !");
        }
        else {
            alert('Data added successfully')
            console.log('Data added');
            navigate('/');
        }
    }





    return (
        <div className='form_gradient height' >
            <NavLink to={'/'} className='btn btn-primary'><i class="fa-solid fa-angle-left"></i></NavLink>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NavLink to={'/'} className='btn btn-primary'><i class="fa-solid fa-angle-left"></i></NavLink>
            <div className='container inside_form' style={{backgroundColor:'white'}}>
            <h3 style={{paddingTop:'5px'}}>Edit the details in the form and Submit</h3> 
            <hr></hr>
            <br></br>
                <form>
                    <div className='row'>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" className="form-label"><b>Name:</b></label>
                            <input type="text" name="name" value={formData.name} placeholder='Enter your full name' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Registration No:</b></label>
                            <input type="text" name="regNo" value={formData.regNo} className="form-control" onChange={setData} placeholder='Enter your Registration No.' id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Father's Name:</b></label>
                            <input type="text" name="fatherName" value={formData.fatherName} placeholder='Enter your Father name' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Gender:</b></label>
                            <input type="text" name="gender" value={formData.gender} placeholder='Enter your Gender' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Category:</b></label>
                            <input type="text" name="category" value={formData.category} placeholder='Enter the category you belongs to' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>DOB:</b></label>
                            <input type="text" name="dob" value={formData.dob} placeholder='Enter your Date of Birth' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>DOA:</b></label>
                            <input type="text" name="doa" value={formData.doa} placeholder='Enter your Date of Admission' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Year of Admission:</b></label>
                            <input type="text" name="yoa" value={formData.yoa} placeholder='Enter your Year of admission' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Field:</b></label>
                            <input type="text" name="field" value={formData.field} placeholder='Enter course field' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" aria-describedby="emailHelp" className="form-label"><b>Course:</b></label>
                            <input type="text" name="course" value={formData.course} placeholder='Enter your Course Name' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" onClick={addData} className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;