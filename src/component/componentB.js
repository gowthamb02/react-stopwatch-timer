function ComponentB(props){
    const handleReceived =()=>{
        props.setMsgToA("Received");
    }
    return(
        <div>
            <h3>Component B</h3>
            <p>Message from A : {props.msgToB}</p>
            <button onClick={handleReceived}>Send</button>
        </div>
    )
}
export default ComponentB;