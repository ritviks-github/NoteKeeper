import React from 'react'
export default function MainComp() {
    let inputs;
    let arr =  [];
    const inserting = ()=>{
        inputs = document.createElement('textarea');
        let close = document.createElement('button');
        inputs.classList.add('inputCLass');
        document.querySelector('#mainDiv').after(inputs);
        inputs.append(close);
        arr.push(inputs);
    }
    const deleting = ()=>{
    if(arr.length > 0){   let deletedInput = arr.pop();
        deletedInput.remove();}
    }
    const date = new Date().getFullYear();
  return (
    <>
        <div id="mainDiv">
        <button id="create" onClick={inserting}>+ Create Note</button> 
        <button id="create" onClick = {deleting}>- Delete Note</button> 
        </div>
        <br />
        <div id="footer">Copyright @ {date}</div>
    </>
  )
}
