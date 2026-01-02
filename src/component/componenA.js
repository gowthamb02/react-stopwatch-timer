// import { useState } from "react";

function ComponentA(props) {
    const handleSend=()=>{
       props.setMsgToB("hello");
    }
  
    return (
        <div>
            <h3>Component A</h3>
            <button onClick={handleSend}>Send</button>
            <p>Message from B: {props.msgToA}</p>
        </div>
    )
}
export default ComponentA