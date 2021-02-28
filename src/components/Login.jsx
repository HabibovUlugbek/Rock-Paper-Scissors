import "../css/login.css" 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [link, setLink] = useState("/");
    const [action, setAction] = useState("");
    const [show, setShow] = useState(false)

    const Signin = () => {
        if (username.length !== 0 && password.length !== 0) {
            setLink("/home")
            
        }   else {
            setLink("/")
        }
    }

    const Show = () => {
        setShow(!show)
        if(link === "/"){
            setAction("Something went wrong !!!")
        } else {
            setAction("Sign in successfully")
        }
    }


    // useEffect(() => {
    //     const interval = setInterval(Signin, 50);
    //     return () => { clearInterval(interval) }
    // }, [username, password, action])
     
    

    return (
        <div className="container">
            <form  className="login-box" >
                <h1>Sign in</h1>
                <input  
                    type="text" 
                    placeholder="Username" 
                    className="username" 
                    onChange={e => setUsername(e.target.value)} />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="password"
                    onChange={e => setPassword(e.target.value)} />
                <button 
                    type="button" 
                    className=""
                    onMouseEnter={Signin}
                    onClick={Show}>
                        <Link className="sign-in sign-in-link" to={`${link}`}>Sign in</Link>
                    </button>
            </form>
            <Transition 
                in={show}
                timeout={3000} 
                
                mountOnEnter
                unmountExit
                >
                    {
                        state  => 
                        <div className="wrapper">
                            
                            <div className={`square ${state}`}>
                                <div className="error"><p className="text">&times;</p></div>
                                <p>{action}</p>
                            </div>
                        </div>
                        
                    }
            </Transition>
            
        </div>
    )
}

export default Login
