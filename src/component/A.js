import { useState } from "react";
import B from "./B";

function A() {
  const [sentText, setSentText] = useState("");
  const [msgFromC, setMsgFromC] = useState("");

  const handleSend=()=>{
    setSentText("Hi");
  }

  return (
    <div>
      <h4>Component A</h4>

      <button onClick={handleSend}>
        Send
      </button>

      <p>Message from C: {msgFromC}</p>

      <B
        messageForC={sentText}
        sendBackToA={setMsgFromC}
      />
    </div>
  );
}

export default A;
