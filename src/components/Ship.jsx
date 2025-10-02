export default function Ship({name, model, cost_in_credits}) {
    return (
      <div className="card2">
        <h1>Name: {name}</h1>
        <h2>Model: {model}</h2>
        <h2>Cost in Credits: {cost_in_credits}</h2>
      </div>
    );
  }