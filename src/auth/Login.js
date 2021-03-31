import React from 'react';
import'./style.css';
import validate from "./validateInfo";
import useForm from "./useForm";
import Ava from './img/man.svg'; 
import Wav from './img/wave.png';
import Ilu from './img/hero-illustration1.svg';



const Login = (submitForm) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );


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

    return (

        <div>
             <img class="wave" src={Wav} alt="first" />
        <div class="container">
            <div class="img">
                <img src={Ilu} alt="second" />
            </div>
            <div class="login-content">
                <form  onSubmit={handleSubmit} className="form" noValidate>
                    <img src={Ava} alt="third"/> 
                    <h2 class="title">Welcome</h2>
                       <div class="input-div pass">
                          <div class="i">
                                  <i class="fas fa-user"></i>
                          </div>
                          <div class="div">
                                  <h5>Username</h5>
                                  <input
                                    class="input" 
                                    type="text" 
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange} />
                                    {errors.username && <p>{errors.username}</p>}
                          </div>
                       </div>
                       <div class="input-div pass">
                        <div class="i">
                                {/* <i class="fas fa-user"></i> */}
                             {/*    <FontAwesomeIcon icon={["fas", "fa-user"]} /> */}
                        </div>
                        <div class="div">
                                <h5>Password</h5>
                                <input
                                        class="input" 
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                           {errors.password && <p>{errors.password}</p>}
                                
                        </div>
                        
                     </div>
                     
                    <input type="submit" class="btn" value="LOGIN"></input>
                </form>
            </div>
        </div>
        </div>
    );
}
export default Login;


