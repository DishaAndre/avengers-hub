function Card({ item, onSelect }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      opacity: item.selected ? 0.5 : 1
    }}>
      <img src={item.image} width="150" />
      <h3>{item.name}</h3>
      <p>{item.power}</p>

      <button
        onClick={() => onSelect(item.id)}
        disabled={item.selected}
      >
        {item.selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default Card;