import {React,useContext} from 'react';
import {useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';
import logo from './images/navlogo.png';
import { NavLink } from 'react-router-dom';



const Navbar = () => {


    const navigate = useNavigate();

    const logout = ()=>{
        // dispatch({type:"USER", payload:false});
        alert('Successfully Logged out !');
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <img src={logo} width='50px' style={{marginLeft:'20px'}} alt='student'/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active black" aria-current="page" href="#" style={{fontSize:'20px', marginLeft : '15px'}}>Home</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    )
}

export default Navbar