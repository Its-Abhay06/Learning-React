const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Items itemsObj={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
};

function Items({ itemsObj }) {
  return (
    <li>
      <span style={itemsObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemsObj.quantity} {itemsObj.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default PackingList;
