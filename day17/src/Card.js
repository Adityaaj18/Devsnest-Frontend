import "./style.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <h1>{props.title}</h1>
        <h2>{props.info}</h2>
      </div>
    </div>
  );
}

export default Card;
