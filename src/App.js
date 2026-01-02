import { useState } from 'react';
import './App.css';
// import ComponentA from './component/componenA';
// import ComponentB from './component/componentB';
// import B from "./component/B";
// import A from "./component/A";
import Stopwatch from './component/stopwatch';

function App() {
  // const [msgToB, setMsgToB] = useState("");
  // const [msgToA, setMsgToA] = useState("");
  return (
    <div>
      {/* <ComponentA setMsgToB={setMsgToB} msgToA={msgToA} />
      <ComponentB msgToB={msgToB} setMsgToA={setMsgToA} /> */}


      <Stopwatch />
      {/* <A /> */}
    </div>
  );
}

export default App;
