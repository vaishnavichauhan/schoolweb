import React,{useState} from "react";
import { dataref } from "./firebase";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact(){
    const[userName,setUserName]= useState('');
    const[userSurname,setUserSurname]= useState('');
    
    const handleAdd=()=>{
        // dataref.ref('userInfomation').set({
        //     name:userName,
        //     surname:userSurname
        // }).catch(alert);
      dataref.ref('userInfomation').push().set({
        name:userName,
        surname:userSurname

      }).catch(alert);
      toast("Submit Succesfully");
      setUserName('');
      setUserSurname('')
    }
    return (
        <div>
            <ToastContainer />
            <label>Enter your name:
        <input
          type="text" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter your surname:
        <input
          type="text" 
          value={userSurname}
          onChange={(e) => setUserSurname(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleAdd}>
        Submit
      </button>
      
        </div>
    )
}
export default Contact;