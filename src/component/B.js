import C from "./C";

function B(props) {
  return (
    <div>
      <h3>Component B</h3>

      <C
        messageFromA={props.messageForC}
        sendReply={props.sendBackToA}
      />
    </div>
  );
}

export default B;
