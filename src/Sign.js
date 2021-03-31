import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './home.css';
import { useHistory,Link } from "react-router-dom";

const Sign = () => {

    const [name,set_name]=React.useState("");
    const [email,set_email]=React.useState("");
    const [password,set_password]=React.useState("");
    const [confirmpassword,set_confirmpassword]=React.useState("");
    const [address1,set_address1]=React.useState("");
    const [address2,set_address2]=React.useState("");
    const [mobile,set_mobile]=React.useState("");
    const history = useHistory()
    

    const submit = async ()=>{
        try{
         let a = await axios.post("http://52.66.114.97:3000/auth/userregistration",{
         name:name,
         email:email,
         password:password,
         confirmpassword:confirmpassword,
         address1:address1,
         address2:address2,
         mobile:mobile,
        }
            
         )
         console.log(a.status);
         }
        catch(error){
                
         console.log(error);
        }
}


    const EmailAler= () => {
        if(email=="" || email==null)
        {
            swal("Error", "please enter a email", "error")
        }
        else
        {
            swal("Success", "email send successfully", "success")
        }
    }

     

    return (
        
            <div class="container">
            <div class="lolo">
            <form onSubmit={(e)=>{e.preventDefault();submit()}} className="faram">
            <span class="log">Sign up</span>
                <span> Name</span>
                <input type="text" className="form-control" name="mail" placeholder="enter name" onChange={(e)=>{set_name(e.target.value)}}  /><br />
                <span> Email</span>
                <input type="text" className="form-control" name="mail" placeholder="enter email" onChange={(e)=>{set_email(e.target.value)}}  /><br />
                <span> Password</span>
                <input type="password" className="form-control" name="mail" placeholder="enter password" onChange={(e)=>{set_password(e.target.value)}}  /><br />
                <span> Confirm Password</span>
                <input type="password" className="form-control" name="mail" placeholder="enter re-enter password" onChange={(e)=>{set_confirmpassword(e.target.value)}}  /><br />
                <span> Address 1</span>
                <input type="text" className="form-control" name="mail" placeholder="Address 1" onChange={(e)=>{set_address1(e.target.value)}}  /><br />
                <span> Address 2</span>
                <input type="text" className="form-control" name="mail" placeholder="Address 2" onChange={(e)=>{set_address2(e.target.value)}}  /><br />
                <span> Mobile</span>
                <input type="number" className="form-control" name="mail" placeholder="mobile number" onChange={(e)=>{set_mobile(e.target.value)}}  /><br />
                <input type="submit" value="Send" className="btn btn-primary w-100 mt-2" onClick={()=>{EmailAler()}} style={{backgroundColor:"#00D231", borderColor:"green", borderRadius:'20px'}}/>
                <div style={{marginTop:"10px", display:'flex', justifyContent:'center'}}>
                <Link to="/">Back to Login</Link>
                </div>
                </form>
                </div>
        </div>
        
    );
}

export default Sign;
