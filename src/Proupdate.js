import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './profileupdate.css';
import {
	BrowserRouter as Router,
	Link,
	useHistory,
  } from "react-router-dom";
import swal from 'sweetalert';
const Proupdate = (props) => {
    
    const history = useHistory()

    // const [name,set_name]=React.useState("")
     const [email,set_email]=React.useState("")
    const [password,set_password]=React.useState("");
    // const [mobile,set_mobile]=React.useState("")
    // const [address1,set_address1]=React.useState("")
    // const [address2,set_address2]=React.useState("")
    // const [id,set_id]=React.useState("")
    const [data, set_data] = React.useState([]);
    const [na, set_na] = React.useState("");
    const [ea, set_ea] = React.useState("");
    const [mo, set_mo] = React.useState("");
    const [ad, set_ad] = React.useState("");
    const [da, set_da] = React.useState("");

    const [new_password, set_new_password] = React.useState("");
    const [old_password, set_old_password] = React.useState("");

    const [modal, show_modal] = React.useState(false);
    const [modall, show_modall] = React.useState(false);
    const [modalll, show_modalll] = React.useState(false);


    React.useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    },[]);

 const getData = async () => {

    try{
        const response = await axios.get(`http://52.66.114.97:3000/auth/list/id`,
        {headers: {'Authorization': 'Bearer '+localStorage.getItem("user")}},
        );
        console.log("lalalala",response.data.data[0]);
    
        set_na(response.data.data[0].name);
        set_ea(response.data.data[0].email);
        set_mo(response.data.data[0].mobile);
        set_ad(response.data.data[0].address1);
        set_da(response.data.data[0].address2);
       
        
    }
    catch(error){
        console.log("**+++++++++",error);
    }

 }


 

    const submit = async () => {
        
        try{
         const response = await axios.put(`http://52.66.114.97:3000/auth/userupdate`,  
         {
                name:na,
                email:ea,
                address1:ad,
                address2:da,
                mobile:mo,

         }, 
         {headers: {'Authorization': 'Bearer '+localStorage.getItem("user")}}, 
         );
         console.log("///////",response.data);
         getData(response.data)
         swal("Done","Saved Successfully","success");
         }
        catch(error){
         console.log("**********",error);
         swal("Opps","Please enter details","error");
        }
    }

    /////////////////////////////////update user api


    const edit = () => {
        set_email(data.email)
        show_modal(true);
    
      };
    
      const editt = (data) => {
     
        set_old_password(data.old_password);
        set_new_password(data.new_password);
        
        show_modall(true);
      };
    
      const edittt = (data) => {
     
        set_password(data.password);
        
        show_modalll(true);
      };
    
    
    const  Saved = async () => {
        console.log("email",data.email)
        try{
         const response = await axios.put(`http://52.66.114.97:3000/auth/email/change`,  
         {
            email:email,
            
         }, 
         {headers: {'Authorization': 'Bearer '+localStorage.getItem("user")}}, 
         );
         console.log("///////",response);
         swal("Done","Email updated Successfully","success");
         
         }
        catch(error){
                
         console.log("**********",error);
         swal("Opps","Database Error","error");
        }
    }


    //////////////////////////////email update api

    const  Savedd = async () => {
        
        try{
         const response = await axios.post("http://52.66.114.97:3000/auth/reset/password",  
         {
            old_password:old_password,
            new_password: new_password,
         }, 
         {headers: {'Authorization': 'Bearer '+localStorage.getItem("user")}}, 
         );
         console.log("///////",response);
         set_data(response)
         swal("Done","Password Saved Successfully","success");
         }
        catch(error){
                
         console.log("**********",error);
         swal("Opps","Database Error","error");
        }
    }

    //////////////////////////////reset password api
    
    const  Saveddd = async () => {
        
        try{
         const response = await axios.post("http://52.66.114.97:3000/auth/deactivateuser",  
         {
            password:password
         }, 
         {headers: {'Authorization': 'Bearer '+localStorage.getItem("user")}}, 
         );
         console.log("///////",response);
         set_data(response)
         swal("Done","Deactivate Sucessfully","success");
         }
        catch(error){
                
         console.log("**********",error);
         swal("Opps","Database Error","error");
        }
    }
    
    ///////////////////////////////deactivate user api
    return (
        <div className=" container">
        
            <form onSubmit={(e)=>{e.preventDefault();submit()}}>

            <label class="labl">User Profile Update</label>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="Email3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control"  value={na} onChange={event => set_na(event.target.value)}></input>
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="input3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" disabled class="form-control" id="Email4" value={ea} />
                        <button type="button" class="form-control btn" style={{borderColor:'black', marginTop:"10px"}}  onClick={() => {show_modal(true)}} >Change Email</button>
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-10">
                        <input type="number" class="form-control" id="Mobile" value={mo} onChange={(e)=>{set_mo(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Address 1</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputAddress"  value={ad} onChange={(e)=>{set_ad(e.target.value)}}/>
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Address 2</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputAddress2" value={da} onChange={(e)=>{set_da(e.target.value)}} />
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label"> Reset-Password</label>
                        <div class="col-sm-10">
                        <button type="button" class="form-control btn" style={{borderColor:'black'}}  onClick={() => { editt(data)}}>Reset</button>
                        </div>
                    </div>
                    <div class="row mb-3 ml-3 mr-2 mt-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Deactivate Account</label>
                        <div class="col-sm-10">
                        <button type="button" class="form-control btn" style={{borderColor:'black'}}  onClick={() => { edittt(data)}}>Deactivate</button>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <button type="submit" class=" form-control btn " style={{backgroundColor:"#00D231",color:'white',borderColor:'green',borderRadius:20 , marginTop:"10px", marginBottom:"20px"}} >Save </button>
                    </div>
            </form>

            <div>
                <Modal
                isOpen={modal}
                ariaHideApp={false}
                >
                    <div class="container">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="please enter a new email"  onChange={event=>set_email(event.target.value)}/>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'space-between'}}> 
                            <button onClick={() => show_modal(false)} >
                                Close
                            </button>
                            <button onClick={() => Saved()} >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>

            <div>
                <Modal
                isOpen={modall}
                ariaHideApp={false}
                >
                    <div class="container">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Enter Old Password</label>
                        <input type="password" class="form-control" id="oldpass" placeholder="please enter old password"  onChange={event=>set_old_password(event.target.value)}/>
                        <label for="formGroupExampleInput" class="form-label" style={{marginTop:"20px"}}>Enter New Password</label>
                        <input type="password" class="form-control" id="newpass" placeholder="please enter new password"  onChange={event=>set_new_password(event.target.value)}/>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <button onClick={() => show_modall(false)} >
                                Close
                            </button>
                            <button onClick={() => Savedd()} >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>

            <div>
                <Modal
                isOpen={modalll}
                ariaHideApp={false}
                >
                    <div class="container">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Enter your current password</label>
                        <input type="password" class="form-control" id="formGroupExampleInput" placeholder="please enter current password"  onChange={event=>set_password(event.target.value)}/>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <button onClick={() => show_modalll(false)} >
                                Close
                            </button>
                            <button onClick={() => Saveddd()}>
                                OK
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        
        </div>
    );
}

export default Proupdate;
