function Dinesh(props) {
  return (
    <div>
      <h1>one of the {props.userName}</h1>
      <h1>He is a good man</h1>
    </div>
  );
}

function Content(props) {
  return <h1>He wants travel with {props.userName}</h1>;
}

function Footer(props) {
  return <h1>I love {props.userName}</h1>;
}

ReactDOM.render(
  <div>
    <Dinesh userName="Dinesh" />
    <Content userName="Srinivasan" />
    <Footer userName="kokila" />
  </div>,
  document.getElementById("root")
);
