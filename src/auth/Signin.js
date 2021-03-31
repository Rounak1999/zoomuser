import React from "react";
import'./style.css';
import validate from "./validateInfo";
import useForm from "./useForm";
import Wav from './img/wave.png';
import Ilu from './img/hero-illustration1.svg';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

    /*-----------------------jsui----------------------*/ 

    const inputs = document.querySelectorAll(".input");


    function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value === ""){
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
     });

    return(
       <div>
        <img class="wave" src={Wav} alt="first" />
        <div class="container">
            <div class="img">
                <img src={Ilu} alt="second" />
            </div>
            <div class="login-content">
                <form  onSubmit={handleSubmit} className="form" noValidate>
                    {/* <img src={Ava} alt="third"/> */}
                    <h2 class="title">Welcome</h2>
                       <div class="input-div pass">
                          <div class="i">
                                  <i class="fas fa-user"></i>
                          </div>
                          <div class="div">
                                  <h5>Firstname</h5>
                                  <input
                                    class="input" 
                                    type="text" 
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange} />
                                    {errors.firstname && <p>{errors.firstname}</p>}
                          </div>
                       </div>
                       <div class="input-div pass">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <h5>Lastname</h5>
                                <input
                                        class="input" 
                                        type="text"
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                    />
                                           {errors.lastname && <p>{errors.lastname}</p>}
                                
                        </div>
                     </div>
                     {/*------------*/}
                     
                       <div class="input-div pass">
                          <div class="i"> 
                            <i class="fas fa-at"></i>
                          </div>
                          <div class="div">
                               <h5>Email</h5>
                               <input
                                class="input"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                       </div>
                    </div>
                    <div class="input-div pass">
                        <div class="i"> 
                             <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="div">
                             <h5>Phone Number</h5>
                             <input
                                    class="input"
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <p>{errors.phone}</p>}
                     </div>
                  </div>
                  <div class="input-div pass">
                    <div class="i"> 
                         <i class="fas fa-calendar"></i>
                    </div>
                    <div class="div">
                         <h5>Date of Birth</h5>
                         <input
                                    class="input"
                                    type="text"
                                    name="date"
                                    value={values.date}
                                    onChange={handleChange}
                                />
                                {errors.date && <p>{errors.date}</p>}
                 </div>
              </div>
                    <input type="submit" class="btn" value="SIGNIN"></input>
                </form>
            </div>
        </div>
        
        </div>
       
    )
}
export default FormSignup;