export default function Person({name, rotation_period, climate}) {
    return (
      <div className="card3">
        <h1>Name: {name}</h1>
        <h2>Rotation Period: {rotation_period}</h2>
        <h2>Climate: {climate}</h2>
      </div>
    );
  }