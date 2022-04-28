function Dinesh1(props) {
  return (
    <div>
      <h1>My name is {props.userName}</h1>
      <h1>He is brave</h1>
    </div>
  );
}

function Member(props) {
  return <h1>Content in functional Componenet {props.userName}</h1>;
}

function Footer(props) {
  return <h1>Footer in functional Componenet {props.userName}</h1>;
}

ReactDOM.render(
  <div>
    <Dinesh1 userName="Dinesh" />
    <Member userName="Member" />
    <Footer userName="Member2" />
  </div>,
  document.getElementById("root")
);
