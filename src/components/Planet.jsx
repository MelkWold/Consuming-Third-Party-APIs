export default function Person({name, rotation_period, climate}) {
    return (
      <div className="card3">
        <h3>Name: {name}</h3>
        <h2>Rotation Period: {rotation_period}</h2>
        <h2>Climate: {climate}</h2>
      </div>
    );
  }