import avengers from "../data/avengers";

function CharacterDetails() {
  return (
    <div style={{ padding: "40px" }}>
      {avengers.map((hero) => (
        <div key={hero.id} style={{ marginBottom: "50px" }}>
          <h2>{hero.name}</h2>
          <p>{hero.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterDetails;