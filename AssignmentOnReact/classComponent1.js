class Dinesh extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>My name is Dinesh</h1>
        <h2>I am very {this.props.name}</h2>
        <p>I become ____</p>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <h1>
        Content Component father : {this.props.father} mother:
        {this.props.mother}
      </h1>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <p>footer by {this.props.own}</p>;
  }
}
ReactDOM.render(
  <div>
    <Dinesh name="Ambitious" />
    <Content father="Srini" mother="kokila" />
    <Footer own="mine" />
  </div>,
  document.getElementById("root")
);
