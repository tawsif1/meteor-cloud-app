import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Comments } from './Comment';
import comment from '../api/comment';
import {useTracker} from "meteor/react-meteor-data";




export const Hello = () => {
  const [text, setText] = useState("");
  const user = useTracker(() => Meteor.user());
  const submit = (e:any) => {
    e.preventDefault();
    if (!text) return alert("Please express yourself");
    comment.insert({createdAt: new Date(), description: text.trim(), username:user?.username});
    setText("")
   console.log(user?.username)


  }
 

  const dbComment = useTracker(()=> comment.find({}, {sort:{createdAt: -1}}).fetch());
  
  const logout = () => Meteor.logout();
 

  return (
    <div style={{ padding:"0%",margin:"0%" }}>
      <div style={{display:"flex", backgroundColor: "#94F792", color: "white", padding:"0%", margin:"0%"}}>
        <h1 style={{marginLeft: "2%"}}>Cloud App</h1>
      <div style={{position:'absolute', right:"5%", top:"5%"}} className="user" onClick={logout}>
       logout
      </div>

      </div>

      <form onSubmit={submit} style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
     <input className="input" style={{width:"40vw", height: "20px", border:"none", borderBottom:"1px solid black"}} placeholder="What is on your mind?" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
     <button className="submit" style={{height: "20px", marginLeft:"10px", border:"none", backgroundColor:"#94F792"}} type="submit" >submit </button>     
     </form>
     <div style={{ left:"40%", transform: "translate(-50%)", position:'absolute', marginTop:"30px"}}>
     {dbComment.map(({description,_id,username},key)=> <Comments key={key} {...{description,_id,username}} />)}
     </div>
         </div>
  );
};
