import { Meteor } from 'meteor/meteor';
import tasks from '/imports/api/comment';
import { Accounts } from 'meteor/accounts-base';


const SEED_USERNAME = 'mete1@gmail.com';
const SEED_PASSWORD = 'password';



Meteor.startup(() => {
 tasks.remove({});
 
  if(tasks.find().count()===0){
    tasks.insert({
      _id:"1",
      description: "lets go",
      username:SEED_USERNAME,
      createdAt: new Date(),
    })
  }
  if (!Accounts.findUserByEmail(SEED_USERNAME)) {
    Accounts.createUser({
     email: SEED_USERNAME,
     username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  
  
  





});
