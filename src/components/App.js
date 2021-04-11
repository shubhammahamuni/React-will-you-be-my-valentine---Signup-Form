import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [error, setError] = useState("");
  let [welcome, setWelcome] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("male");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  const handleOnChange = (e) => {
    setError("");
    setWelcome("");
    if (e.target.getAttribute("data-testid") === "name") {
      setName(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "email") {
      setEmail(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "gender") {
      setGender(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "phoneNumber") {
      setPhone(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "password") {
      setPassword(e.target.value);
    }
  };
  const checkError = (name, email, phone, password) => {
    let list = [];
    if (name === "" || email === "" || phone === "" || password === "") {
      list.push("All fields are mandatory");
    }
    // name validation
    let names = name.split("");
    console.log(names);
    let temp = names.filter(
      (x) =>
        !(
          (x <= "z" && x >= "a") ||
          x === " " ||
          (x <= "Z" && x >= "A") ||
          (x >= "0" && x <= "9")
        )
    );
    console.log(temp);
    if (temp.length > 0) {
      list.push("Message: Name is not alphanumeric");
    }
    //email validation
    if (email.indexOf("@") === -1) {
      list.push("Email must contain @");
    }
    //phone Number validation
    if (!Number(phone)) {
      list.push("Phone Number must contain only numbers");
    }
    // password validation
    if (password.length < 6) {
      list.push("Password must contain atleast 6 letters");
    }
    return list;
  };
  const handleOnSubmit = (e) => {
    setWelcome("");
    e.preventDefault();
    let errors = checkError(name, email, phone, password);
    if (errors.length > 0) {
      setError(errors[0]);
      return;
    }
    let userName = email.slice(0, email.indexOf("@"));
    setWelcome("Hello " + userName);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setGender("male");
  };
  return (
    <div id="main">
      <form onSubmit={handleOnSubmit}>
        <label>Name :</label>
        <br />
        <input
          type="text"
          data-testid="name"
          value={name}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Email :</label>
        <br />
        <input
          type="text"
          data-testid="email"
          value={email}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Gender :</label>
        <select data-testid="gender" value={gender} onChange={handleOnChange}>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
        <br />
        <br />
        <label>Phone Number :</label>
        <br />
        <input
          type="text"
          data-testid="phoneNumber"
          value={phone}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="password"
          data-testid="password"
          value={password}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <input type="submit" data-testid="submit" value="Submit" />
      </form>
      {error ? <h3>{error}</h3> : null}
      {welcome ? <h3>{welcome}</h3> : null}
    </div>
  );
};

export default App;

// import React, {Component, useState} from "react";

// import '../styles/App.css';

// const App = () => {

//     const[user , setuser] = useState({
//       name: "",
//       email:"",
//       gender :"",
//       phone :"",
//       password:"",
//     })
   
//     const[error , seterror ] = useState({
//       name_error:"",
//       email_error:"",
//       gender_error :"",
//       phone_error : "",
//       password_error:"",
//     })


//     const handle_change = (e)=>{
//        let temp = e.target.name;
      
//        switch(temp)
//        {
//          case "name":
//            setuser({...user , name:e.target.value})
//            if( !/^[A-Za-z0-9]+$/.test(e.target.value ))
//            {
//               seterror({...error , name_error : "Name is not alphanumeric"})
//            }
//            else
//            {
//             seterror({...error , name_error : ""})
//            }
//            break;


//          case "email":
//           setuser({...user , email:e.target.value})
//           if(!e.target.value.includes("@"))
//                {
//                 seterror({...error , email_error: "Email must contain @"})
       
//               }else
//               {
//                 seterror({...error , email_error : ""}) 
//               }
//           break;



//           case "gender":
//            setuser({...user , gender:e.target.value})
//            if(!e.target.value || e.target.value == "select option")
//            {
//               seterror({...error , gender_error:"Please identify as male, female or others"})
//            }
//            else
//            {
//             seterror({...error , gender_error:""})
//            }
//            break;




//          case "phone":
//           setuser({...user , phone:e.target.value})
//           if(!/^[0-9]+$/.test(e.target.value))
//           {
//             seterror({...error , phone_error :"Phone Number must contain only numbers"})
//           }
//           else
//           {
//             seterror({...error , phone_error :""})
//           }
//           break;




//           case "password":
//            setuser({...user , password:e.target.value})
//            if(e.target.value.length < 6)
//            {
//              seterror({...error, password_error :"Password must contain atleast 6 letters"});
//            }
//            else
//            {
//             seterror({...error, password_error :""});
//            }
//            break;
//        }

       
//     }

   

//     const handle_submit_button =(e)=>
//     {
//        e.preventDefault();
    
     
//     if(user.name  =="" && user.gender =="" && user.email =="" && user.phone =="" && user.password =="")
//     {
//       alert("All fields are mandatory");
     
//     }
//     else if(!error.name_error && !error.email_error && !error.phone_error &&  !error.gender_error && !error.password_error )
//     {
//       //setuser({...user , name=""})
//       alert("Hello " + user.email.split("@")[0]);
//        setuser({...user , name:"" , email:"" , phone:"",password:"" , gender:""})
//     }
 
//     } 


//   return (
 
//     <div id="main">
     
//      <div className="outer">
    
//         <form className="mainform" onSubmit={handle_submit_button}  >
//             <div className="a"> 
//             <label  >Name:</label>
//             <input type="text" placeholder="name" value={user.name} name="name" data-testid = 'name' onChange={handle_change} />
//             {!error.name_error?null:<span style={{ fontSize:12, color : "red" }}>{error.name_error}</span>}
//             </div>
            
//            <div className="a">
//             <label>Email address</label>
//             <input type="text" placeholder="email" value={user.email} name="email" data-testid = 'email' onChange={handle_change} />
//             {!error.email_error?null:<span style={{ fontSize:12, color : "red" }}>{error.email_error}</span>}
//             </div>
            
//            <div className="a">
//             <label>Gender:</label>
//             <select placeholder="gener" value={user.gender}  name="gender" data-testid = 'gender' onChange={handle_change} >
//             <option >select option</option>
//               <option value="male" >male</option>
//               <option value="female">female</option>
//               <option value="other" >other</option>
//             </select>
//             {!error.gender_error?null:<span style={{ fontSize:12, color : "red" }}>{error.gender_error}</span>}
//             </div>


//            <div className="a">
//             <label>Phone Number</label>
//             <input type="text" placeholder="phone" value={user.phone} data-testid = 'phoneNumber' name="phone" onChange={handle_change} />
//              {!error.phone_error?null:<span style={{ fontSize:12, color : "red" }}>{error.phone_error}</span>}
//             </div>

//             <div className="a">
//             <label>Password</label>
//             <input type="password" placeholder="password" value={user.password} data-testid = 'password' type='password' name="password" onChange={handle_change} d></input>
//             {!error.password_error?null:<span style={{ fontSize:12, color : "red" }}>{error.password_error}</span>}
//             </div>

            
//             <button className="sub" data-testid = 'submit' type="submit" >Submit</button> 
//         </form>
//      </div>
//     </div>
   
//   )
// }


// export default App;
