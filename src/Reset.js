import React from 'react';
import axios from 'axios';
import { useHistory,Link } from "react-router-dom";
const Reset = (props) => {

    const history = useHistory()

    const [new_password,set_new_password]=React.useState("")
    const [confirm_password,set_old_password]=React.useState("")
    const [master_password,set_master_password]=React.useState("")
    const [token,set_token]=React.useState("")

    const submit = async ()=>{
        try{
           axios.post("http://localhost:3000/auth/verify/forgot/password",{
            new_password:new_password,
            confirm_password:confirm_password,
            master_password:master_password,
            token:token,
        })}
        catch(error){
            console.log(error)
        }
    }
        React.useEffect(() => {
        console.log(props.match.params.token)
         set_token(props.match.params.token)  
        console.log(props.match.params.master_password)
         set_master_password(props.match.params.master_password)  
        }, []);

    return (
        <div style={{marginTop:"20%",marginLeft:80,marginRight:80}}>
            <form onSubmit={(e)=>{e.preventDefault();submit()}}>
                <span>New password</span>
                <input type="password" className="form-control" placeholder="new password" onChange={(e)=>{set_new_password(e.target.value)}}  /><br />
                <span>Re-enter password</span>
                <input type="password" className="form-control" placeholder="confirm password" onChange={(e)=>{set_old_password(e.target.value)}}  />
                <input type="submit" value="Save" className="btn btn-primary w-100 mt-5" onClick={()=>{alert("password saved successfully")}} />
                <Link to="/" style={{marginLeft:"45%"}}>Back to Login</Link>
            </form>
        </div>
    );
}

export default Reset;
