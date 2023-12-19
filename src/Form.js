import React from 'react'
import {Link} from 'react-router-dom';
export default function Form() {
    
  return (
    <>
        <div id="forms">
            <h1 id="formID">Login to Continue</h1>
        <form>
            <input id="formELement" type="text" placeholder='Enter your Name'  required/><br />
            <input id="formELement" type="email" placeholder='Enter you Email Id' required/><br />
            <input id="formELement" type="password" placeholder='Enter Password' required/><br />
            
        </form>
        </div>
    </>
  )
}
