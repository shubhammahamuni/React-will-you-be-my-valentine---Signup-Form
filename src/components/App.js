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
           
           break;
         case "email":
          setuser({...user , email:e.target.value})
          
          break;
          case "gender":
           setuser({...user , gender:e.target.value})
           
           break;
         case "phone":
          setuser({...user , phone:e.target.value})
          
          break;
          case "password":
           setuser({...user , password:e.target.value})
           break;
       }

       
    }

    function cheack_for_validation()
    {
     
      let name_e = ""
      let email_e = ""
      let gender_e =""
      let phone_e = ""
      let password_e =""
      let exp = /^[A-Za-z0-9]+$/;
      const{ name , email , gender, phone , password} = user;
      

      


      if( name =="") 
      {
        name_e = "name Error"
       
      }
      else if(!exp.test(name))
      {
          name_e = "Name is not alphanumeric"
         
      }
     
      if(!email)
      {
        email_e = "Email Error";
        
      }
      else if(!email.includes("@"))
      {
        email_e = "Email must contain @";
       
      }
      
      if(!gender || gender == "select option")
      {
        
        gender_e = "Please identify as male, female or others"
       
      }
      
     

      if(!phone)
      {
       
        phone_e = "Phone Number Error";
       
      }
      else if(!/^[0-9]+$/.test(phone)){ phone_e = "Phone Number must contain only numbers" ; } 
       if(!password )
      {
        
        password_e = "Password Error";
   
      }
      else if(password.length < 6 )
      {
        password_e = "Password must contain atleast 6 letters"; 
       
      }
      
      seterror({...error , name_error:name_e , email_error:email_e,phone_error:phone_e,password_error:password_e,gender_error:gender_e})
      if(name == "" && email =="" && gender=="" &&phone=="" && password =="")
      {
        alert("All fields are mandatory");
     
      } 
      
    }

    const handle_submit_button =(e)=>{
      e.preventDefault();
     cheack_for_validation();
     console.log(error);
     
    // if(user.name !="" && user.gender!="" && user.email!="" && user.phone!="" && user.password!="")
    // {
    //   alert("Hello " + user.email.split("@")[0]);
     
    // } 



    if(!error.name_error && !error.email_error && !error.phone_error &&  !error.gender_error && !error.password_error )
    {
      alert("Hello " + user.email.split("@")[0]);
    }
    console.log(error);
     // console.log(user);
        //console.log(error);
        
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
