export default function Ship({name, model, cost_in_credits}) {
    return (
      <div className="card2">
        <h3>Name: {name}</h3>
        <h2>Model: {model}</h2>
        <h2>Cost in Credits: {cost_in_credits}</h2>
      </div>
    );
  }