const collections = ["List", "Tuple", "Queue", "Tree"];
const data = (
  <ul>
    {collections.map((collection, index) => {
      return <li key={index}>{collection}</li>;
    })}
  </ul>
);
ReactDOM.render(data, document.getElementById("root"));
