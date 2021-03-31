import * as React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
 import Sign from "../Sign";
// import EnhancedCarTable from "../Sidenav/Car_Table"
// import EnhancedTable from '../Sidenav/User_Table';
// import EnhancedBlogTable from '../Sidenav/Blog_Table';
// import EnhancedFaqTable from '../Sidenav/Faq_Table';
import Home from '../Home';
import Reset from '../Reset';
import EmailVerify from '../EmailVerify';
import Proupdate from '../Proupdate';
const App_router = () => {
  return (
    
      <Switch>
         <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Sign} /> 
        {/* <Route exact path="/cartable" component={EnhancedCarTable} />
         <Route exact path="/blogtable" component={EnhancedBlogTable} />
         <Route exact path="/faqtable" component={EnhancedFaqTable} /> */}
         <Route exact path="/emailverify" component={EmailVerify} />
         <Route exact path="/verify/:token/:master_password" component={Reset} />
         <Route exact path="/updateprofile" component={Proupdate} />
      </Switch>
  );
};


let login
const get_login=()=>{
    login=localStorage.getItem("user")
    console.log("user==>",login)
}
get_login();  

const Main_router = () => {
  return (
    <>
         {login==""||login==null?null: 
         <Proupdate />  } 

       <App_router /> 
      
    </>
  );
};

export default Main_router;
