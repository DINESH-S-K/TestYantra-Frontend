const subjects = ["Tamil", "English", "Maths", "Science"];
const data = (
  <ul>
    {subjects.map((subject, index) => {
      return <li key={index}>{subject}</li>;
    })}
  </ul>
);
ReactDOM.render(data, document.getElementById("root"));
