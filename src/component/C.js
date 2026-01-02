function C(props) {
  const handleReply=()=>{
    props.sendReply("Received");
  }
  return (
    <div>
      <h4>Component C</h4>

      <p>Message from A: {props.messageFromA}</p>

      <button onClick={handleReply}>
        Acknowledge
      </button>
    </div>
  );
}

export default C;
