import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


export const Login = () => {
 const [username, setusername] = useState("");
 const [password, setPassword] = useState("");
 const [login , setlogin] = useState(true);


 const submit = (e:any) => {
  e.preventDefault();

  Meteor.loginWithPassword(username, password);
  
};
const signUp =()=>{
  Accounts.createUser({
    email: username,
    password: password,
    username: username
  });

}
  return (
    <div style={{display: 'flex', justifyContent:"center", alignItems: 'center',height: "90vh", margin:"0%", padding:"0%"}}>
    <form onSubmit={submit} style={{display: login? "block" : "none" }} >
      <h1 style={{display: "block", textAlign: 'center'}}> Login </h1>
      <input  style={{display: "block", width: "30vw",height: "5vh",marginBottom: '15px', border: "none", borderBottom: "1px solid black"}} placeholder="username" type="text" onChange={(e)=>setusername(e.target.value)} />
      <input  style={{display: "block", width: "30vw",height: "5vh",marginBottom: '15px', border: "none", borderBottom: "1px solid black"}} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <div style={{position:'absolute', left: "50%", transform:"translateX(-50%)"}}>
      <button style={{display: "block",width: "30vw",height: "5vh", borderRadius:"5px", border: "none", backgroundColor: "#94F792",color: "white",  marginBottom: '15px' }} type="submit" > login </button>
      <button style={{display: "block", backgroundColor: 'transparent', marginBottom: '5px', border:"none",}} onClick={()=> setlogin(false)}  > Create New Account </button>
      </div>
    </form>
    <form onSubmit={signUp} style={{display: login? "none": "block"}}>
    <h1 style={{display: "block",color:"#94F792", textAlign: 'center'}}> Sign Up </h1>
    <input  style={{display: "block", width: "30vw",height: "5vh",marginBottom: '15px', border: "none", borderBottom: "1px solid black"}} placeholder="username" type="text" onChange={(e)=>setusername(e.target.value)} />
      <input  style={{display: "block", width: "30vw",height: "5vh",marginBottom: '15px', border: "none", borderBottom: "1px solid black"}} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <div style={{position:'absolute', left: "50%", transform:"translateX(-50%)"}}>
      <button style={{display: "block",width: "30vw",height: "5vh", borderRadius:"5px", border: "none", backgroundColor: "#94F792",color: "white", marginBottom: '15px' }} type="submit" > Sign Up </button>
      <button style={{display: "block", backgroundColor: 'transparent', marginBottom: '5px', border:"none",}} onClick={()=> setlogin(true) }> Already have an account </button>
      </div>
    </form>
      
    </div>
  );
};
