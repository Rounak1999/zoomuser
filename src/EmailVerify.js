import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const EmailVerify = () => {

    const [email,set_email]=React.useState("")

    const submit = async ()=>{
        try{
         let a = await axios.post("http://52.66.114.97:3000/auth/forgot/password",{
         email:email,
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
                swal("Thankyou", "email send successfully", "success")
        }
    }

     

    return (
        
            <div style={{marginTop:"20%",marginLeft:80,marginRight:80}}>
            <form onSubmit={(e)=>{e.preventDefault();submit()}}>
                <span>Enter Email</span>
                <input type="text" className="form-control" name="mail" placeholder="enter email" onChange={(e)=>{set_email(e.target.value)}} style={{marginTop:"30px"}} /><br />
                <input type="submit" value="Send" className="btn btn-primary w-100 mt-5" onClick={()=>{EmailAler()}} style={{backgroundColor:"#00D231", borderColor:"green", borderRadius:'20px'}}/>
                </form>
        </div>
        
    );
}

export default EmailVerify;
