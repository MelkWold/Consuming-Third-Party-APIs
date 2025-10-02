export default function Person({name, birth_year, eye_color}) {
    return (
      <div className="card1">
        <h1>Name: {name}</h1>
        <h2>Birth Year: {birth_year}</h2>
        <h2>Eye Color: {eye_color}</h2>
      </div>
    );
  }