class Dinesh extends React.Component {
  render() {
    return (
      <div>
        <h1>Good Morning</h1>
        <h2>Good afternoon {this.props.name}</h2>
        <p>Good night</p>
      </div>
    );
  }
}
ReactDOM.render(<Dinesh />, document.getElementById("root"));
