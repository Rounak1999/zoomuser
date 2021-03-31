import axios from 'axios'
import React from 'react'
import './home.css';
import { useHistory,Link } from "react-router-dom";
import swal from 'sweetalert';
import Ava from './img/man.svg'; 

export default function Home ({navigation}){


    
    const history = useHistory()

    const [email,set_email]=React.useState("")
    const [password,set_password]=React.useState("")

    const [ischeck,set_ischeck]=React.useState("")
    const [errors, setErrors] = React.useState({});
    const [value, setValues] = React.useState("");

    const submit = async ()=>{
        let a = await axios.post("http://52.66.114.97:3000/auth/userlogin",{
            email:email,
            password:password
        })

        if(a.status==200){
            localStorage.setItem("user",a.data.token)
            set_ischeck(a.data)
            swal("Thanku", "You Are Logged in", "success")
            window.location.reload()
           // swal("Thanku", "You Are Logged in", "success")
             history.push("/updateprofile")
        }else{
            swal(a.data)
        }
        console.log(a.message)
    }


    const get_login=()=>{
        let login=localStorage.getItem("user")
        set_ischeck(login)
        console.log("user==>",login)
    }


    React.useEffect(()=>{
        get_login();
    },[])

    const Logaler=(value,errors)=>{
       
        
         if(!value.email)
         {
            setErrors({...errors,email:"email required"})
         }
         else if (!/\S+@\S+\.\S+/.test(value.email))
         {
            setErrors({...errors,email:"Enter a valid email"})
         } 

         if (!value.password) 
         {
            setErrors({...errors,password:"password required"})
         }
         else if (!/^[A-Za-z]+/.test(value.password))
         {
            setErrors({...errors,password:"Enter a valid password"}) ;
         } 
        
        
        
    }

    
    

    return (
        <div className="container">
            {ischeck==undefined|| ischeck ==null || ischeck==""?
            <div  className="lol">
           
                <form onSubmit={(e)=>{e.preventDefault();submit();Logaler(value,errors)}} className="faram">
                <div class="image"><img src={Ava} alt="third" className="image-fluid imag"/> </div>
                <span class="log">User Login</span>
                <p>Enter your username</p>
                <input type="text" className="form-control" placeholder="username" onChange={(e)=>{set_email(e.target.value)}}  /><br />
                  {/* <p>{errors.email}</p> */}
                <p>Enter your password</p>
                <input type="password" className="form-control" placeholder="password" onChange={(e)=>{set_password(e.target.value)}}  />
                 {/* <p>{errors.password}</p> */}
                <input type="submit" value="login" className="btn btn-primary w-100 mt-5" style={{marginBottom:10 ,backgroundColor:"#00D231", borderColor:"green", borderRadius:'20px'}}/>
                <div>
                <Link to="/emailverify" >forgetpassword</Link><br></br>
                <div style={{marginTop:"10px"}}>
                <Link to="/signin">Dont have an account? Signin</Link>
                </div>
                </div>
                </form>
                </div>:

                <div className="container">
                        <span>You are Logged In.</span>
                    </div>

}
        </div>
    )
} 

