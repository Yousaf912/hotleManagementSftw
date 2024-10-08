import { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/rani logo.png'
import style from './header.module.css'
import { FiMenu } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { ComonStore} from '../../ContexStore/Store';
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { getAuth, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';





export default function Header() {
    const contx = useContext(ComonStore);
    const [showAccount, setShowAccount] = useState(false);
    const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const navigate = useNavigate()
    

    const profile = () => {
        setShowAccount(!showAccount)
    }


    const logout = () => {
        console.log('Logout function triggered');
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                toast.success('SignOut Successfully');
                contx.setIsLogin(false);
            })
            .catch(() => {
                toast.error('Try again Later');

            });
    };
    

    

    const login = () => {
        navigate('/login')
    }

    const show = () => {
        setShowMenu(!showMenu)
    }
    const handleResize = () => {
        setShowNavbar(window.innerWidth > 768);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
const openProfile=()=>{
navigate(`/profile/${contx.userUid}`)
}

const gocomplain = ()=>{
navigate(`/profile/${contx.userUid}/complains/complain`)
}
const goservice = ()=>{
navigate(`/profile/${contx.userUid}}/services/request`)
}

    return (
        <div className={``} id='home'>
            <ToastContainer />
            <div className="container  ">
                <header className="d-flex flex-wrap align-items-center  justify-content-around justify-content-sm-between  py-3 mb-4 ">
                    <div className="col-4 col-sm-3 col-md-2 col-lg-2  mb-2 mb-md-0">

                        <img src={logo} style={{ width: '100%' }} />

                    </div>

                    {showNavbar ?
                        <>
                            <ul className={`${style.ul} nav text-white col-6 col-md-7 col-lg-5 mb-2 justify-content-center mb-md-0`}>
                                <li><a href="#home" className="nav-link px-2 ">Home</a></li>
                                <li><a href="#" className="nav-link px-2">Contact Us</a></li>
                                <li><a href="#about" className="nav-link px-2">About</a></li>
                                {contx.isLogin &&
                                    <>
                                        <li onClick={gocomplain}><p className="mt-2 px-2">Complain</p></li>
                                        <li onClick={goservice}><p  className=" mt-2 px-2">Service</p></li>
                                    </>}
                            </ul>

                            <div className="col-md-1 text-end">
                                {contx.isLogin ?
                                    <div className='text-white position-relative'>
                                        <BsPersonCircle onClick={profile} className='fs-1' style={{ cursor: 'pointer' }} />
                                        <h6>{contx.userInfo.name}</h6>

                                        <div className={`${showAccount ? style.profileShow : style.profile} p-3 rounded-4`}>
                                            <div className='d-flex' onClick={logout}>
                                                <RiLogoutCircleLine className='fs-4 me-2' />
                                                <p>LogOut</p>
                                            </div>
                                            <div className='d-flex'>
                                                <IoMdPerson className='fs-4 me-2' />
                                                <p onClick={openProfile}>Account</p>
                                            </div>
                                        </div>

                                    </div> :
                                    <button type="button" onClick={login} className="btn text-white" style={{ backgroundColor: '#033478' }}>Login</button>
                                }
                            </div>     </> :
                        <div className='position-relative  '>
                            <button type="button" onClick={show} className="btn" style={{ backgroundColor: '#033478' }}><FiMenu className='fs-1 text-white' />
                            </button>

                            <ul className={`${showMenu ? style.show : style.menu}  text-center nav d-flex flex-column `}>
                                <li><a href="#home" className="nav-link text-white px-2 ">Home</a></li>
                                <li><a href="#" className="nav-link  text-white px-2">Contact Us</a></li>
                                <li onClick={gocomplain}><p className=" text-white  px-2">Complain</p></li>
                                <li onClick={goservice}><p className=" text-white  px-2">Service</p></li>
                                <li><a href="#about" className="nav-link text-white px-2">About</a></li>
                            </ul>
                        </div>


                    }
                </header>
            </div>
        </div>
    )
}
