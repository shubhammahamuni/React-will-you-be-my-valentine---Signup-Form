import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

    const[user , setuser] = useState({
      name: "",
      email:"",
      gender :"",
      phone :"",
      password:"",
    })
   
    const[error , seterror ] = useState({
      name_error:"",
      email_error:"",
      gender_error :"",
      phone_error : "",
      password_error:"",
    })


    const handle_change = (e)=>{
       let temp = e.target.name;
      
       switch(temp)
       {
         case "name":
           setuser({...user , name:e.target.value})
           if( !/^[A-Za-z0-9]+$/.test(e.target.value ))
           {
              seterror({...error , name_error : "Name is not alphanumeric"})
           }
           else
           {
            seterror({...error , name_error : ""})
           }
           break;


         case "email":
          setuser({...user , email:e.target.value})
          if(!e.target.value.includes("@"))
               {
                seterror({...error , email_error: "Email must contain @"})
       
              }else
              {
                seterror({...error , email_error : ""}) 
              }
          break;



          case "gender":
           setuser({...user , gender:e.target.value})
           if(!e.target.value || e.target.value == "select option")
           {
              seterror({...error , gender_error:"Please identify as male, female or others"})
           }
           else
           {
            seterror({...error , gender_error:""})
           }
           break;




         case "phone":
          setuser({...user , phone:e.target.value})
          if(!/^[0-9]+$/.test(e.target.value))
          {
            seterror({...error , phone_error :"Phone Number must contain only numbers"})
          }
          else
          {
            seterror({...error , phone_error :""})
          }
          break;




          case "password":
           setuser({...user , password:e.target.value})
           if(e.target.value.length < 6)
           {
             seterror({...error, password_error :"Password must contain atleast 6 letters"});
           }
           else
           {
            seterror({...error, password_error :""});
           }
           break;
       }

       
    }

   

    const handle_submit_button =(e)=>
    {
       e.preventDefault();
    
     
    if(user.name  =="" && user.gender =="" && user.email =="" && user.phone =="" && user.password =="")
    {
      alert("All fields are mandatory");
     
    }
    else if(!error.name_error && !error.email_error && !error.phone_error &&  !error.gender_error && !error.password_error )
    {
      alert("Hello " + user.email.split("@")[0]);
    }
 
    } 


  return (
    <div id="main">
     
     <div className="outer">
    
        <form className="mainform" onSubmit={handle_submit_button}  >
            <div className="a"> 
            <label  >Name:</label>
            <input type="text" placeholder="name" name="name" data-testid = 'name' onChange={handle_change} />
            {!error.name_error?<></>:<span style={{ fontSize:12, color : "red" }}>{error.name_error}</span>}
            </div>
            
           <div className="a">
            <label>Email address</label>
            <input type="text" placeholder="email" name="email" data-testid = 'email' onChange={handle_change} />
            {!error.email_error?<></>:<span style={{ fontSize:12, color : "red" }}>{error.email_error}</span>}
            </div>
            
           <div className="a">
            <label>Gender:</label>
            <select placeholder="gener"  name="gender" data-testid = 'gender' onChange={handle_change} >
            <option >select option</option>
              <option value="male" >male</option>
              <option value="female">female</option>
              <option value="other" >other</option>
            </select>
            {!error.gender_error?<></>:<span style={{ fontSize:12, color : "red" }}>{error.gender_error}</span>}
            </div>


           <div className="a">
            <label>Phone Number</label>
            <input type="text" placeholder="phone" data-testid = 'phoneNumber' name="phone" onChange={handle_change} />
             {!error.phone_error?<></>:<span style={{ fontSize:12, color : "red" }}>{error.phone_error}</span>}
            </div>

            <div className="a">
            <label>Password</label>
            <input type="password" placeholder="password" data-testid = 'password' type='password' name="password" onChange={handle_change} d></input>
            {!error.password_error?<></>:<span style={{ fontSize:12, color : "red" }}>{error.password_error}</span>}
            </div>

            
            <input className="sub" data-testid = 'submit' type="submit" /> 
        </form>
     </div>
    </div>
  )
}


export default App;
