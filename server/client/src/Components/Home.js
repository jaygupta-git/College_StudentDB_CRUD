import React from 'react';
import { NavLink } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import background from '../Components/images/img2.jpg'
import julogo from './images/juLogo.png'

const Home = () => {

    const [viewData,setViewData] = React.useState("")

    // Search filter function on the home page
    const myFunction = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    // Search function on the basic of registration no
    const myFunction2 = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput2");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    
    const [userdata, setuserdata] = React.useState([]);
    console.log(userdata);
    const addData = async (e) => {

        const res = await fetch('/getdata',{
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data)
        {
            alert("Oops some error occurred!");
        }
        else {
            setuserdata(data);
            console.log('Data successfully added !');
        }
    }
    React.useEffect(() => {
        addData();
    }, []);


    const tableButtonClick = (id)=>{
        setViewData(id);
    }

    const deleteUser = async(id)=>{
        console.log("Hello");
    }


    return (
        <div  className='main_gradient'>
            <div className='container main_inside' style={{backgroundColor:'white'}}>
                <h2>JECRC Student Database</h2>
                <hr></hr>
                <hr></hr>
                <div className='below-nav'>
                    <div className='d-flex align-items-center'>
                        <img src={julogo} width='60px' alt='nothing'></img>
                        <h2 className='px-2'>JECRC Student Database</h2>
                    </div>
                    <div className='d-flex align-items-center'>
                        <h4> Total Registered Students : {userdata.length}</h4>
                        <div className='add-btn px-3 mx-4 mb-2 float'>
                                    <NavLink to="/register" className='btn btn-primary'>Add Student</NavLink>
                        </div>

                    </div>
                </div>
                <hr></hr>
                <input className='mb-5' type="text" id="myInput" onKeyUp={myFunction} placeholder="Search by name.." title="Type in a name"></input>
                <span> OR</span>
                <input className='mb-5 ml-2' type="text" id="myInput2" onKeyUp={myFunction2} placeholder="Search by Registration No.." title="Type the Reg no"></input>
                <div>
                    <table className="table table-striped table-bordered" id="myTable">
                        <thead>
                            <tr className='bg-primary'>
                                <th>S.No</th>
                                <th>Registration No.</th>
                                <th>Name</th>
                                <th>Father's Name</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Course</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{id + 1}</td>
                                                <td>{element.regNo}</td>
                                                <td>{element.name}</td>
                                                <td>{element.fatherName}</td>
                                                <td>{element.gender}</td>
                                                <td>{element.dob}</td>
                                                <td>{element.course}</td>
                                                <td className='d-flex justify-content-between'>
                                                <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                                            </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;
