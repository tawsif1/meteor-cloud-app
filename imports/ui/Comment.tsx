import React from 'react';

interface CommentProps{
  _id?: string;
  username?: string;
  description: string;
}

export const Comments = ({description, username}: CommentProps) => {
 
  return (
    <div style={{  width:"auto", borderRadius: "10%" , backgroundColor:'#ECEEEB' ,border: "1px solid #ECEEEB", padding: "5px", marginBottom:"5px"}}>
     <span style={{display:"block", color:  "green"}}>{username}</span>
     <text style={{display:"block" ,backgroundColor:"#f5f5f5"}}>{description}</text> 

      
    </div>
  );
};
