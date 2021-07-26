import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import {Hello} from './Hello';
import {Login} from './Login'
export const App = () => {
  const user = useTracker(() => Meteor.user());
 
  
 return ( <div style={{margin:"0%", padding:"0%", width: "100vw", overflowX: 'hidden'}}>
   {user? <Hello/> : <Login/> } 
    

  </div>)
};
